import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-white/10 text-white/80 border border-white/10",
        primary: "bg-primary/20 text-primary-light border border-primary/30",
        secondary: "bg-secondary/20 text-secondary-light border border-secondary/30",
        cyan: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
        green: "bg-green-500/20 text-green-400 border border-green-500/30",
        amber: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
        red: "bg-red-500/20 text-red-400 border border-red-500/30",
        new: "bg-gradient-to-r from-primary to-secondary text-white border-0",
        free: "bg-green-500/20 text-green-400 border border-green-500/30",
        premium: "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0",
        "ai-powered": "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border border-purple-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

function Badge({ className, variant, icon, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {icon}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
