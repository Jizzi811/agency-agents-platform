"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Category {
  id: string;
  name: string;
  count: number;
}

interface AgentFiltersProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

export function AgentFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  onClearFilters,
}: AgentFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);
  const hasActiveFilters = selectedCategory || searchQuery;

  return (
    <div className="space-y-4">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search agents..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            icon={<Search className="w-5 h-5" />}
            rightElement={
              searchQuery ? (
                <button
                  onClick={() => onSearchChange("")}
                  className="text-white/40 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : null
            }
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="gap-2"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {hasActiveFilters && (
            <span className="w-2 h-2 rounded-full bg-primary" />
          )}
        </Button>
      </div>

      {/* Expanded Filters */}
      {showFilters && (
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-semibold">Categories</h3>
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={onClearFilters}>
                Clear all
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange("")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                !selectedCategory
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              All ({categories.reduce((acc, c) => acc + c.count, 0)})
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Active Filters Pills */}
      {hasActiveFilters && !showFilters && (
        <div className="flex flex-wrap gap-2">
          {selectedCategory && (
            <Badge variant="primary" className="gap-1">
              {categories.find((c) => c.id === selectedCategory)?.name}
              <X
                className="w-3 h-3 cursor-pointer hover:text-white"
                onClick={() => onCategoryChange("")}
              />
            </Badge>
          )}
          {searchQuery && (
            <Badge variant="secondary" className="gap-1">
              &quot;{searchQuery}&quot;
              <X
                className="w-3 h-3 cursor-pointer hover:text-white"
                onClick={() => onSearchChange("")}
              />
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}
