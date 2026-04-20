import { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { FriendsActivity } from "@/components/FriendsActivity";
import {
  QuickPicksGrid,
  TrendingRow,
  MadeForYouRow,
  NewReleasesRow,
  PodcastsRow,
  RadioRow,
  RecentlyPlayedRow,
  MusicVideosRow,
} from "@/components/Rows";
import { ChartsSection } from "@/components/ChartsSection";
import { ArtistSpotlight } from "@/components/ArtistSpotlight";
import { Skeleton } from "@/components/ui/skeleton";

const getGreeting = () => {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
};

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex min-h-screen bg-background text-foreground relative">
      {/* Mesh background */}
      <div className="fixed inset-0 mesh-bg pointer-events-none opacity-80" />
      <div className="fixed inset-0 bg-background/40 pointer-events-none" />

      <Sidebar />

      <main className="flex-1 min-w-0 relative">
        <TopBar />
        <div className="px-5 md:px-8 py-7 space-y-10 md:space-y-12 max-w-[1500px]">
          {loading ? (
            <LoadingState />
          ) : (
            <>
              <header className="animate-fade-in">
                <p className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-3">
                  Welcome back
                </p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  {getGreeting()}, <span className="text-gradient-primary">Alex</span>
                </h1>
                <div className="mt-6">
                  <QuickPicksGrid />
                </div>
              </header>

              <TrendingRow />
              <MadeForYouRow />
              <NewReleasesRow />
              <ArtistSpotlight />
              <PodcastsRow />
              <ChartsSection />
              <RadioRow />
              <RecentlyPlayedRow />
              <MusicVideosRow />

              <footer className="pt-8 pb-4 text-center">
                <p className="text-xs text-muted-foreground">
                  © SoundWave — Music for the moment
                </p>
              </footer>
            </>
          )}
        </div>
      </main>

      <FriendsActivity />
    </div>
  );
};

const LoadingState = () => (
  <div className="space-y-10 animate-fade-in">
    <div>
      <Skeleton className="h-4 w-32 mb-4" />
      <Skeleton className="h-14 w-96 mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-16 rounded-xl" />
        ))}
      </div>
    </div>
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i}>
        <Skeleton className="h-8 w-48 mb-4" />
        <div className="flex gap-5">
          {Array.from({ length: 6 }).map((_, j) => (
            <Skeleton key={j} className="h-60 w-48 rounded-2xl shrink-0" />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Index;
