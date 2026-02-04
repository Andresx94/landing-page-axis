import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const premiumButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-gold text-primary-foreground hover:shadow-gold hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border border-primary/30 bg-transparent text-primary hover:border-primary hover:bg-primary/5",
        ghost:
          "text-foreground hover:text-primary hover:bg-primary/5",
        link:
          "text-primary underline-offset-4 hover:underline",
        subtle:
          "bg-surface-2 text-foreground hover:bg-surface-3 border border-border/50",
      },
      size: {
        default: "h-12 px-8 py-3 rounded-md",
        sm: "h-10 px-6 py-2 rounded-md text-sm",
        lg: "h-14 px-10 py-4 rounded-md text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface PremiumButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof premiumButtonVariants> {
  asChild?: boolean;
}

const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(premiumButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
PremiumButton.displayName = "PremiumButton";

export { PremiumButton, premiumButtonVariants };
