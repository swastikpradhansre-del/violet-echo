import { Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const LikeButton = ({ className = "" }: { className?: string }) => {
  const [liked, setLiked] = useState(false);
  return (
    <button
      type="button"
      aria-label={liked ? "Unlike" : "Like"}
      onClick={(e) => {
        e.stopPropagation();
        setLiked(!liked);
      }}
      className={cn(
        "p-2 rounded-full transition-all duration-300 hover:bg-white/10",
        liked && "text-destructive",
        !liked && "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      <Heart
        size={18}
        fill={liked ? "currentColor" : "none"}
        className={cn("transition-transform duration-300", liked && "scale-110")}
      />
    </button>
  );
};
