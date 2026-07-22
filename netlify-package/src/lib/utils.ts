import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  if (price === 0) return "Free";
  return `$${price.toFixed(0)}`;
}

export function formatNumber(num: number): string {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num.toString();
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    engineering: "badge-primary",
    design: "badge-secondary",
    support: "badge-cyan",
    sales: "bg-green-500/20 text-green-400 border border-green-500/30",
    finance: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    healthcare: "bg-red-500/20 text-red-400 border border-red-500/30",
    security: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
    "game-development": "bg-pink-500/20 text-pink-400 border border-pink-500/30",
    gis: "bg-teal-500/20 text-teal-400 border border-teal-500/30",
    academic: "bg-violet-500/20 text-violet-400 border border-violet-500/30",
    specialized: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    strategy: "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30",
    testing: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    integrations: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
  };
  return colors[category.toLowerCase()] || "badge-primary";
}
