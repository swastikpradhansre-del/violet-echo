import { Home, Search, Library, Mic2, Radio, User, Plus, Music2 } from "lucide-react";
import { CoverArt } from "./CoverArt";
import { quickPicks } from "@/lib/mockData";
import { Equalizer } from "./Equalizer";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Search, label: "Search" },
  { icon: Library, label: "Your Library" },
  { icon: Mic2, label: "Podcasts" },
  { icon: Radio, label: "Radio" },
  { icon: User, label: "Artists" },
];

export const Sidebar = () => {
  const [active, setActive] = useState("Home");

  return (
    <aside className="hidden md:flex w-60 shrink-0 flex-col h-screen sticky top-0 border-r border-sidebar-border bg-sidebar py-5">
      {/* Logo */}
      <div className="px-6 mb-7 flex items-center gap-2.5">
        <div className="relative w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-violet">
          <Music2 className="w-5 h-5 text-white" strokeWidth={2.5} />
          <div className="absolute inset-0 rounded-xl bg-gradient-primary blur-xl opacity-50 -z-10" />
        </div>
        <div>
          <h1 className="font-display font-bold text-lg leading-none tracking-tight">SoundWave</h1>
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent">Premium</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = active === item.label;
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                isActive
                  ? "bg-sidebar-accent text-foreground"
                  : "text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent/50"
              )}
            >
              <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              <span>{item.label}</span>
              {isActive && <span className="ml-auto h-5 w-1 rounded-full bg-gradient-primary" />}
            </button>
          );
        })}
      </nav>

      {/* Create Playlist */}
      <div className="px-3 mt-5">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border border-dashed border-sidebar-border text-sm text-sidebar-foreground hover:border-accent hover:text-accent transition-all group">
          <span className="flex items-center justify-center w-6 h-6 rounded bg-secondary group-hover:bg-accent/20 transition">
            <Plus size={14} />
          </span>
          Create Playlist
        </button>
      </div>

      {/* Recently played */}
      <div className="px-5 mt-6 flex-1 overflow-y-auto scrollbar-none">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Recently played
        </h3>
        <ul className="space-y-2.5">
          {quickPicks.slice(0, 4).map((pick, i) => (
            <li key={pick.title} className="flex items-center gap-2.5 group cursor-pointer">
              <CoverArt gradient={pick.gradient} className="w-10 h-10 shrink-0" rounded="rounded-md" />
              <div className="min-w-0 flex-1">
                <p className={cn(
                  "text-xs font-medium truncate transition-colors",
                  i === 0 ? "text-accent" : "text-sidebar-foreground group-hover:text-foreground"
                )}>
                  {pick.title}
                </p>
                <p className="text-[10px] text-muted-foreground truncate">{pick.artist}</p>
              </div>
              {i === 0 && <Equalizer />}
            </li>
          ))}
        </ul>
      </div>

      {/* User profile */}
      <div className="px-3 pt-3 border-t border-sidebar-border mt-3">
        <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-sidebar-accent transition cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-mint flex items-center justify-center font-display font-bold text-sm text-background">
            A
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold truncate">Alex Chen</p>
            <p className="text-[10px] text-muted-foreground truncate">View profile</p>
          </div>
          <span className="w-2 h-2 rounded-full bg-accent shadow-glow-mint" />
        </div>
      </div>
    </aside>
  );
};
