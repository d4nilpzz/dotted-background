import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "secondary";
  inputSize?: "sm" | "md" | "lg";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "default", inputSize = "md", ...props }, ref) => {
    const variants: Record<string, string> = {
      default: "bg-white/10 hover:bg-white/20 text-white border border-transparent focus:border-white/30",
      secondary: "bg-white/0 text-[#d4d4d4] border border-[#CCCCCC10] focus:ring-2 focus:ring-white/10",
    };

    const sizes: Record<string, string> = {
      sm: "px-3 py-1 text-sm rounded-md",
      md: "px-4 py-2 text-base rounded-lg",
      lg: "px-6 py-3 text-lg rounded-xl",
    };

    return (
      <input
        ref={ref}
        className={cn(
          "transition-colors duration-200 font-medium outline-none",
          variants[variant],
          sizes[inputSize],
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
