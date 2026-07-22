export interface Agent {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  category: string;
  subcategory?: string;
  rating: number;
  usageCount: number;
  icon?: string;
  capabilities?: string[];
  integrations?: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  author?: string;
  createdAt?: string;
  updatedAt?: string;
  model?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  agentCount: number;
  description?: string;
}

export interface KnowledgeBase {
  id: string;
  name: string;
  description: string;
  sources: KnowledgeSource[];
  agentIds: string[];
  createdAt: string;
  updatedAt: string;
  usageCount: number;
}

export interface KnowledgeSource {
  id: string;
  type: "file" | "api" | "url";
  name: string;
  status: "pending" | "processing" | "ready" | "error";
  contentCount?: number;
  lastSynced?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
  attachments?: Attachment[];
  isStreaming?: boolean;
}

export interface Attachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  credits: number;
  plan: "free" | "pro" | "enterprise";
  createdAt: string;
}

export interface UsageStats {
  totalTasks: number;
  totalCredits: number;
  usedCredits: number;
  activeAgents: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: "month" | "year";
  features: string[];
  limits: {
    tasks: number;
    agents: number;
    credits: number;
  };
  isPopular?: boolean;
}
