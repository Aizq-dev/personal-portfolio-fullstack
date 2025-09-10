// src/components/ui/Input.tsx
import * as React from "react";
import { cn } from "../../utils/cn";

const INPUT_BASE =
  "w-full rounded-xl border border-line/60 bg-slate-800 px-3 py-2 " +
  "text-text-light placeholder:text-text-muted outline-none " +
  "focus:ring-2 focus:ring-primary-400/40 focus:ring-offset-2 " +
  "focus:ring-offset-background-dark";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => <input ref={ref} className={cn(INPUT_BASE, className)} {...props} />
);
Input.displayName = "Input";
