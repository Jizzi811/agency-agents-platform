"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Shield, BookOpen, Code2, Users, TrendingUp, Check } from "lucide-react";
import { HeroSection } from "@/components/hero/hero-section";
import { AgentCard } from "@/components/agents/agent-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Agent } from "@/types";

// Sample featured agents
const featuredAgents: Agent[] = [
  {
    id: "1",
    slug: "support-responder",
    name: "Support Responder",
    description: "Intelligent customer support agent that handles inquiries with empathy and accuracy.",
    category: "support",
    price: 49,
    rating: 4.9,
    usageCount: 15420,
    isNew: false,
    isFeatured: true,
  },
  {
    id: "2",
    slug: "sales-engineer",
    name: "Sales Engineer",
    description: "AI-powered sales assistant that qualifies leads and schedules demos.",
    category: "sales",
    price: 79,
    rating: 4.8,
    usageCount: 12350,
    isNew: true,
    isFeatured: true,
  },
  {
    id: "3",
    slug: "code-reviewer",
    name: "Code Reviewer",
    description: "Automated code quality analysis with security and performance insights.",
    category: "engineering",
    price: 39,
    rating: 4.7,
    usageCount: 8900,
    isNew: false,
    isFeatured: true,
  },
  {
    id: "4",
    slug: "ui-designer",
    name: "UI Designer",
    description: "Creative design agent that generates beautiful user interfaces.",
    category: "design",
    price: 59,
    rating: 4.9,
    usageCount: 6700,
    isNew: true,
    isFeatured: true,
  },
  {
    id: "5",
    slug: "financial-analyst",
    name: "Financial Analyst",
    description: "Data-driven financial analysis and reporting agent.",
    category: "finance",
    price: 89,
    rating: 4.6,
    usageCount: 4500,
    isNew: false,
    isFeatured: true,
  },
  {
    id: "6",
    slug: "document-generator",
    name: "Document Generator",
    description: "Automated document creation from templates and data sources.",
    category: "specialized",
    price: 29,
    rating: 4.8,
    usageCount: 21000,
    isNew: false,
    isFeatured: true,
  },
];

const categories = [
  { name: "Support", icon: "🎧", count: 12, color: "cyan" },
  { name: "Sales", icon: "💼", count: 18, color: "green" },
  { name: "Engineering", icon: "⚙️", count: 45, color: "primary" },
  { name: "Design", icon: "🎨", count: 15, color: "secondary" },
  { name: "Finance", icon: "💰", count: 8, color: "amber" },
  { name: "Security", icon: "🔒", count: 10, color: "red" },
];

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Powered by OpenHands for rapid execution and instant results.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with GDPR, SOC2, and more.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Knowledge Integration",
    description: "Connect your docs, databases, and APIs to power intelligent responses.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Easy Integration",
    description: "REST API and webhooks for seamless integration into your stack.",
  },
];

const stats = [
  { label: "Active Agents", value: "140+", icon: <Zap className="w-5 h-5" /> },
  { label: "Companies", value: "500+", icon: <Users className="w-5 h-5" /> },
  { label: "Tasks Completed", value: "2M+", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "Uptime", value: "99.9%", icon: <Shield className="w-5 h-5" /> },
];

const testimonials = [
  {
    quote: "Agency Agents transformed our customer support. Response times dropped 80%.",
    author: "Sarah Chen",
    role: "VP of Operations, TechCorp",
  },
  {
    quote: "The Sales Engineer agent doubled our qualified leads in just two months.",
    author: "Marcus Johnson",
    role: "Head of Sales, GrowthStartup",
  },
  {
    quote: "Best investment we've made. The code reviewer catches issues our team misses.",
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
            <Badge variant="secondary" className="mb-4">Most Popular</Badge>
            <h2 className="heading-section mb-4">Featured Agents</h2>
            <p className="body-large max-w-2xl mx-auto">
              Discover our most popular agents, trusted by thousands of businesses worldwide.
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
                View All Agents
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
            <Badge variant="primary" className="mb-4">Browse by Category</Badge>
            <h2 className="heading-section mb-4">Find the Perfect Agent</h2>
            <p className="body-large max-w-2xl mx-auto">
              Explore our categorized library of specialized agents for every use case.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link href={`/agents?category=${category.name.toLowerCase()}`}>
                  <Card hover className="p-6 text-center cursor-pointer">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-display font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-white/60">{category.count} agents</p>
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
            <Badge variant="cyan" className="mb-4">Why Choose Us</Badge>
            <h2 className="heading-section mb-4">Built for the Enterprise</h2>
            <p className="body-large max-w-2xl mx-auto">
              Everything you need to deploy and manage AI agents at scale.
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
