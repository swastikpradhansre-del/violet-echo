import { ChevronLeft, ChevronRight, Search, Bell, Sun, Moon, Sparkles, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export const TopBar = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <div className="sticky top-0 z-30 backdrop-blur-2xl bg-background/60 border-b border-border/40">
      <div className="flex items-center gap-3 px-6 md:px-8 py-3.5">
        {/* Nav arrows */}
        <div className="flex gap-1.5">
          <button className="p-2 rounded-full bg-secondary/60 hover:bg-secondary transition" aria-label="Back">
            <ChevronLeft size={16} />
          </button>
          <button className="p-2 rounded-full bg-secondary/60 hover:bg-secondary transition text-muted-foreground" aria-label="Forward">
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search songs, artists, podcasts..."
            className="w-full h-10 pl-11 pr-4 rounded-full bg-secondary/60 border border-transparent focus:border-primary/40 focus:bg-secondary text-sm placeholder:text-muted-foreground outline-none transition-all"
          />
        </div>

        <div className="flex-1" />

        {/* Upgrade */}
        <button className="hidden lg:flex items-center gap-1.5 px-4 h-9 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider shadow-glow-violet hover:scale-105 transition-transform">
          <Sparkles size={14} />
          Upgrade to Premium
        </button>

        {/* Theme toggle */}
        <button
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
          className="p-2 rounded-full bg-secondary/60 hover:bg-secondary transition"
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-full bg-secondary/60 hover:bg-secondary transition" aria-label="Notifications">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent shadow-glow-mint" />
        </button>

        {/* Avatar */}
        <button className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full bg-secondary/60 hover:bg-secondary transition">
          <span className="w-7 h-7 rounded-full bg-gradient-mint flex items-center justify-center text-background font-display font-bold text-xs">
            A
          </span>
          <ChevronDown size={14} className="text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};
