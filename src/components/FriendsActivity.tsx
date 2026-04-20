import { friends } from "@/lib/mockData";
import { Equalizer } from "./Equalizer";

export const FriendsActivity = () => (
  <aside className="hidden xl:flex w-[260px] shrink-0 flex-col h-screen sticky top-0 border-l border-border/40 bg-sidebar/50 backdrop-blur-xl p-5">
    <div className="flex items-center justify-between mb-5">
      <h3 className="font-display font-semibold text-sm tracking-tight">Friends Activity</h3>
      <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">Live</span>
    </div>
    <ul className="space-y-4 overflow-y-auto scrollbar-none flex-1 -mx-2 px-2">
      {friends.map((f) => (
        <li key={f.name} className="flex gap-3 group cursor-pointer">
          <div className="relative shrink-0">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-sm"
              style={{ background: f.color }}
            >
              {f.name[0]}
            </div>
            {f.live && (
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-accent border-2 border-sidebar flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />
              </span>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="text-xs font-semibold truncate group-hover:text-accent transition-colors">
                {f.name}
              </p>
              {f.live && <Equalizer className="h-2" />}
            </div>
            <p className="text-xs text-foreground truncate mt-0.5">{f.track}</p>
            <p className="text-[10px] text-muted-foreground truncate">{f.artist}</p>
          </div>
        </li>
      ))}
    </ul>
  </aside>
);
