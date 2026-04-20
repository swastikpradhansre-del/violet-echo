import artistImg from "@/assets/artist-spotlight.jpg";
import { Play, UserPlus, Check } from "lucide-react";
import { useState } from "react";
import { spotlight } from "@/lib/mockData";
import { cn } from "@/lib/utils";

export const ArtistSpotlight = () => {
  const [following, setFollowing] = useState(false);
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/5">
      {/* Blurred bg image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-xl opacity-60"
        style={{ backgroundImage: `url(${artistImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

      <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-8 p-6 md:p-10">
        <div className="flex flex-col justify-end">
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-3 flex items-center gap-2">
            <span className="w-6 h-px bg-accent" /> Artist Spotlight
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            {spotlight.name}
          </h2>
          <p className="text-sm text-muted-foreground mt-2">{spotlight.listeners}</p>

          <div className="flex flex-wrap gap-3 mt-6">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm shadow-glow-mint hover:scale-105 transition">
              <Play size={16} fill="currentColor" /> Play
            </button>
            <button
              onClick={() => setFollowing(!following)}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full border font-semibold text-sm transition",
                following
                  ? "border-accent text-accent bg-accent/10"
                  : "border-white/20 text-foreground hover:border-white/40"
              )}
            >
              {following ? <Check size={16} /> : <UserPlus size={16} />}
              {following ? "Following" : "Follow"}
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-3">
            Top tracks
          </h3>
          <ul className="space-y-1">
            {spotlight.tracks.map((t, i) => (
              <li
                key={t.title}
                className="group flex items-center gap-4 p-2.5 rounded-lg hover:bg-white/5 transition cursor-pointer"
              >
                <span className="font-display text-lg font-bold text-muted-foreground w-5 text-center">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{t.title}</p>
                  <p className="text-xs text-muted-foreground">{t.plays} plays</p>
                </div>
                <button className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-accent group-hover:text-accent-foreground transition-all" aria-label="Play track">
                  <Play size={14} fill="currentColor" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
