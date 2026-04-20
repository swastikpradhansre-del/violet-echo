import { useRef, useState, useEffect, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  subtitle?: string;
  action?: string;
  children: ReactNode;
  scroll?: boolean;
}

export const Section = ({ title, subtitle, action = "Show all", children, scroll = true }: SectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !scroll) return;
    const update = () => {
      setCanLeft(el.scrollLeft > 8);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    };
    update();
    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [scroll]);

  const scrollBy = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * scrollRef.current.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="group/section space-y-4">
      <header className="flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
            {title}
          </h2>
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-2">
          {scroll && (
            <div className="hidden md:flex gap-1 opacity-0 group-hover/section:opacity-100 transition-opacity">
              <button
                onClick={() => scrollBy(-1)}
                disabled={!canLeft}
                aria-label="Scroll left"
                className="p-2 rounded-full glass hover:bg-primary/20 disabled:opacity-30 disabled:cursor-not-allowed transition"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollBy(1)}
                disabled={!canRight}
                aria-label="Scroll right"
                className="p-2 rounded-full glass hover:bg-primary/20 disabled:opacity-30 disabled:cursor-not-allowed transition"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
          {action && (
            <button className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition">
              {action}
            </button>
          )}
        </div>
      </header>
      {scroll ? (
        <div
          ref={scrollRef}
          className={cn("flex gap-5 overflow-x-auto scrollbar-none scroll-smooth -mx-2 px-2 pb-2")}
        >
          {children}
        </div>
      ) : (
        <div>{children}</div>
      )}
    </section>
  );
};
