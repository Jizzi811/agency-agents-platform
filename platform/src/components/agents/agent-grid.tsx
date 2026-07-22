"use client";

import { motion } from "framer-motion";
import { AgentCard } from "./agent-card";
import { Agent } from "@/types";

interface AgentGridProps {
  agents: Agent[];
  columns?: 2 | 3 | 4;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function AgentGrid({ agents, columns = 4 }: AgentGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={`grid ${gridCols[columns]} gap-6`}
    >
      {agents.map((agent) => (
        <motion.div key={agent.id} variants={itemVariants}>
          <AgentCard agent={agent} />
        </motion.div>
      ))}
    </motion.div>
  );
}
