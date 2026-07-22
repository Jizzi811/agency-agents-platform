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
  // Sales
  // Engineering
  // Design
  // Finance
  // Specialized
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
