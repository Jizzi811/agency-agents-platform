"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Shield, BookOpen, Code2, Users, TrendingUp, Check } from "lucide-react";
import { HeroSection } from "@/components/hero/hero-section";
import { AgentCard } from "@/components/agents/agent-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { agentsData, categories } from "@/lib/agents-data";

// Zeige die ersten 100 Agenten als Featured
const featuredAgents = agentsData;

const categoriesDisplay = categories;

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Blitzschnell",
    description: "Angetrieben von OpenHands für schnelle Ausführung und sofortige Ergebnisse.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise-Sicherheit",
    description: "Bank-grade Verschlüsselung und DSGVO/SOC2-Konformität.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Wissensintegration",
    description: "Verbinden Sie Ihre Dokumente, Datenbanken und APIs.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Einfache Integration",
    description: "REST API und Webhooks für nahtlose Integration.",
  },
];

const stats = [
  { label: "Aktive Agenten", value: "100+", icon: <Zap className="w-5 h-5" /> },
  { label: "Unternehmen", value: "500+", icon: <Users className="w-5 h-5" /> },
  { label: "Abgeschlossene Aufgaben", value: "2M+", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Verfügbarkeit", value: "99.9%", icon: <Shield className="w-5 h-5" /> },
];

const testimonials = [
  {
    quote: "Agency Agents hat unseren Kundenservice revolutioniert. Reaktionszeiten um 80% reduziert.",
    author: "Sarah Chen",
    role: "VP Operations, TechCorp",
  },
  {
    quote: "Der Vertriebsagent hat unsere qualifizierten Leads in nur zwei Monaten verdoppelt.",
    author: "Marcus Johnson",
    role: "Vertriebsleiter, GrowthStartup",
  },
  {
    quote: "Beste Investition. Der Code-Prüfer findet Fehler, die unser Team übersieht.",
    author: "Elena Rodriguez",
    role: "CTO, DevStudio",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="container-custom py-12 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary-light mb-3">
                  {stat.icon}
                </div>
                <div className="font-display text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Agents */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-4">Am beliebtesten</Badge>
            <h2 className="heading-section mb-4">Featured Agents</h2>
            <p className="body-large max-w-2xl mx-auto">
              Entdecken Sie unsere beliebtesten Agenten, die von tausenden Unternehmen vertraut werden.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AgentCard agent={agent} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/agents">
              <Button size="lg" variant="secondary" className="gap-2">
                Alle Agenten anzeigen
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section bg-white/[0.02]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="primary" className="mb-4">Nach Kategorie</Badge>
            <h2 className="heading-section mb-4">Finden Sie den perfekten Agenten</h2>
            <p className="body-large max-w-2xl mx-auto">
              Entdecken Sie unsere kategorisierte Bibliothek spezialisierter Agenten.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categoriesDisplay.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link href={`/agents?category=${category.slug}`}>
                  <Card hover className="p-6 text-center cursor-pointer">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-display font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-white/60">{category.agentCount} Agenten</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="cyan" className="mb-4">Warum uns wählen</Badge>
            <h2 className="heading-section mb-4">Für Unternehmen entwickelt</h2>
            <p className="body-large max-w-2xl mx-auto">
              Alles was Sie brauchen, um KI-Agenten im großen Maßstab einzusetzen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full" variant="glass">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center text-primary-light mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/60">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white/[0.02]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="amber" className="mb-4">Testimonials</Badge>
            <h2 className="heading-section mb-4">Loved by Teams Worldwide</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full" variant="elevated">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/80 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="heading-section mb-6">Ready to Transform Your Business?</h2>
            <p className="body-large mb-8">
              Join 500+ companies using Agency Agents to automate support, 
              boost sales, and scale operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/agents">
                <Button size="xl" className="gap-2 group">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="xl" variant="secondary">
                Schedule Demo
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Cancel anytime
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
