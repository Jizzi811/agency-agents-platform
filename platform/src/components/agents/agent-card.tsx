"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Users, Play, ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Agent } from "@/types";
import { formatPrice, formatNumber, cn } from "@/lib/utils";

interface AgentCardProps {
  agent: Agent;
  variant?: "default" | "compact" | "featured";
}

const categoryIcons: Record<string, string> = {
  engineering: "⚙️",
  design: "🎨",
  support: "🎧",
  sales: "💼",
  finance: "💰",
  healthcare: "🏥",
  security: "🔒",
  "game-development": "🎮",
  gis: "🗺️",
  academic: "📚",
  specialized: "✨",
  strategy: "🎯",
  testing: "🧪",
  integrations: "🔗",
};

export function AgentCard({ agent, variant = "default" }: AgentCardProps) {
  const icon = categoryIcons[agent.category] || "🤖";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className="group relative overflow-hidden h-full" 
        hover
      >
        {/* Gradient glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{icon}</span>
              <div>
                <Badge variant="default" className="mb-1 capitalize">
                  {agent.category}
                </Badge>
                {agent.isNew && (
                  <Badge variant="new" className="ml-1">New</Badge>
                )}
              </div>
            </div>
            <Badge variant="ai-powered">AI Powered</Badge>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-gradient transition-all">
              {agent.name}
            </h3>
            <p className="text-sm text-white/60 line-clamp-2 mb-4">
              {agent.description}
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-4 text-sm text-white/50">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>{agent.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{formatNumber(agent.usageCount)} uses</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Link href={`/agents/${agent.slug}`} className="flex-1">
              <Button variant="secondary" size="sm" className="w-full gap-2">
                <Play className="w-4 h-4" />
                Preview
              </Button>
            </Link>
            <Link href={`/agents/${agent.slug}/run`} className="flex-1">
              <Button size="sm" className="w-full gap-2">
                Try Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>
    </motion.div>
  );
}
