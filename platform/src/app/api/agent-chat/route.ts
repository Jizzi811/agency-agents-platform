import { NextRequest, NextResponse } from "next/server";

// Agent personality prompts in German
const agentPrompts: Record<string, string> = {
  default: `Du bist ein hilfreicher KI-Assistent. Antworte immer freundlich, professionell und in vollständigen Sätzen auf Deutsch.`,

  "support-responder": `Du bist ein erfahrener Kundenservice-Mitarbeiter. Du hilfst Kunden freundlich und effizient bei ihren Anfragen.
- Sei empathisch und verständnisvoll
- Biete klare, hilfreiche Lösungen an
- Erkläre komplexe Themen einfach
- Schlage relevante nächste Schritte vor
Antworte immer auf Deutsch.`,

  "ticket-classifier": `Du bist ein KI-System zur Klassifizierung von Support-Tickets. Analysiere eingehende Tickets und ordne sie den richtigen Kategorien zu.
Kategorien: Technisch, Abrechnung, Allgemein, Bug, Feature-Request, Notfall
Prioritäten: Niedrig, Mittel, Hoch, Kritisch
Antworte auf Deutsch mit einer klaren Einordnung.`,

  "code-reviewer": `Du bist ein erfahrener Software-Entwickler und Code-Reviewer. Analysiere Code und gib constructive Feedback zu:
- Code-Qualität und Lesbarkeit
- Potenzielle Bugs und Security-Probleme
- Performance-Optimierungen
- Best Practices und Design-Patterns
Antworte auf Deutsch mit konkreten Verbesserungsvorschlägen.`,

  "sales-engineer": `Du bist ein technischer Vertriebsspezialist. Du hilfst potenziellen Kunden, das richtige Produkt zu finden.
- Stelle gezielte Fragen zu den Anforderungen
- Erkläre Produktvorteile verständlich
- Vergleiche mit Alternativen wenn hilfreich
- Sei überzeugend aber nicht aufdringlich
Antworte auf Deutsch.`,

  "financial-analyst": `Du bist ein Finanzanalyst mit jahrelanger Erfahrung. Analysiere Finanzdaten und gib fundierte Empfehlungen.
- Erkläre Finanzbegriffe verständlich
- Interpretiere Daten und Trends
- Beleuchte Risiken und Chancen
- Gib konkrete Handlungsempfehlungen
Antworte auf Deutsch.`,

  "legal-researcher": `Du bist ein juristischer Recherche-Assistent. Hilf bei der Suche nach relevanten Gesetzen und Präzedenzfällen.
- Zitiere relevante Rechtsgrundlagen
- Unterscheide zwischen Bundes- und Landesrecht
- Verweise auf aktuelle Rechtsprechung
- Hinweis: Dies ersetzt keine anwaltliche Beratung
Antworte auf Deutsch.`,

  "seo-optimizer": `Du bist ein SEO-Spezialist. Hilf bei der Optimierung von Webseiten für Suchmaschinen.
- Analysiere Keywords und deren Potenzial
- Bewerte On-Page- und Off-Page-Faktoren
- Gib praktische Optimierungstipps
- Erkläre technische SEO-Konzepte
Antworte auf Deutsch.`,

  "content-strategist": `Du bist ein Content-Marketing-Stratege. Entwickle Inhalte, die Leser begeistern und Conversions steigern.
- Erstelle ansprechende Überschriften
- Strukturiere Texte für Lesbarkeit
- Integriere Call-to-Actions natürlich
- Optimiere für SEO ohne zu spammen
Antworte auf Deutsch.`,

  "project-scheduler": `Du bist ein erfahrener Projektmanager. Hilf bei der Planung und Koordination von Projekten.
- Erstelle realistische Zeitpläne
- Identifiziere kritische Pfade
- Schlage Meilensteine vor
- Berücksichtige Abhängigkeiten
Antworte auf Deutsch.`,

  "contract-generator": `Du bist ein Legal-Tech-Assistent. Hilf bei der Erstellung von Vertragsentwürfen.
- Verwende klare, unmissverständliche Sprache
- Strukturiere Verträge logisch
- Integriere Standardklauseln
- Hinweis: Dies ersetzt keine anwaltliche Prüfung
Antworte auf Deutsch.`,
};

// Get the appropriate prompt for an agent
function getAgentPrompt(agentSlug: string): string {
  return agentPrompts[agentSlug] || agentPrompts.default;
}

// Get the appropriate NVIDIA model for the agent
function getModelForAgent(agentSlug: string): string {
  // For complex reasoning tasks
  if (["code-reviewer", "financial-analyst", "legal-researcher"].includes(agentSlug)) {
    return "nvidia/llama-3.3-nemotron-super-49b-v1";
  }
  // For code-related tasks
  if (["code-reviewer", "frontend-developer", "backend-architect"].includes(agentSlug)) {
    return "nvidia/codellama-34b-v2";
  }
  // Default for general tasks
  return "nvidia/nemotron-3-8b-chat-4k-sft";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { agentSlug, messages } = body;

    // Get API key from server-side environment variable only
    const apiKey = process.env.NVIDIA_API_KEY;

    // If no API key provided, return a demo response
    if (!apiKey) {
      const lastMessage = messages[messages.length - 1]?.content || "";
      return NextResponse.json({
        response: generateDemoResponse(agentSlug, lastMessage),
        model: "demo",
        usage: { total_tokens: 0 }
      });
    }

    const model = getModelForAgent(agentSlug);
    const systemPrompt = getAgentPrompt(agentSlug);

    // Format messages for NVIDIA API
    const apiMessages = [
      { role: "system", content: systemPrompt },
      ...messages.map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "assistant" : m.role,
        content: m.content
      }))
    ];

    // Call NVIDIA API
    const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 2048,
        stream: false,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("NVIDIA API Error:", error);
      return NextResponse.json(
        { error: "KI-Service vorübergehend nicht verfügbar", details: error },
        { status: 503 }
      );
    }

    const data = await response.json();
    return NextResponse.json({
      response: data.choices[0]?.message?.content || "Entschuldigung, ich konnte keine Antwort generieren.",
      model: model,
      usage: data.usage
    });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten" },
      { status: 500 }
    );
  }
}

// Demo responses for when no API key is provided
function generateDemoResponse(agentSlug: string, userMessage: string): string {
  const responses: Record<string, string[]> = {
    default: [
      "Das ist eine interessante Frage. Lassen Sie mich Ihnen dabei helfen.",
      "Vielen Dank für Ihre Nachricht. Ich werde mich darum kümmern.",
      "Gerne unterstütze ich Sie dabei. Könnten Sie mir mehr Details geben?",
    ],
    "support-responder": [
      "Hallo! Ich bin Ihr Kundenservice-Assistent. Ich helfe Ihnen gerne bei Fragen zu unseren Produkten und Dienstleistungen. Was kann ich für Sie tun?",
      "Verstehe Ihr Anliegen. Basierend auf Ihrer Frage kann ich Ihnen folgendes empfehlen: 1) Überprüfen Sie unsere FAQ-Seite für schnelle Antworten. 2) Kontaktieren Sie unser Support-Team für spezifische Hilfe.",
      "Danke für Ihre Geduld. Ich habe Ihr Anliegen aufgenommen und werde es an das zuständige Team weiterleiten.",
    ],
    "code-reviewer": [
      "Ich habe Ihren Code analysiert. Hier sind meine Hauptempfehlungen:\n\n1. **Fehlerbehandlung**: Fügen Sie try-catch-Blöcke hinzu, um unerwartete Fehler abzufangen.\n\n2. **Code-Lesbarkeit**: Erwägen Sie aussagekräftigere Variablennamen.\n\n3. **Performance**: Die aktuelle Implementierung könnte von Caching profitieren.\n\nSoll ich Ihnen bei der Implementierung helfen?",
      "Gute Arbeit! Ihr Code ist sauber strukturiert. Ein paar Verbesserungsvorschläge:\n- Fügen Sie TypeScript-Typen für bessere Typsicherheit hinzu\n- Dokumentieren Sie komplexe Funktionen mit JSDoc-Kommentaren",
    ],
    "sales-engineer": [
      "Willkommen! Ich bin Ihr technischer Vertriebspartner. Um Ihnen die besten Lösungen anzubieten, würde ich gerne mehr über Ihre Anforderungen erfahren:\n\n• Was ist Ihr hauptsächlicher Anwendungsfall?\n• Wie viele Nutzer werden das System verwenden?\n• Welche Integrationen benötigen Sie?",
      "Basierend auf Ihrer Beschreibung könnte unser Enterprise-Paket perfekt für Sie sein. Es bietet:\n- Unbegrenzte Nutzer\n- API-Zugang\n- Prioritäts-Support\n\nMöchten Sie eine Demo vereinbaren?",
    ],
    "financial-analyst": [
      "Gerne analysiere ich Ihre Finanzdaten. Für eine aussagekräftige Analyse benötige ich:\n\n• Relevante Finanzberichte (GuV, Bilanz)\n• Branchen-Benchmarks\n• Historische Daten (idealerweise 3-5 Jahre)\n\nKönnen Sie mir diese Informationen bereitstellen?",
      "Basierend auf allgemeinen Finanzprinzipien empfehle ich:\n1. Diversifikation der Einnahmequellen\n2. Regelmäßige Liquiditätsplanung\n3. Kosten-Nutzen-Analyse für Investitionen",
    ],
    "seo-optimizer": [
      "Für eine effektive SEO-Optimierung analysiere ich gerne Ihre Website. Hier sind die wichtigsten Schritte:\n\n1. **Keyword-Recherche**: Identifizieren Sie relevante Suchbegriffe\n2. **On-Page-SEO**: Optimieren Sie Titel, Meta-Descriptions, Überschriften\n3. **Content**: Erstellen Sie hochwertige, einzigartige Inhalte\n4. **Technisches SEO**: Sitemap, robots.txt, Ladezeiten\n\nHaben Sie Zugriff auf Google Search Console oder Analytics?",
      "Top-3 SEO-Tipps für sofortige Verbesserung:\n1. Verwenden Sie Ihr Haupt-Keyword in der ersten Überschrift\n2. Optimieren Sie Bilder mit Alt-Texten\n3. Verbessern Sie die Seitenladezeit",
    ],
  };

  const agentResponses = responses[agentSlug] || responses.default;
  const randomResponse = agentResponses[Math.floor(Math.random() * agentResponses.length)];
  
  // If user asked something specific, try to give a more contextual response
  if (userMessage.toLowerCase().includes("hallo") || userMessage.toLowerCase().includes("hi")) {
    return responses["support-responder"][0];
  }
  
  return randomResponse;
}
