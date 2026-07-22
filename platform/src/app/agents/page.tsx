"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { AgentGrid } from "@/components/agents/agent-grid";
import { AgentFilters } from "@/components/agents/agent-filters";
import { Badge } from "@/components/ui/badge";
import { agentsData, categories } from "@/lib/agents-data";

export default function AgentsPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAgents = useMemo(() => {
    return agentsData.filter((agent) => {
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
            {agentsData.length} KI-Assistenten verfügbar
          </Badge>
          <h1 className="heading-section mb-4">Agenten-Bibliothek</h1>
          <p className="body-large">
            Entdecken Sie spezialisierte KI-Agenten für jeden Geschäftsbedarf. 
            Testen Sie kostenlos und integrieren Sie sie in Ihre Arbeitsabläufe.
          </p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="container-custom px-6 mb-12">
        <AgentFilters
          categories={categories.map(c => ({ id: c.slug, name: c.name, count: c.agentCount }))}
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
              Zeige {filteredAgents.length} Agent{filteredAgents.length !== 1 ? "en" : ""}
              {selectedCategory && ` in ${categories.find(c => c.slug === selectedCategory)?.name}`}
              {searchQuery && ` passend zu "${searchQuery}"`}
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
            <h3 className="heading-subsection mb-2">Keine Agenten gefunden</h3>
            <p className="body-default mb-6">
              Versuchen Sie, Ihre Filter oder Suchanfrage anzupassen.
            </p>
            <button
              onClick={clearFilters}
              className="text-primary-light hover:underline"
            >
              Alle Filter löschen
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
