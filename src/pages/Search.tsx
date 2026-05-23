import { useState, useMemo, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { FriendsActivity } from "@/components/FriendsActivity";
import { CoverArt } from "@/components/CoverArt";
import { PlayButton } from "@/components/PlayButton";
import { Search as SearchIcon, Clock, X, Mic2, Music, Disc3, User } from "lucide-react";
import {
  trending,
  newReleases,
  podcasts,
  madeForYou,
  gradients,
} from "@/lib/mockData";
import { cn } from "@/lib/utils";

const GENRES = [
  { label: "Pop", gradient: gradients[0] },
  { label: "Hip-Hop", gradient: gradients[8] },
  { label: "Electronic", gradient: gradients[3] },
  { label: "Indie", gradient: gradients[6] },
  { label: "R&B", gradient: gradients[7] },
  { label: "Jazz", gradient: gradients[4] },
  { label: "Rock", gradient: gradients[2] },
  { label: "Lo-Fi", gradient: gradients[1] },
  { label: "Classical", gradient: gradients[9] },
  { label: "Country", gradient: gradients[10] },
  { label: "Latin", gradient: gradients[11] },
  { label: "Workout", gradient: gradients[5] },
];

const TABS = ["All", "Songs", "Artists", "Albums", "Podcasts"] as const;
type Tab = typeof TABS[number];

const RECENT_KEY = "am_recent_searches";

// Build search corpus from existing mock data
const songs = [...trending, ...newReleases.map((n) => ({ title: n.title, artist: n.artist, gradient: n.gradient, plays: n.date }))];
const artists = Array.from(new Set(songs.map((s) => s.artist))).map((name, i) => ({
  name,
  followers: `${(Math.random() * 5 + 0.4).toFixed(1)}M followers`,
  gradient: gradients[i % gradients.length],
}));
const albums = madeForYou.map((m) => ({ title: m.title, artist: m.desc.split(",")[0], gradient: m.gradient }));

const Search = () => {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<Tab>("All");
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      if (raw) setRecent(JSON.parse(raw));
    } catch {}
  }, []);

  const saveRecent = (term: string) => {
    const t = term.trim();
    if (!t) return;
    const next = [t, ...recent.filter((r) => r.toLowerCase() !== t.toLowerCase())].slice(0, 8);
    setRecent(next);
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(next)); } catch {}
  };

  const removeRecent = (term: string) => {
    const next = recent.filter((r) => r !== term);
    setRecent(next);
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(next)); } catch {}
  };

  const clearAll = () => {
    setRecent([]);
    try { localStorage.removeItem(RECENT_KEY); } catch {}
  };

  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return { songs: [], artists: [], albums: [], podcasts: [] };
    return {
      songs: songs.filter((s) => s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q)).slice(0, 12),
      artists: artists.filter((a) => a.name.toLowerCase().includes(q)).slice(0, 8),
      albums: albums.filter((a) => a.title.toLowerCase().includes(q) || a.artist.toLowerCase().includes(q)).slice(0, 8),
      podcasts: podcasts.filter((p) => p.title.toLowerCase().includes(q) || p.host.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)).slice(0, 8),
    };
  }, [q]);

  const totalCount = results.songs.length + results.artists.length + results.albums.length + results.podcasts.length;

  return (
    <div className="flex min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 mesh-bg pointer-events-none opacity-80" />
      <div className="fixed inset-0 bg-background/40 pointer-events-none" />

      <Sidebar />

      <main className="flex-1 min-w-0 relative">
        <TopBar />
        <div className="px-5 md:px-8 py-7 space-y-10 max-w-[1500px]">
          {/* Big search input */}
          <header className="space-y-5 animate-fade-in">
            <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Search</h1>
            <div className="relative max-w-2xl">
              <SearchIcon size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && saveRecent(query)}
                placeholder="What do you want to listen to?"
                className="w-full h-14 pl-14 pr-12 rounded-full bg-secondary border border-transparent focus:border-primary/50 focus:bg-secondary text-base placeholder:text-muted-foreground outline-none transition-all"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-muted transition"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {q && (
              <div className="flex gap-1.5 flex-wrap">
                {TABS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition",
                      tab === t
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </header>

          {/* Empty state: recent + genres */}
          {!q ? (
            <>
              {recent.length > 0 && (
                <section className="space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-2xl font-semibold tracking-tight flex items-center gap-2">
                      <Clock size={20} className="text-muted-foreground" /> Recent searches
                    </h2>
                    <button onClick={clearAll} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition">
                      Clear all
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recent.map((r) => (
                      <div
                        key={r}
                        className="group flex items-center gap-2 pl-4 pr-1 py-1.5 rounded-full bg-secondary hover:bg-muted transition cursor-pointer"
                        onClick={() => setQuery(r)}
                      >
                        <span className="text-sm font-medium">{r}</span>
                        <button
                          onClick={(e) => { e.stopPropagation(); removeRecent(r); }}
                          className="p-1 rounded-full opacity-60 hover:opacity-100 hover:bg-background/40 transition"
                          aria-label={`Remove ${r}`}
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section className="space-y-4 animate-fade-in">
                <h2 className="font-display text-2xl font-semibold tracking-tight">Browse all</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {GENRES.map((g) => (
                    <button
                      key={g.label}
                      onClick={() => setQuery(g.label)}
                      className="group relative aspect-[5/3] rounded-2xl p-4 overflow-hidden text-left card-hover"
                      style={{ background: g.gradient }}
                    >
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white/15 blur-2xl" />
                      <h3 className="font-display text-xl font-bold text-white relative z-10">{g.label}</h3>
                    </button>
                  ))}
                </div>
              </section>
            </>
          ) : (
            <>
              {/* Live results */}
              {totalCount === 0 ? (
                <div className="text-center py-20 animate-fade-in">
                  <p className="font-display text-2xl font-semibold">No results for "{query}"</p>
                  <p className="text-sm text-muted-foreground mt-2">Please make sure your words are spelled correctly, or use fewer or different keywords.</p>
                </div>
              ) : (
                <div className="space-y-12 animate-fade-in">
                  {/* Top result */}
                  {(tab === "All") && (results.artists[0] || results.songs[0]) && (
                    <section className="grid lg:grid-cols-[1.1fr_2fr] gap-6">
                      <div>
                        <h2 className="font-display text-2xl font-semibold tracking-tight mb-4">Top result</h2>
                        <TopResult result={results.artists[0] || results.songs[0]} isArtist={!!results.artists[0]} />
                      </div>

                      {results.songs.length > 0 && (
                        <div>
                          <h2 className="font-display text-2xl font-semibold tracking-tight mb-4">Songs</h2>
                          <ul className="space-y-1">
                            {results.songs.slice(0, 5).map((s) => (
                              <SongRow key={s.title + s.artist} song={s} />
                            ))}
                          </ul>
                        </div>
                      )}
                    </section>
                  )}

                  {(tab === "All" || tab === "Songs") && tab !== "All" && results.songs.length > 0 && (
                    <Group title="Songs" icon={Music}>
                      <ul className="space-y-1">
                        {results.songs.map((s) => <SongRow key={s.title + s.artist} song={s} />)}
                      </ul>
                    </Group>
                  )}

                  {(tab === "All" || tab === "Artists") && results.artists.length > 0 && (
                    <Group title="Artists" icon={User}>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                        {results.artists.map((a) => <ArtistCard key={a.name} artist={a} />)}
                      </div>
                    </Group>
                  )}

                  {(tab === "All" || tab === "Albums") && results.albums.length > 0 && (
                    <Group title="Albums" icon={Disc3}>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                        {results.albums.map((a) => <AlbumCard key={a.title} album={a} />)}
                      </div>
                    </Group>
                  )}

                  {(tab === "All" || tab === "Podcasts") && results.podcasts.length > 0 && (
                    <Group title="Podcasts" icon={Mic2}>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                        {results.podcasts.map((p) => <PodcastCard key={p.title} podcast={p} />)}
                      </div>
                    </Group>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <FriendsActivity />
    </div>
  );
};

const Group = ({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) => (
  <section className="space-y-4">
    <h2 className="font-display text-2xl font-semibold tracking-tight flex items-center gap-2">
      <Icon size={20} className="text-muted-foreground" /> {title}
    </h2>
    {children}
  </section>
);

const TopResult = ({ result, isArtist }: { result: any; isArtist: boolean }) => (
  <div className="group relative p-5 rounded-2xl bg-card/60 hover:bg-card transition cursor-pointer overflow-hidden h-full min-h-[200px]">
    <CoverArt gradient={result.gradient} className={cn("w-24 h-24 mb-4", isArtist && "rounded-full")} rounded={isArtist ? "rounded-full" : "rounded-xl"} />
    <p className="font-display text-2xl font-bold truncate">{isArtist ? result.name : result.title}</p>
    <div className="flex items-center gap-2 mt-2">
      <span className="text-xs text-muted-foreground">{isArtist ? "Artist" : `Song · ${result.artist}`}</span>
    </div>
    <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
      <PlayButton size="lg" />
    </div>
  </div>
);

const SongRow = ({ song }: { song: any }) => (
  <li className="group flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/70 transition cursor-pointer">
    <div className="relative shrink-0">
      <CoverArt gradient={song.gradient} className="w-10 h-10" rounded="rounded-md" />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 rounded-md flex items-center justify-center transition">
        <PlayButton size="sm" />
      </div>
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-sm font-medium truncate">{song.title}</p>
      <p className="text-xs text-muted-foreground truncate">{song.artist}</p>
    </div>
    {song.plays && <span className="text-xs text-muted-foreground hidden sm:block">{song.plays}</span>}
  </li>
);

const ArtistCard = ({ artist }: { artist: any }) => (
  <div className="group p-4 rounded-xl bg-card/40 hover:bg-card transition cursor-pointer text-center">
    <CoverArt gradient={artist.gradient} className="aspect-square w-full mb-3" rounded="rounded-full" />
    <p className="font-semibold text-sm truncate">{artist.name}</p>
    <p className="text-xs text-muted-foreground">Artist</p>
  </div>
);

const AlbumCard = ({ album }: { album: any }) => (
  <div className="group p-3 rounded-xl bg-card/40 hover:bg-card transition cursor-pointer">
    <div className="relative mb-3">
      <CoverArt gradient={album.gradient} className="aspect-square w-full" />
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
        <PlayButton />
      </div>
    </div>
    <p className="font-semibold text-sm truncate">{album.title}</p>
    <p className="text-xs text-muted-foreground truncate">Album · {album.artist}</p>
  </div>
);

const PodcastCard = ({ podcast }: { podcast: any }) => (
  <div className="group p-3 rounded-xl bg-card/40 hover:bg-card transition cursor-pointer">
    <CoverArt gradient={podcast.gradient} className="aspect-square w-full mb-3" rounded="rounded-xl" />
    <p className="font-semibold text-sm line-clamp-1">{podcast.title}</p>
    <p className="text-xs text-muted-foreground truncate">Podcast · {podcast.host}</p>
  </div>
);

export default Search;
