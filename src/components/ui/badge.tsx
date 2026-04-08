import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "sale" | "new" | "bestseller";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-ocean-100 text-ocean-700",
    sale: "bg-shell-100 text-shell-700",
    new: "bg-seafoam-100 text-seafoam-700",
    bestseller: "bg-sand-100 text-sand-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
