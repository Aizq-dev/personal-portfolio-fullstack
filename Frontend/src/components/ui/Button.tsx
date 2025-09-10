// src/components/ui/Button.tsx
import * as React from "react";
import { cn } from "../../utils/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  const base = "px-4 py-2 rounded-xl disabled:opacity-50";
  const styles =
    variant === "primary"
      ? "text-white bg-primary-600 hover:bg-primary-500 ring-1 ring-primary-400/20 shadow"
      : "text-text-light border border-line/60 hover:bg-secondary-600/15";
  return <button className={cn(base, styles, className)} {...props} />;
}
