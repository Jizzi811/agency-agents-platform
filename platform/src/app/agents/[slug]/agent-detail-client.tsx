"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Star, Play, Zap, Check, ArrowLeft, Share2, Heart, 
  ChevronRight, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAgentBySlug, agentsData } from "@/lib/agents-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Long descriptions in German for each category
const categoryLongDescriptions: Record<string, { title: string; features: string[]; perfectFor: string }> = {
  "customer-support": {
    title: "Der Kundenservice-Agent ist darauf ausgelegt, hochvolumige Kundenanfragen mit gleichbleibender Qualität und Empathie zu bearbeiten.",
    features: [
      "Sofortige Beantwortung von FAQs mit präzisen Informationen",
      "Eskalation komplexer Probleme an menschliche Agenten",
      "Mehrsprachiger Support für globale Kunden",
      "Automatische Support-Ticket-Erstellung",
      "Lernen aus Interaktionen zur kontinuierlichen Verbesserung"
    ],
    perfectFor: "Perfekt für Unternehmen, die Reaktionszeiten reduzieren und gleichzeitig hohe Kundenzufriedenheit aufrechterhalten möchten."
  },
  "sales": {
    title: "Der Vertriebsagent powered Ihr Vertriebsteam mit intelligenter Automatisierung.",
    features: [
      "Lead-Qualifizierung und -Bewertung",
      "Demo-Terminplanung mit Kalenderintegration",
      "Echtzeit-Einwandbehandlung während Anrufen",
      "Personalisierte Follow-up-Generierung",
      "Automatische CRM-Dateneingabe"
    ],
    perfectFor: "Ideal für B2B-Unternehmen, die Konversionsraten erhöhen und die Vertriebszykluslänge reduzieren möchten."
  },
  "engineering": {
    title: "Der Code-Reviewer agiert als erste Verteidigungslinie für Code-Qualität.",
    features: [
      "Erkennung von Sicherheitslücken",
      "Identifikation von Performance-Flaschenhälsen",
      "Prüfung der Code-Stil-Konsistenz",
      "Durchsetzung von Best Practices",
      "Automatisierte Lösungsvorschläge"
    ],
    perfectFor: "Perfekt für Teams, die hohe Code-Qualität maintain ohne die Entwicklung zu verlangsamen."
  },
  "design": {
    title: "Der Design-Agent hilft Ihnen, schöne und funktionale Benutzeroberflächen zu erstellen.",
    features: [
      "Modernes UI-Design mit Barrierefreiheit",
      "Markenkonsistente Design-Systeme",
      "Responsive Design für alle Geräte",
      "Schnelle Prototypen-Erstellung",
      "Feedback und Verbesserungsvorschläge"
    ],
    perfectFor: "Ideal für Designer und Entwickler, die konsistente und ansprechende Interfaces benötigen."
  },
  "marketing": {
    title: "Der Marketing-Agent unterstützt Sie bei der Erstellung und Optimierung von Marketing-Inhalten.",
    features: [
      "Content-Strategie und -Planung",
      "SEO-Optimierung für Suchmaschinen",
      "Social-Media-Posting und Engagement",
      "E-Mail-Kampagnen-Erstellung",
      "Analyse und Interpretation von Marketing-Daten"
    ],
    perfectFor: "Perfekt für Marketing-Teams, die effizient hochwertige Inhalte erstellen möchten."
  },
  "finance": {
    title: "Der Finanzanalyst bietet fundierte Finanzanalysen und Empfehlungen.",
    features: [
      "Investitionsanalyse und Portfolio-Tracking",
      "Automatisierte Buchhaltung und Ausgabenverfolgung",
      "Budgetplanung und -prognose",
      "Rechnungsstellung und -genehmigung",
      "Finanzberichterstattung"
    ],
    perfectFor: "Ideal für Unternehmen, die ihre Finanzprozesse automatisieren und optimieren möchten."
  },
  "default": {
    title: "Dieser KI-Agent wurde entwickelt, um Sie bei Ihren täglichen Aufgaben zu unterstützen.",
    features: [
      "Intelligente Automatisierung wiederkehrender Aufgaben",
      "Datengestützte Einblicke und Empfehlungen",
      "Nahtlose Integration in Ihre Workflows",
      "Kontinuierliches Lernen und Verbesserung",
      "Skalierbare Lösungen für Unternehmen"
    ],
    perfectFor: "Perfekt für Fachleute und Unternehmen, die ihre Produktivität steigern möchten."
  }
};

export default function AgentDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const agent = getAgentBySlug(slug);
  
  const [isFavorite, setIsFavorite] = useState(false);

  if (!agent) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-section mb-4">Agent nicht gefunden</h1>
          <Link href="/agents">
            <Button>Zurück zu allen Agenten</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get long description based on category
  const categoryInfo = categoryLongDescriptions[agent.category] || categoryLongDescriptions.default;
  
  // Get related agents from same category
  const relatedAgents = agentsData
    .filter(a => a.category === agent.category && a.slug !== agent.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom px-6">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link 
            href="/agents" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zu allen Agenten
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center text-4xl">
                  {agent.icon || "🤖"}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="default" className="capitalize">
                      {agent.category.replace("-", " ")}
                    </Badge>
                    {agent.isNew && <Badge variant="new">Neu</Badge>}
                    {agent.isFeatured && <Badge variant="premium">Empfohlen</Badge>}
                  </div>
                  <h1 className="heading-section mb-2">{agent.name}</h1>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="font-semibold">{agent.rating}</span>
                      <span className="text-white/60">({agent.usageCount.toLocaleString()} Nutzungen)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Link href={`/agents/${agent.slug}/run`}>
                <Button size="lg" className="gap-2">
                  <Play className="w-5 h-5" />
                  Jetzt testen
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="ghost"
                onClick={() => setIsFavorite(!isFavorite)}
                className={isFavorite ? "text-red-400" : ""}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-400" : ""}`} />
              </Button>
              <Button size="lg" variant="ghost">
                <Share2 className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="bg-white/5 border border-white/10">
                <TabsTrigger value="overview">Übersicht</TabsTrigger>
                <TabsTrigger value="capabilities">Funktionen</TabsTrigger>
                <TabsTrigger value="docs">Dokumentation</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="prose prose-invert max-w-none"
                >
                  <p className="text-lg text-white/80 leading-relaxed mb-6">
                    {agent.description}
                  </p>
                  <div className="whitespace-pre-line text-white/70">
                    <p className="font-semibold text-white mb-4">{categoryInfo.title}</p>
                    
                    {categoryInfo.features.map((feature, i) => (
                      <p key={i} className="mb-2">• {feature}</p>
                    ))}
                    
                    <p className="mt-6 text-primary-light">{categoryInfo.perfectFor}</p>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="capabilities" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary-light" />
                      Funktionen
                    </h3>
                    <ul className="space-y-3">
                      {categoryInfo.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/70">
                          <Check className="w-4 h-4 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Card className="p-6">
                    <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                      <ExternalLink className="w-5 h-5 text-secondary-light" />
                      Integrationen
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Slack", "Teams", "API", "Webhooks", "CRM"].map((int, i) => (
                        <Badge key={i} variant="default">{int}</Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="docs" className="mt-6">
                <Card className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-4">Erste Schritte</h3>
                  <div className="space-y-4 text-white/70">
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary-light text-sm font-semibold">1</span>
                      <div>
                        <p className="font-semibold text-white">Agent testen</p>
                        <p className="text-sm">Klicken Sie auf "Jetzt testen" und starten Sie eine Konversation.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary-light text-sm font-semibold">2</span>
                      <div>
                        <p className="font-semibold text-white">Wissen hinzufügen</p>
                        <p className="text-sm">Laden Sie Dokumente hoch oder verbinden Sie APIs.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary-light text-sm font-semibold">3</span>
                      <div>
                        <p className="font-semibold text-white">In Workflows integrieren</p>
                        <p className="text-sm">Verbinden Sie den Agenten mit Ihren bestehenden Tools.</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-24 space-y-6"
            >
              {/* AI Powered Card */}
              <Card className="p-6">
                <div className="text-center mb-6">
                  <Badge variant="ai-powered" className="text-sm px-4 py-1">KI-gestützt</Badge>
                </div>
                <Link href={`/agents/${agent.slug}/run`}>
                  <Button className="w-full mb-4" size="lg">
                    Jetzt kostenlos testen
                  </Button>
                </Link>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center gap-2 text-white/70">
                    <Check className="w-4 h-4 text-green-400" />
                    Voller Funktionsumfang
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <Check className="w-4 h-4 text-green-400" />
                    Prioritäts-Support
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <Check className="w-4 h-4 text-green-400" />
                    Jederzeit kündbar
                  </li>
                </ul>
              </Card>

              {/* Quick Info */}
              <Card className="p-6">
                <h3 className="font-display font-semibold mb-4">Infos</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-white/60">Bewertung</dt>
                    <dd className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      {agent.rating}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-white/60">Nutzungen</dt>
                    <dd>{agent.usageCount.toLocaleString()}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-white/60">Kategorie</dt>
                    <dd className="capitalize">{agent.category.replace("-", " ")}</dd>
                  </div>
                </dl>
              </Card>

              {/* Related Agents */}
              {relatedAgents.length > 0 && (
                <Card className="p-6">
                  <h3 className="font-display font-semibold mb-4">Ähnliche Agenten</h3>
                  <div className="space-y-4">
                    {relatedAgents.map((related) => (
                      <Link 
                        key={related.id} 
                        href={`/agents/${related.slug}`}
                        className="block group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-lg">
                            {related.icon || "🤖"}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm group-hover:text-primary-light transition-colors truncate">
                              {related.name}
                            </p>
                            <p className="text-xs text-white/60">KI-gestützt</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
