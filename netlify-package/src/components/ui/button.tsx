import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 active:scale-[0.98]",
        ghost:
          "text-white/70 hover:text-white hover:bg-white/5",
        outline:
          "border border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-white/30",
        danger:
          "bg-accent-red/20 text-accent-red border border-accent-red/30 hover:bg-accent-red/30",
        glow:
          "bg-gradient-to-r from-primary to-secondary text-white glow-button hover:scale-[1.02] active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-4 text-xs rounded-lg",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base rounded-2xl",
        xl: "h-16 px-10 text-lg rounded-2xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
