interface EqualizerProps {
  className?: string;
}

export const Equalizer = ({ className = "" }: EqualizerProps) => (
  <div className={`flex items-end gap-[2px] h-3 ${className}`}>
    <span className="w-[3px] bg-accent rounded-sm animate-equalize-1 origin-bottom h-full" />
    <span className="w-[3px] bg-accent rounded-sm animate-equalize-2 origin-bottom h-full" />
    <span className="w-[3px] bg-accent rounded-sm animate-equalize-3 origin-bottom h-full" />
  </div>
);
