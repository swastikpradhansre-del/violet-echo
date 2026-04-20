import { Music } from "lucide-react";

interface CoverArtProps {
  gradient: string;
  title?: string;
  className?: string;
  rounded?: string;
}

/**
 * Gradient-based album cover. Gives the app a distinct non-stock aesthetic.
 */
export const CoverArt = ({ gradient, title, className = "", rounded = "rounded-2xl" }: CoverArtProps) => (
  <div
    className={`relative overflow-hidden ${rounded} ${className}`}
    style={{ background: gradient }}
  >
    {/* decorative orbs for depth */}
    <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/20 blur-2xl" />
    <div className="absolute -bottom-8 -left-4 w-24 h-24 rounded-full bg-black/30 blur-2xl" />
    <div className="absolute inset-0 flex items-end p-3">
      {title && (
        <span className="font-display font-semibold text-white/90 text-sm drop-shadow-lg line-clamp-2 leading-tight">
          {title}
        </span>
      )}
    </div>
    {!title && (
      <div className="absolute inset-0 flex items-center justify-center">
        <Music className="w-1/3 h-1/3 text-white/30" strokeWidth={1.5} />
      </div>
    )}
  </div>
);
