"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  Star, Users, Play, ShoppingCart, FileText, Zap, 
  Shield, Code, Check, ArrowLeft, Share2, Heart, 
  ChevronRight, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Agent } from "@/types";
import { formatPrice, formatNumber } from "@/lib/utils";

// Sample agent data (in production, fetch from API)
const agentsData: Record<string, Agent> = {
  "support-responder": {
    id: "1",
    slug: "support-responder",
    name: "Support Responder",
    description: "Intelligent customer support agent that handles inquiries with empathy and accuracy. Uses natural language understanding to provide helpful responses, escalate complex issues, and learn from interactions.",
    longDescription: `The Support Responder agent is designed to handle high-volume customer inquiries with consistent quality and empathy. It can:

• Answer FAQs instantly with accurate information
• Escalate complex issues to human agents
• Provide multi-language support
• Generate support tickets automatically
• Learn from interactions to improve over time

Perfect for businesses looking to reduce response times while maintaining high customer satisfaction.`,
    category: "support",
    price: 49,
    rating: 4.9,
    usageCount: 15420,
    isNew: false,
    isFeatured: true,
    capabilities: [
      "24/7 availability",
      "Multi-language support",
      "Ticket generation",
      "Escalation management",
      "Sentiment analysis",
      "Knowledge base integration",
    ],
    integrations: ["Zendesk", "Intercom", "Salesforce", "Slack", "API"],
  },
  "sales-engineer": {
    id: "3",
    slug: "sales-engineer",
    name: "Sales Engineer",
    description: "AI-powered sales assistant that qualifies leads, schedules demos, and provides real-time call support.",
    longDescription: `The Sales Engineer agent supercharges your sales team with intelligent automation:

• Lead qualification and scoring
• Demo scheduling with calendar integration
• Real-time objection handling during calls
• Personalized follow-up generation
• CRM data entry automation

Ideal for B2B companies looking to increase conversion rates and reduce sales cycle length.`,
    category: "sales",
    price: 79,
    rating: 4.8,
    usageCount: 12350,
    isNew: true,
    isFeatured: true,
    capabilities: [
      "Lead qualification",
      "Demo scheduling",
      "Call coaching",
      "Follow-up automation",
      "CRM sync",
      "Proposal generation",
    ],
    integrations: ["HubSpot", "Salesforce", "Calendly", "Zoom", "Gong"],
  },
  "code-reviewer": {
    id: "6",
    slug: "code-reviewer",
    name: "Code Reviewer",
    description: "Automated code quality analysis with security insights, performance optimization suggestions, and best practice recommendations.",
    longDescription: `The Code Reviewer agent acts as your first line of defense for code quality:

• Security vulnerability detection
• Performance bottleneck identification
• Code style consistency checks
• Best practice enforcement
• Automated fix suggestions

Perfect for teams wanting to maintain high code quality without slowing down development.`,
    category: "engineering",
    price: 39,
    rating: 4.7,
    usageCount: 8900,
    isNew: false,
    isFeatured: true,
    capabilities: [
      "Security scanning",
      "Performance analysis",
      "Style checking",
      "Bug detection",
      "Auto-fix suggestions",
      "Multi-language support",
    ],
    integrations: ["GitHub", "GitLab", "Bitbucket", "Slack", "Jira"],
  },
};

const relatedAgents: Agent[] = [
  { id: "2", slug: "support-analytics", name: "Support Analytics", description: "Analyze support tickets and generate insights.", category: "support", price: 39, rating: 4.7, usageCount: 8900, isNew: true },
  { id: "4", slug: "sales-coach", name: "Sales Coach", description: "Real-time coaching during sales calls.", category: "sales", price: 59, rating: 4.6, usageCount: 5600, isNew: false },
  { id: "7", slug: "frontend-developer", name: "Frontend Developer", description: "Build responsive web interfaces.", category: "engineering", price: 89, rating: 4.8, usageCount: 11200, isNew: false },
];

export default function AgentDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const agent = agentsData[slug] || Object.values(agentsData)[0];
  
  const [isFavorite, setIsFavorite] = useState(false);

  const icon = {
    support: "🎧",
    sales: "💼",
    engineering: "⚙️",
    design: "🎨",
    finance: "💰",
    specialized: "✨",
  }[agent.category] || "🤖";

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
            Back to Agents
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
                  {icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="default" className="capitalize">{agent.category}</Badge>
                    {agent.isNew && <Badge variant="new">New</Badge>}
                    {agent.isFeatured && <Badge variant="premium">Featured</Badge>}
                  </div>
                  <h1 className="heading-section mb-2">{agent.name}</h1>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="font-semibold">{agent.rating}</span>
                      <span className="text-white/60">({formatNumber(agent.usageCount)} uses)</span>
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
                  Try Agent
                </Button>
              </Link>
              <Button size="lg" variant="secondary" className="gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Purchase
              </Button>
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
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="capabilities">Capabilities</TabsTrigger>
                <TabsTrigger value="docs">Documentation</TabsTrigger>
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
                  {agent.longDescription && (
                    <div className="whitespace-pre-line text-white/70">
                      {agent.longDescription}
                    </div>
                  )}
                </motion.div>
              </TabsContent>

              <TabsContent value="capabilities" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary-light" />
                      Features
                    </h3>
                    <ul className="space-y-3">
                      {agent.capabilities?.map((cap, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/70">
                          <Check className="w-4 h-4 text-green-400" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Card className="p-6">
                    <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                      <ExternalLink className="w-5 h-5 text-secondary-light" />
                      Integrations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {agent.integrations?.map((int, i) => (
                        <Badge key={i} variant="default">{int}</Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="docs" className="mt-6">
                <Card className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-4">Getting Started</h3>
                  <div className="space-y-4 text-white/70">
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary-light text-sm font-semibold">1</span>
                      <div>
                        <p className="font-semibold text-white">Create an account</p>
                        <p className="text-sm">Sign up and choose a plan that fits your needs.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary-light text-sm font-semibold">2</span>
                      <div>
                        <p className="font-semibold text-white">Connect your data</p>
                        <p className="text-sm">Upload files or connect APIs to power the agent.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary-light text-sm font-semibold">3</span>
                      <div>
                        <p className="font-semibold text-white">Start using</p>
                        <p className="text-sm">Try the agent free, then deploy when ready.</p>
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
              {/* Pricing Card */}
              <Card className="p-6">
                <div className="text-center mb-6">
                  <span className="font-display text-4xl font-bold">{formatPrice(agent.price)}</span>
                  <span className="text-white/60">/month</span>
                </div>
                <Link href={`/agents/${agent.slug}/run`}>
                  <Button className="w-full mb-4" size="lg">
                    Try Free for 14 Days
                  </Button>
                </Link>
                <Button variant="secondary" className="w-full" size="lg">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center gap-2 text-white/70">
                    <Check className="w-4 h-4 text-green-400" />
                    Full feature access
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <Check className="w-4 h-4 text-green-400" />
                    Priority support
                  </li>
                  <li className="flex items-center gap-2 text-white/70">
                    <Check className="w-4 h-4 text-green-400" />
                    Cancel anytime
                  </li>
                </ul>
              </Card>

              {/* Quick Info */}
              <Card className="p-6">
                <h3 className="font-display font-semibold mb-4">Quick Info</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-white/60">Rating</dt>
                    <dd className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      {agent.rating}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-white/60">Uses</dt>
                    <dd>{formatNumber(agent.usageCount)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-white/60">Category</dt>
                    <dd className="capitalize">{agent.category}</dd>
                  </div>
                </dl>
              </Card>

              {/* Related Agents */}
              <Card className="p-6">
                <h3 className="font-display font-semibold mb-4">Related Agents</h3>
                <div className="space-y-4">
                  {relatedAgents.slice(0, 3).map((related) => (
                    <Link 
                      key={related.id} 
                      href={`/agents/${related.slug}`}
                      className="block group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-lg">
                          {icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm group-hover:text-primary-light transition-colors truncate">
                            {related.name}
                          </p>
                          <p className="text-xs text-white/60">${related.price}/mo</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
