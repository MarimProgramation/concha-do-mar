import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-ocean-500 text-white hover:bg-ocean-600 shadow-lg shadow-ocean-200/50 hover:shadow-xl hover:shadow-ocean-300/50 hover:-translate-y-0.5",
        secondary:
          "bg-sand-100 text-sand-800 hover:bg-sand-200 shadow-md hover:shadow-lg hover:-translate-y-0.5",
        outline:
          "border-2 border-ocean-300 text-ocean-600 hover:bg-ocean-50 hover:border-ocean-400 hover:-translate-y-0.5",
        ghost:
          "text-ocean-600 hover:bg-ocean-50 hover:text-ocean-700",
        shell:
          "bg-gradient-to-r from-shell-400 to-shell-500 text-white hover:from-shell-500 hover:to-shell-600 shadow-lg shadow-shell-200/50 hover:shadow-xl hover:-translate-y-0.5",
        ivory:
          "bg-white text-ocean-700 hover:bg-pearl shadow-lg hover:shadow-xl hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
