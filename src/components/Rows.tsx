import { CoverArt } from "./CoverArt";
import { PlayButton } from "./PlayButton";
import { LikeButton } from "./LikeButton";
import { Flame } from "lucide-react";
import { quickPicks, trending, madeForYou, newReleases, podcasts, radioStations, recentlyPlayed, musicVideos } from "@/lib/mockData";
import { Section } from "./Section";
import { Play } from "lucide-react";

/* --- Greeting Quick Picks (2x3 grid) --- */
export const QuickPicksGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
    {quickPicks.map((p) => (
      <div
        key={p.title}
        className="group relative flex items-center gap-3 glass rounded-xl overflow-hidden hover:bg-secondary transition-all cursor-pointer pr-3"
      >
        <CoverArt gradient={p.gradient} className="w-16 h-16 shrink-0" rounded="rounded-none" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm truncate">{p.title}</p>
          <p className="text-xs text-muted-foreground truncate">{p.artist}</p>
        </div>
        <PlayButton size="sm" className="mr-1" />
      </div>
    ))}
  </div>
);

/* --- Generic song card (used by trending, new releases) --- */
interface SongCardProps {
  title: string;
  subtitle: string;
  gradient: string;
  badge?: React.ReactNode;
  meta?: string;
}
export const SongCard = ({ title, subtitle, gradient, badge, meta }: SongCardProps) => (
  <div className="group shrink-0 w-44 md:w-48 glass rounded-2xl p-3 card-hover cursor-pointer">
    <div className="relative mb-3">
      <CoverArt gradient={gradient} className="aspect-square w-full" />
      {badge && <div className="absolute top-2 left-2">{badge}</div>}
      <div className="absolute bottom-2 right-2">
        <PlayButton />
      </div>
    </div>
    <div className="flex items-start justify-between gap-1">
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-sm truncate">{title}</p>
        <p className="text-xs text-muted-foreground truncate">{subtitle}</p>
        {meta && <p className="text-[10px] text-muted-foreground/70 mt-1">{meta}</p>}
      </div>
      <LikeButton />
    </div>
  </div>
);

export const TrendingRow = () => (
  <Section title="Trending Now" subtitle="What the world is playing right now">
    {trending.map((t) => (
      <SongCard
        key={t.title}
        title={t.title}
        subtitle={t.artist}
        gradient={t.gradient}
        meta={`${t.plays} plays`}
        badge={
          <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-destructive/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
            <Flame size={10} fill="currentColor" />
            Hot
          </span>
        }
      />
    ))}
  </Section>
);

export const MadeForYouRow = () => (
  <Section title="Made For You" subtitle="Personalized mixes updated daily">
    {madeForYou.map((m) => (
      <div key={m.title} className="group shrink-0 w-48 md:w-52 cursor-pointer">
        <div className="relative mb-3">
          <CoverArt gradient={m.gradient} title={m.title} className="aspect-square w-full shadow-card-soft" />
          <div className="absolute bottom-3 right-3">
            <PlayButton size="lg" />
          </div>
        </div>
        <p className="font-semibold text-sm">{m.title}</p>
        <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">{m.desc}</p>
      </div>
    ))}
  </Section>
);

export const NewReleasesRow = () => (
  <Section title="New Releases" subtitle="Fresh from the studio">
    {newReleases.map((n) => (
      <SongCard
        key={n.title}
        title={n.title}
        subtitle={n.artist}
        gradient={n.gradient}
        meta={`${n.date} · ${n.genre}`}
        badge={
          <span className="px-2 py-1 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider">
            New
          </span>
        }
      />
    ))}
  </Section>
);

export const PodcastsRow = () => (
  <Section title="Podcasts You Might Like" subtitle="Stories, interviews, and deep dives">
    {podcasts.map((p) => (
      <div key={p.title} className="group shrink-0 w-52 glass rounded-2xl p-3 card-hover cursor-pointer">
        <div className="relative mb-3">
          <CoverArt gradient={p.gradient} className="aspect-square w-full" rounded="rounded-xl" />
          <div className="absolute bottom-2 right-2">
            <PlayButton />
          </div>
        </div>
        <span className="inline-block px-2 py-0.5 rounded-full bg-primary/20 text-primary-glow text-[10px] font-semibold uppercase tracking-wider mb-2">
          {p.category}
        </span>
        <p className="font-semibold text-sm line-clamp-1">{p.title}</p>
        <p className="text-xs text-muted-foreground line-clamp-1">Hosted by {p.host}</p>
        <p className="text-[10px] text-muted-foreground/70 mt-1">{p.episodes} episodes</p>
      </div>
    ))}
  </Section>
);

export const RadioRow = () => (
  <Section title="Radio Stations" subtitle="Non-stop genre vibes">
    {radioStations.map((r) => (
      <div
        key={r.title}
        className="group relative shrink-0 w-52 aspect-[4/5] rounded-2xl p-5 overflow-hidden cursor-pointer card-hover"
        style={{ background: r.gradient }}
      >
        <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-white/15 blur-2xl" />
        <div className="relative z-10 flex flex-col h-full">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Radio</span>
          <h3 className="font-display text-xl font-bold text-white mt-1 leading-tight">{r.title}</h3>
          <p className="text-xs text-white/70 mt-1">{r.desc}</p>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-end gap-[3px] h-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="w-1 bg-white rounded-sm animate-equalize-1 h-full" />
              <span className="w-1 bg-white rounded-sm animate-equalize-2 h-full" />
              <span className="w-1 bg-white rounded-sm animate-equalize-3 h-full" />
              <span className="w-1 bg-white rounded-sm animate-equalize-1 h-full" />
              <span className="w-1 bg-white rounded-sm animate-equalize-2 h-full" />
            </div>
            <PlayButton className="ml-auto" />
          </div>
        </div>
      </div>
    ))}
  </Section>
);

export const RecentlyPlayedRow = () => (
  <Section title="Recently Played" subtitle="Pick up where you left off">
    {recentlyPlayed.map((r) => (
      <div key={r.title + r.ago} className="group shrink-0 w-40 cursor-pointer">
        <div className="relative mb-2">
          <CoverArt gradient={r.gradient} className="aspect-square w-full" />
          <div className="absolute bottom-2 right-2">
            <PlayButton size="sm" />
          </div>
        </div>
        <p className="font-semibold text-sm truncate">{r.title}</p>
        <p className="text-xs text-muted-foreground truncate">{r.artist}</p>
        <p className="text-[10px] text-accent/80 mt-1">{r.ago}</p>
      </div>
    ))}
  </Section>
);

export const MusicVideosRow = () => (
  <Section title="Music Videos" subtitle="Visual stories on repeat">
    {musicVideos.map((v) => (
      <div key={v.title} className="group shrink-0 w-80 cursor-pointer">
        <div
          className="relative aspect-video rounded-2xl overflow-hidden mb-3 card-hover"
          style={{ background: v.gradient }}
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
              <Play size={26} className="text-white group-hover:text-accent-foreground ml-1" fill="currentColor" />
            </div>
          </div>
          <span className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold">
            {v.duration}
          </span>
          <span className="absolute top-2 left-2 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold">
            {v.views} views
          </span>
        </div>
        <p className="font-semibold text-sm truncate">{v.title}</p>
        <p className="text-xs text-muted-foreground truncate">{v.artist}</p>
      </div>
    ))}
  </Section>
);
