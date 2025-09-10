import * as React from "react";
import { cn } from "../../utils/cn";

const INPUT_BASE =
  "w-full rounded-xl border border-line/60 bg-slate-800 px-3 py-2 " +
  "text-text-light placeholder:text-text-muted outline-none " +
  "focus:ring-2 focus:ring-primary-400/40 focus:ring-offset-2 " +
  "focus:ring-offset-background-dark";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => <textarea ref={ref} className={cn(INPUT_BASE, className)} {...props} />
);
Textarea.displayName = "Textarea";