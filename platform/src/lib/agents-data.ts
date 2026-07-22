import { Agent, Category } from "@/types";

export const agentsData: Agent[] = [
  // Kundenservice (10)
  { id: "1", slug: "support-responder", name: "Kundenservice-Agent", description: "Intelligenter Kundenservice-Agent, der Anfragen mit Empathie und Genauigkeit bearbeitet.", category: "customer-support", rating: 4.9, usageCount: 15420, icon: "🎧", isFeatured: true },
  { id: "2", slug: "support-analytics", name: "Support-Analytik", description: "Tiefe Einblicke und Analysen für Ihre Support-Operationen.", category: "customer-support", rating: 4.7, usageCount: 8930, icon: "📊", isNew: true },
  { id: "3", slug: "ticket-classifier", name: "Ticket-Klassifizierer", description: "KI-gestützte Ticket-Kategorisierung und -Weiterleitung.", category: "customer-support", rating: 4.8, usageCount: 12400, icon: "🎫" },
  { id: "4", slug: "knowledge-base-manager", name: "Wissensdatenbank-Manager", description: "Automatische Aktualisierung und Pflege Ihrer Wissensdatenbank.", category: "customer-support", rating: 4.6, usageCount: 7800, icon: "📚" },
  { id: "5", slug: "sentiment-analyzer", name: "Stimmungsanalyse", description: "Echtzeit-Tracking von Kundestimmungen und Benachrichtigungen.", category: "customer-support", rating: 4.7, usageCount: 5600, icon: "💭" },
  { id: "6", slug: "escalation-manager", name: "Eskalations-Manager", description: "Intelligente Eskalationsbearbeitung und Prioritätenmanagement.", category: "customer-support", rating: 4.5, usageCount: 4500, icon: "⚡" },
  { id: "7", slug: "response-generator", name: "Antwort-Generator", description: "Erstellt personalisierte Kundenantworten in Sekunden.", category: "customer-support", rating: 4.9, usageCount: 18200, icon: "✍️" },
  { id: "8", slug: "satisfaction-tracker", name: "Zufriedenheits-Tracker", description: "CSAT-Überwachung und Verbesserungsvorschläge.", category: "customer-support", rating: 4.6, usageCount: 6200, icon: "📈" },
  { id: "9", slug: "multi-language-support", name: "Mehrsprachiger Support", description: "24/7 Support in über 50 Sprachen.", category: "customer-support", rating: 4.8, usageCount: 9400, icon: "🌍" },
  { id: "10", slug: "chatbot-builder", name: "Chatbot-Ersteller", description: "Erstellen und deployen Sie individuelle Support-Chatbots.", category: "customer-support", rating: 4.7, usageCount: 7100, icon: "🤖" },

  // Vertrieb (10)
  { id: "11", slug: "sales-engineer", name: "Vertriebsingenieur", description: "Technischer Vertriebsagent für Lead-Qualifizierung und Produktvorführungen.", category: "sales", rating: 4.8, usageCount: 12100, icon: "💼", isNew: true },
  { id: "12", slug: "sales-coach", name: "Vertriebs-Trainer", description: "KI-gestütztes Vertriebstraining und Coaching.", category: "sales", rating: 4.6, usageCount: 6780, icon: "🎓" },
  { id: "13", slug: "outbound-strategist", name: "Outbound-Stratege", description: "Strategischer Agent für Outbound-Kampagnen und Lead-Generierung.", category: "sales", rating: 4.7, usageCount: 5420, icon: "📞" },
  { id: "14", slug: "lead-qualifier", name: "Lead-Qualifizierer", description: "Automatische Lead-Bewertung und -Qualifizierung.", category: "sales", rating: 4.9, usageCount: 15600, icon: "🎯" },
  { id: "15", slug: "deal-closer", name: "Deal-Abschließer", description: "KI-gestützte Abschlusstechniken und Verhandlungsführung.", category: "sales", rating: 4.8, usageCount: 8900, icon: "🤝" },
  { id: "16", slug: "pipeline-optimizer", name: "Pipeline-Optimierer", description: "Vertriebspipeline-Analyse und -Optimierung.", category: "sales", rating: 4.7, usageCount: 6300, icon: "📊" },
  { id: "17", slug: "demo-scheduler", name: "Demo-Planer", description: "Automatische Demo-Buchung und Erinnerungen.", category: "sales", rating: 4.6, usageCount: 4800, icon: "📅" },
  { id: "18", slug: "competitive-analyst", name: "Wettbewerbs-Analytiker", description: "Echtzeit-Wettbewerbsintelligenz.", category: "sales", rating: 4.8, usageCount: 7200, icon: "🔍" },
  { id: "19", slug: "pricing-specialist", name: "Preis-Spezialist", description: "Dynamische Preisstrategien und Angebotskalkulation.", category: "sales", rating: 4.5, usageCount: 3900, icon: "💲" },
  { id: "20", slug: "territory-manager", name: "Gebiets-Manager", description: "Vertriebsgebietsplanung und -zuweisung.", category: "sales", rating: 4.6, usageCount: 4100, icon: "🗺️" },

  // Entwicklung (15)
  { id: "21", slug: "code-reviewer", name: "Code-Prüfer", description: "Automatische Code-Prüfung mit Sicherheits- und Best-Practice-Checks.", category: "engineering", rating: 4.7, usageCount: 23100, icon: "🔍" },
  { id: "22", slug: "frontend-developer", name: "Frontend-Entwickler", description: "Full-Stack Frontend-Entwicklung mit modernen Frameworks.", category: "engineering", rating: 4.8, usageCount: 18700, icon: "🎨" },
  { id: "23", slug: "backend-architect", name: "Backend-Architekt", description: "Skalierbare Backend-Architektur und API-Design.", category: "engineering", rating: 4.9, usageCount: 12300, icon: "🏗️" },
  { id: "24", slug: "devops-automator", name: "DevOps-Automatisierer", description: "CI/CD-Pipelines, Infrastructure as Code und Deployment-Automatisierung.", category: "engineering", rating: 4.8, usageCount: 8900, icon: "⚙️", isNew: true },
  { id: "25", slug: "security-auditor", name: "Sicherheits-Auditor", description: "Umfassende Sicherheits-Schwachstellenanalyse.", category: "engineering", rating: 4.9, usageCount: 11200, icon: "🔒" },
  { id: "26", slug: "api-designer", name: "API-Designer", description: "RESTful und GraphQL API-Design-Spezialist.", category: "engineering", rating: 4.7, usageCount: 8500, icon: "🔗" },
  { id: "27", slug: "database-optimzer", name: "Datenbank-Optimierer", description: "Abfrageoptimierung und Schema-Design.", category: "engineering", rating: 4.8, usageCount: 7600, icon: "🗄️" },
  { id: "28", slug: "testing-automator", name: "Test-Automatisierer", description: "Automatisiertes Unit-, Integrations- und E2E-Testing.", category: "engineering", rating: 4.6, usageCount: 9400, icon: "🧪" },
  { id: "29", slug: "performance-tuner", name: "Performance-Optimierer", description: "Anwendungsleistungs-Optimierung.", category: "engineering", rating: 4.7, usageCount: 6800, icon: "🚀" },
  { id: "30", slug: "documentation-writer", name: "Dokumentations-Autor", description: "Automatische technische Dokumentationserstellung.", category: "engineering", rating: 4.5, usageCount: 5200, icon: "📝" },
  { id: "31", slug: "refactoring-expert", name: "Refactoring-Experte", description: "Code-Qualitätsverbesserung und Modernisierung.", category: "engineering", rating: 4.8, usageCount: 6100, icon: "🔧" },
  { id: "32", slug: "cloud-architect", name: "Cloud-Architekt", description: "Multi-Cloud Infrastruktur-Design.", category: "engineering", rating: 4.9, usageCount: 8300, icon: "☁️" },
  { id: "33", slug: "microservices-advisor", name: "Microservices-Berater", description: "Service-Zerlegung und -Orchestrierung.", category: "engineering", rating: 4.7, usageCount: 5900, icon: "🔗" },
  { id: "34", slug: "debugging-assistant", name: "Debugging-Assistent", description: "Intelligente Fehlererkennung und -behebung.", category: "engineering", rating: 4.8, usageCount: 14500, icon: "🐛" },
  { id: "35", slug: "dependency-manager", name: "Abhängigkeits-Manager", description: "Bibliotheks-Updates und Abhängigkeitsauflösung.", category: "engineering", rating: 4.6, usageCount: 4700, icon: "📦" },

  // Design (10)
  { id: "36", slug: "ui-designer", name: "UI-Designer", description: "Schöne, moderne UI-Designs mit Barrierefreiheit.", category: "design", rating: 4.9, usageCount: 11200, icon: "🎨", isNew: true },
  { id: "37", slug: "ux-researcher", name: "UX-Forscher", description: "UX-Forschung und Usability-Analyse.", category: "design", rating: 4.6, usageCount: 4560, icon: "🔬" },
  { id: "38", slug: "brand-guardian", name: "Markenwächter", description: "Markenkonsistenz-Prüfung und Design-System-Durchsetzung.", category: "design", rating: 4.7, usageCount: 3890, icon: "🛡️" },
  { id: "39", slug: "logo-generator", name: "Logo-Generator", description: "KI-gestützte Logo-Design-Variationen.", category: "design", rating: 4.5, usageCount: 7800, icon: "✏️" },
  { id: "40", slug: "color-palette-creator", name: "Farbpaletten-Ersteller", description: "Harmonische Farbschemata-Erstellung.", category: "design", rating: 4.6, usageCount: 3400, icon: "🎨" },
  { id: "41", slug: "prototype-builder", name: "Prototyp-Ersteller", description: "Interaktive Prototypen-Erstellung aus Beschreibungen.", category: "design", rating: 4.8, usageCount: 5600, icon: "📱" },
  { id: "42", slug: "icon-collector", name: "Icon-Sammler", description: "Kuratierte Icon-Vorschläge für jeden Kontext.", category: "design", rating: 4.4, usageCount: 2900, icon: "🖼️" },
  { id: "43", slug: "accessibility-checker", name: "Barrierefreiheits-Prüfer", description: "WCAG-Konformitätsprüfung und -Korrekturen.", category: "design", rating: 4.7, usageCount: 4200, icon: "♿" },
  { id: "44", slug: "responsive-tester", name: "Responsive-Tester", description: "Geräteübergreifendes Design-Testing.", category: "design", rating: 4.5, usageCount: 3100, icon: "📺" },
  { id: "45", slug: "design-critic", name: "Design-Kritiker", description: "Professionelles Design-Feedback und Verbesserungen.", category: "design", rating: 4.6, usageCount: 3800, icon: "💬" },

  // Marketing (10)
  { id: "46", slug: "content-strategist", name: "Content-Stratege", description: "Content-Planung und Kalender-Optimierung.", category: "marketing", rating: 4.8, usageCount: 8900, icon: "📣" },
  { id: "47", slug: "seo-optimizer", name: "SEO-Optimierer", description: "Suchmaschinenoptimierungs-Spezialist.", category: "marketing", rating: 4.9, usageCount: 12400, icon: "🔍" },
  { id: "48", slug: "social-media-manager", name: "Social-Media-Manager", description: "Automatisiertes Social-Media-Posting und Engagement.", category: "marketing", rating: 4.7, usageCount: 7600, icon: "📱" },
  { id: "49", slug: "email-campaign-builder", name: "E-Mail-Kampagnen-Builder", description: "Hochkonvertierende E-Mail-Sequenz-Erstellung.", category: "marketing", rating: 4.8, usageCount: 10200, icon: "✉️" },
  { id: "50", slug: "copywriting-assistant", name: "Texter-Assistent", description: "Überzeugende Texterstellung für alle Kanäle.", category: "marketing", rating: 4.9, usageCount: 15600, icon: "✍️" },
  { id: "51", slug: "analytics-interpreter", name: "Analytik-Interpret", description: "Marketing-Datenanalyse und Empfehlungen.", category: "marketing", rating: 4.6, usageCount: 5800, icon: "📊" },
  { id: "52", slug: "campaign-tracker", name: "Kampagnen-Tracker", description: "Multi-Channel Kampagnen-Performance-Überwachung.", category: "marketing", rating: 4.7, usageCount: 6400, icon: "📈" },
  { id: "53", slug: "audience-segmentor", name: "Zielgruppen-Segmentierer", description: "Kundensegmentierung und -profiling.", category: "marketing", rating: 4.8, usageCount: 7200, icon: "👥" },
  { id: "54", slug: "competitor-monitor", name: "Wettbewerber-Monitor", description: "Echtzeit-Wettbewerber-Aktivitätsverfolgung.", category: "marketing", rating: 4.5, usageCount: 4300, icon: "👁️" },
  { id: "55", slug: "trend-spotter", name: "Trend-Scouter", description: "Branchen-Trend-Identifikation und -Analyse.", category: "marketing", rating: 4.7, usageCount: 5100, icon: "🔮" },

  // Produkt (8)
  { id: "56", slug: "roadmap-planner", name: "Roadmap-Planer", description: "Produkt-Roadmap-Erstellung und -Priorisierung.", category: "product", rating: 4.8, usageCount: 6800, icon: "🗺️" },
  { id: "57", slug: "feature-prioritizer", name: "Feature-Priorisierer", description: "Datenbasierte Feature-Priorisierung.", category: "product", rating: 4.7, usageCount: 5400, icon: "⭐" },
  { id: "58", slug: "user-story-writer", name: "User-Story-Autor", description: "Automatische User-Story und Akzeptanzkriterien.", category: "product", rating: 4.6, usageCount: 6200, icon: "📖" },
  { id: "59", slug: "prd-generator", name: "PRD-Generator", description: "Produktanforderungsdokument-Erstellung.", category: "product", rating: 4.8, usageCount: 4700, icon: "📄" },
  { id: "60", slug: "market-researcher", name: "Markt-Forscher", description: "Marktanalyse und Chancen-Identifikation.", category: "product", rating: 4.9, usageCount: 8300, icon: "🔬" },
  { id: "61", slug: "competitor-analyzer", name: "Wettbewerber-Analytiker", description: "Tiefer Vergleich von Wettbewerber-Features.", category: "product", rating: 4.7, usageCount: 5900, icon: "📊" },
  { id: "62", slug: "release-manager", name: "Release-Manager", description: "Release-Planung und -Koordination.", category: "product", rating: 4.5, usageCount: 3600, icon: "🚀" },
  { id: "63", slug: "feedback-synthesizer", name: "Feedback-Synthesizer", description: "Kundenfeedback-Aggregation und Einblicke.", category: "product", rating: 4.8, usageCount: 7100, icon: "💬" },

  // Finanzen (7)
  { id: "64", slug: "financial-analyst", name: "Finanz-Analytiker", description: "Investitionsanalyse, Portfolio-Tracking und Markteinblicke.", category: "finance", rating: 4.6, usageCount: 7890, icon: "💰" },
  { id: "65", slug: "bookkeeper", name: "Buchhalter", description: "Automatische Buchhaltung und Ausgabenverfolgung.", category: "finance", rating: 4.8, usageCount: 5430, icon: "📒" },
  { id: "66", slug: "invoice-generator", name: "Rechnungs-Generator", description: "Professionelle Rechnungserstellung und -verfolgung.", category: "finance", rating: 4.7, usageCount: 4200, icon: "📑" },
  { id: "67", slug: "budget-forecaster", name: "Budget-Prognostiker", description: "KI-gestützte Budgetplanung und -vorhersage.", category: "finance", rating: 4.6, usageCount: 3800, icon: "📊" },
  { id: "68", slug: "expense-categorizer", name: "Ausgaben-Kategorisierer", description: "Automatische Ausgabenklassifizierung und -berichterstattung.", category: "finance", rating: 4.5, usageCount: 2900, icon: "🏷️" },
  { id: "69", slug: "invoice-approver", name: "Rechnungs-Genehmiger", description: "Automatisierter Rechnungsprüfungs- und Genehmigungs-Workflow.", category: "finance", rating: 4.7, usageCount: 3400, icon: "✅" },
  { id: "70", slug: "financial-report-generator", name: "Finanzbericht-Generator", description: "Automatische Finanzberichterstellung.", category: "finance", rating: 4.8, usageCount: 4600, icon: "📈" },

  // Gesundheitswesen (5)
  { id: "71", slug: "patient-intake", name: "Patienten-Aufnahme", description: "Automatisierte Patienteninformationssammlung.", category: "healthcare", rating: 4.9, usageCount: 3200, icon: "🏥" },
  { id: "72", slug: "medical-coder", name: "Medizinischer Kodierer", description: "ICD-10 und CPT-Code-Zuweisung.", category: "healthcare", rating: 4.8, usageCount: 2800, icon: "💊" },
  { id: "73", slug: "appointment-scheduler", name: "Termin-Planer", description: "Intelligente Terminbuchung und Erinnerungen.", category: "healthcare", rating: 4.7, usageCount: 4100, icon: "📅" },
  { id: "74", slug: "symptom-checker", name: "Symptom-Checker", description: "Patienten-Symptom-Triage und -Beratung.", category: "healthcare", rating: 4.6, usageCount: 5600, icon: "🩺" },
  { id: "75", slug: "healthcare-analyst", name: "Gesundheitswesen-Analytiker", description: "Klinische Datenanalyse und Berichterstattung.", category: "healthcare", rating: 4.8, usageCount: 2400, icon: "📊" },

  // Sicherheit (5)
  { id: "76", slug: "penetration-tester", name: "Penetration-Tester", description: "Automatisierte Sicherheits-Schwachstellenbewertung.", category: "security", rating: 4.9, usageCount: 4800, icon: "🔓" },
  { id: "77", slug: "compliance-monitor", name: "Compliance-Monitor", description: "SOC2, DSGVO, BDSG Compliance-Prüfung.", category: "security", rating: 4.8, usageCount: 3600, icon: "📋" },
  { id: "78", slug: "threat-detector", name: "Bedrohungs-Detektor", description: "Echtzeit-Bedrohungserkennung und -benachrichtigung.", category: "security", rating: 4.9, usageCount: 5200, icon: "⚠️" },
  { id: "79", slug: "access-manager", name: "Zugriffs-Manager", description: "Identitäts- und Zugriffsmanagement-Automatisierung.", category: "security", rating: 4.7, usageCount: 2900, icon: "🔑" },
  { id: "80", slug: "security-reporter", name: "Sicherheits-Berichterstatter", description: "Automatische Sicherheits-Auditbericht-Erstellung.", category: "security", rating: 4.6, usageCount: 2100, icon: "📝" },

  // Spieleentwicklung (5)
  { id: "81", slug: "game-designer", name: "Spiel-Designer", description: "Spielmechanik und Level-Design-Unterstützung.", category: "game-development", rating: 4.7, usageCount: 3400, icon: "🎮" },
  { id: "82", slug: "narrative-writer", name: "Narrativ-Autor", description: "Story-Schreiben und Dialog-Generierung.", category: "game-development", rating: 4.8, usageCount: 2800, icon: "📖" },
  { id: "83", slug: "balance-calculator", name: "Balance-Rechner", description: "Spielbalance und Schwierigkeits-Tuning.", category: "game-development", rating: 4.6, usageCount: 1900, icon: "⚖️" },
  { id: "84", slug: "asset-describer", name: "Asset-Beschreiber", description: "Spiel-Asset-Spezifikationen und -Beschreibungen.", category: "game-development", rating: 4.5, usageCount: 1600, icon: "🖼️" },
  { id: "85", slug: "qa-tester", name: "QA-Tester", description: "Automatisiertes Spiel-Testing und Fehlerberichterstattung.", category: "game-development", rating: 4.7, usageCount: 2300, icon: "🧪" },

  // Projektmanagement (5)
  { id: "86", slug: "project-scheduler", name: "Projekt-Planer", description: "Zeitplanung und Meilenstein-Planung.", category: "project-management", rating: 4.8, usageCount: 5400, icon: "📅" },
  { id: "87", slug: "resource-allocator", name: "Ressourcen-Allokator", description: "Team-Auslastungs-Balancing und -Optimierung.", category: "project-management", rating: 4.7, usageCount: 3800, icon: "👥" },
  { id: "88", slug: "risk-assessor", name: "Risiko-Bewerter", description: "Projektrisiko-Identifikation und -Minderung.", category: "project-management", rating: 4.6, usageCount: 2900, icon: "⚠️" },
  { id: "89", slug: "standup-summarizer", name: "Standup-Zusammenfasser", description: "Tägliche Standup-Notizen und Aktionspunkte.", category: "project-management", rating: 4.5, usageCount: 4200, icon: "📝" },
  { id: "90", slug: "retrospective-facilitator", name: "Retrospektive-Moderator", description: "Sprint-Retrospektive-Organisation und Einblicke.", category: "project-management", rating: 4.7, usageCount: 3100, icon: "🔄" },

  // Integrationen (5)
  { id: "91", slug: "integration-builder", name: "Integrations-Builder", description: "API-Integrations-Design und -Implementierung.", category: "integrations", rating: 4.8, usageCount: 4600, icon: "🔗" },
  { id: "92", slug: "webhook-manager", name: "Webhook-Manager", description: "Webhook-Erstellung und -Testing.", category: "integrations", rating: 4.6, usageCount: 2800, icon: "🪝" },
  { id: "93", slug: "data-mapper", name: "Daten-Mapper", description: "Datentransformation und -Mapping.", category: "integrations", rating: 4.7, usageCount: 3400, icon: "🗺️" },
  { id: "94", slug: "sync-monitor", name: "Sync-Monitor", description: "Datensynchronisations-Status und -Benachrichtigungen.", category: "integrations", rating: 4.5, usageCount: 2200, icon: "🔄" },
  { id: "95", slug: "oauth-helper", name: "OAuth-Helfer", description: "OAuth-Integration und Token-Management.", category: "integrations", rating: 4.6, usageCount: 1900, icon: "🔐" },

  // Spezialisiert (5)
  { id: "96", slug: "legal-researcher", name: "Rechts-Rechercheur", description: "Rechtsprechungs- und Gesetzesrecherche.", category: "specialized", rating: 4.8, usageCount: 2800, icon: "⚖️" },
  { id: "97", slug: "contract-generator", name: "Vertrags-Generator", description: "Rechtsvertrags-Template-Generierung.", category: "specialized", rating: 4.9, usageCount: 3200, icon: "📄" },
  { id: "98", slug: "research-assistant", name: "Forschungs-Assistent", description: "Akademische Forschung und Zitationsverwaltung.", category: "specialized", rating: 4.7, usageCount: 4100, icon: "🔬" },
  { id: "99", slug: "data-visualizer", name: "Daten-Visualisierer", description: "Diagramm- und Grafik-Empfehlungen.", category: "specialized", rating: 4.6, usageCount: 5600, icon: "📊" },
  { id: "100", slug: "translation-agent", name: "Übersetzungs-Agent", description: "Professionelle Übersetzung in über 100 Sprachen.", category: "specialized", rating: 4.8, usageCount: 7800, icon: "🌍" },
];

export const categories: Category[] = [
  { id: "1", name: "Kundenservice", slug: "customer-support", icon: "🎧", agentCount: 10 },
  { id: "2", name: "Vertrieb", slug: "sales", icon: "💼", agentCount: 10 },
  { id: "3", name: "Entwicklung", slug: "engineering", icon: "⚙️", agentCount: 15 },
  { id: "4", name: "Design", slug: "design", icon: "🎨", agentCount: 10 },
  { id: "5", name: "Marketing", slug: "marketing", icon: "📣", agentCount: 10 },
  { id: "6", name: "Produkt", slug: "product", icon: "📦", agentCount: 8 },
  { id: "7", name: "Finanzen", slug: "finance", icon: "💰", agentCount: 7 },
  { id: "8", name: "Gesundheitswesen", slug: "healthcare", icon: "🏥", agentCount: 5 },
  { id: "9", name: "Sicherheit", slug: "security", icon: "🔒", agentCount: 5 },
  { id: "10", name: "Spieleentwicklung", slug: "game-development", icon: "🎮", agentCount: 5 },
  { id: "11", name: "Projektmanagement", slug: "project-management", icon: "📋", agentCount: 5 },
  { id: "12", name: "Integrationen", slug: "integrations", icon: "🔗", agentCount: 5 },
  { id: "13", name: "Spezialisiert", slug: "specialized", icon: "✨", agentCount: 5 },
];

export function getAgentBySlug(slug: string): Agent | undefined {
  return agentsData.find((agent) => agent.slug === slug);
}

export function getAgentsByCategory(category: string): Agent[] {
  return agentsData.filter((agent) => agent.category.toLowerCase() === category.toLowerCase());
}
