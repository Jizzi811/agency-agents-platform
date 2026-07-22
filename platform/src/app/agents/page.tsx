"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { AgentGrid } from "@/components/agents/agent-grid";
import { AgentFilters } from "@/components/agents/agent-filters";
import { Badge } from "@/components/ui/badge";
import { Agent } from "@/types";

// Sample agents data (in production, this would come from an API)
const allAgents: Agent[] = [
  // Support
  { id: "1", slug: "support-responder", name: "Support Responder", description: "Intelligent customer support agent that handles inquiries with empathy and accuracy.", category: "support", price: 49, rating: 4.9, usageCount: 15420, isNew: false },
  { id: "2", slug: "support-analytics", name: "Support Analytics", description: "Analyze support tickets and generate actionable insights.", category: "support", price: 39, rating: 4.7, usageCount: 8900, isNew: true },
  // Sales
  { id: "3", slug: "sales-engineer", name: "Sales Engineer", description: "AI-powered sales assistant that qualifies leads and schedules demos.", category: "sales", price: 79, rating: 4.8, usageCount: 12350, isNew: true },
  { id: "4", slug: "sales-coach", name: "Sales Coach", description: "Real-time coaching during sales calls with objection handling tips.", category: "sales", price: 59, rating: 4.6, usageCount: 5600, isNew: false },
  { id: "5", slug: "outbound-strategist", name: "Outbound Strategist", description: "Build personalized outreach campaigns at scale.", category: "sales", price: 69, rating: 4.7, usageCount: 7200, isNew: false },
  // Engineering
  { id: "6", slug: "code-reviewer", name: "Code Reviewer", description: "Automated code quality analysis with security and performance insights.", category: "engineering", price: 39, rating: 4.7, usageCount: 8900, isNew: false },
  { id: "7", slug: "frontend-developer", name: "Frontend Developer", description: "Build responsive web interfaces from specifications.", category: "engineering", price: 89, rating: 4.8, usageCount: 11200, isNew: false },
  { id: "8", slug: "backend-architect", name: "Backend Architect", description: "Design scalable backend systems and APIs.", category: "engineering", price: 99, rating: 4.9, usageCount: 6500, isNew: false },
  { id: "9", slug: "devops-automator", name: "DevOps Automator", description: "Automate deployment, CI/CD, and infrastructure management.", category: "engineering", price: 79, rating: 4.8, usageCount: 7800, isNew: true },
  // Design
  { id: "10", slug: "ui-designer", name: "UI Designer", description: "Creative design agent that generates beautiful user interfaces.", category: "design", price: 59, rating: 4.9, usageCount: 6700, isNew: true },
  { id: "11", slug: "ux-researcher", name: "UX Researcher", description: "Conduct user research and generate actionable insights.", category: "design", price: 49, rating: 4.6, usageCount: 4300, isNew: false },
  { id: "12", slug: "brand-guardian", name: "Brand Guardian", description: "Ensure brand consistency across all outputs.", category: "design", price: 45, rating: 4.7, usageCount: 3900, isNew: false },
  // Finance
  { id: "13", slug: "financial-analyst", name: "Financial Analyst", description: "Data-driven financial analysis and reporting agent.", category: "finance", price: 89, rating: 4.6, usageCount: 4500, isNew: false },
  { id: "14", slug: "bookkeeper", name: "Bookkeeper", description: "Automated bookkeeping and transaction categorization.", category: "finance", price: 59, rating: 4.8, usageCount: 5200, isNew: false },
  // Specialized
  { id: "15", slug: "document-generator", name: "Document Generator", description: "Automated document creation from templates and data sources.", category: "specialized", price: 29, rating: 4.8, usageCount: 21000, isNew: false },
  { id: "16", slug: "workflow-architect", name: "Workflow Architect", description: "Design and optimize business workflows.", category: "specialized", price: 79, rating: 4.7, usageCount: 3800, isNew: true },
  { id: "17", slug: "legal-doc-review", name: "Legal Document Review", description: "Review and analyze legal documents for compliance.", category: "specialized", price: 99, rating: 4.9, usageCount: 2800, isNew: false },
  { id: "18", slug: "recruitment-specialist", name: "Recruitment Specialist", description: "Screen resumes and schedule interviews.", category: "specialized", price: 49, rating: 4.7, usageCount: 6100, isNew: false },
];

const categories = [
  { id: "support", name: "Support", count: 2 },
  { id: "sales", name: "Sales", count: 3 },
  { id: "engineering", name: "Engineering", count: 4 },
  { id: "design", name: "Design", count: 3 },
  { id: "finance", name: "Finance", count: 2 },
  { id: "specialized", name: "Specialized", count: 4 },
];

export default function AgentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAgents = useMemo(() => {
    return allAgents.filter((agent) => {
      const matchesCategory = !selectedCategory || agent.category === selectedCategory;
      const matchesSearch = !searchQuery || 
        agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="container-custom px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <Badge variant="secondary" className="mb-4">
            {allAgents.length} Agents Available
          </Badge>
          <h1 className="heading-section mb-4">Agent Library</h1>
          <p className="body-large">
            Browse and discover specialized agents for every business need. 
            Try them free, then deploy in your workflow.
          </p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="container-custom px-6 mb-12">
        <AgentFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onClearFilters={clearFilters}
        />
      </div>

      {/* Results */}
      <div className="container-custom px-6">
        {filteredAgents.length > 0 ? (
          <>
            <p className="text-sm text-white/60 mb-6">
              Showing {filteredAgents.length} agent{filteredAgents.length !== 1 ? "s" : ""}
              {selectedCategory && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
            <AgentGrid agents={filteredAgents} columns={4} />
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="heading-subsection mb-2">No agents found</h3>
            <p className="body-default mb-6">
              Try adjusting your filters or search query.
            </p>
            <button
              onClick={clearFilters}
              className="text-primary-light hover:underline"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
