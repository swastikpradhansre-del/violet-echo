import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlayButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showOnHover?: boolean;
}

export const PlayButton = ({ size = "md", className, showOnHover = true }: PlayButtonProps) => {
  const sizes = {
    sm: "w-9 h-9",
    md: "w-12 h-12",
    lg: "w-14 h-14",
  };
  const iconSizes = { sm: 14, md: 18, lg: 22 };

  return (
    <button
      type="button"
      aria-label="Play"
      className={cn(
        "flex items-center justify-center rounded-full bg-accent text-accent-foreground shadow-glow-mint transition-all duration-300",
        "hover:scale-110 active:scale-95",
        showOnHover && "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
        sizes[size],
        className
      )}
    >
      <Play size={iconSizes[size]} strokeWidth={2.5} fill="currentColor" className="ml-0.5" />
    </button>
  );
};
