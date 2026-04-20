import { useState } from "react";
import { charts } from "@/lib/mockData";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { CoverArt } from "./CoverArt";
import { PlayButton } from "./PlayButton";
import { cn } from "@/lib/utils";

export const ChartsSection = () => {
  const [tab, setTab] = useState<"global" | "india">("global");
  const data = charts[tab];

  return (
    <section className="space-y-5">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">Charts</h2>
          <p className="text-sm text-muted-foreground mt-1">The top 10, updated hourly</p>
        </div>
        <div className="flex gap-1 p-1 rounded-full glass">
          {(["global", "india"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all",
                tab === t
                  ? "bg-gradient-primary text-primary-foreground shadow-glow-violet"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Top 10 {t}
            </button>
          ))}
        </div>
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        {data.map((row, i) => (
          <div
            key={row.rank}
            className={cn(
              "group grid grid-cols-[48px_56px_1fr_auto_auto] md:grid-cols-[56px_64px_1fr_100px_64px_48px] items-center gap-3 px-4 md:px-5 py-3 hover:bg-secondary/60 transition cursor-pointer",
              i !== data.length - 1 && "border-b border-border/40"
            )}
          >
            <div className="flex items-center gap-1">
              <span className={cn(
                "font-display text-2xl font-bold tabular-nums",
                row.rank <= 3 ? "text-gradient-primary" : "text-muted-foreground"
              )}>
                {row.rank}
              </span>
            </div>
            <CoverArt gradient={row.gradient} className="w-11 h-11 md:w-12 md:h-12" rounded="rounded-md" />
            <div className="min-w-0">
              <p className="font-semibold text-sm truncate">{row.title}</p>
              <p className="text-xs text-muted-foreground truncate">{row.artist}</p>
            </div>
            <div className="hidden md:flex items-center gap-1 text-xs justify-center">
              {row.change > 0 ? (
                <span className="flex items-center gap-0.5 text-accent font-semibold">
                  <ArrowUp size={12} /> {row.change}
                </span>
              ) : row.change < 0 ? (
                <span className="flex items-center gap-0.5 text-destructive font-semibold">
                  <ArrowDown size={12} /> {Math.abs(row.change)}
                </span>
              ) : (
                <Minus size={12} className="text-muted-foreground" />
              )}
            </div>
            <span className="text-xs text-muted-foreground tabular-nums hidden md:block">
              {row.duration}
            </span>
            <PlayButton size="sm" />
          </div>
        ))}
      </div>
    </section>
  );
};
