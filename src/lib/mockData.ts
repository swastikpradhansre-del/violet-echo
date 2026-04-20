// Gradient covers used as album art placeholders — gives a distinctive non-stock feel
export const gradients = [
  "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)",
  "linear-gradient(135deg, #10ffa8 0%, #0ea5e9 100%)",
  "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
  "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
  "linear-gradient(135deg, #0f172a 0%, #7c3aed 100%)",
  "linear-gradient(135deg, #10ffa8 0%, #7c3aed 100%)",
  "linear-gradient(135deg, #fb7185 0%, #fbbf24 100%)",
  "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
  "linear-gradient(135deg, #f97316 0%, #db2777 100%)",
  "linear-gradient(135deg, #84cc16 0%, #10b981 100%)",
  "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
  "linear-gradient(135deg, #ef4444 0%, #7c3aed 100%)",
];

export const quickPicks = [
  { title: "Midnight Velvet", artist: "Luma Vale", gradient: gradients[0] },
  { title: "Neon Gospel", artist: "Kairos", gradient: gradients[3] },
  { title: "Lofi Dreamscape", artist: "Various Artists", gradient: gradients[1] },
  { title: "Afterhours", artist: "Sable Noir", gradient: gradients[4] },
  { title: "Paper Planes", artist: "Indie Fresh", gradient: gradients[6] },
  { title: "Deep Focus", artist: "Ambient Co.", gradient: gradients[7] },
];

export const trending = [
  { title: "Gravity", artist: "Nova Kade", plays: "42.1M", gradient: gradients[0] },
  { title: "Runaway Sun", artist: "Echo Fields", plays: "38.7M", gradient: gradients[1] },
  { title: "Cold Static", artist: "Tenebris", plays: "29.4M", gradient: gradients[2] },
  { title: "Violet Hour", artist: "Sia Moreno", plays: "24.9M", gradient: gradients[3] },
  { title: "Amber Haze", artist: "Dust & Gold", plays: "18.2M", gradient: gradients[6] },
  { title: "Paper Crown", artist: "Kairos", plays: "15.6M", gradient: gradients[4] },
  { title: "Neon Saints", artist: "Lux Vera", plays: "12.8M", gradient: gradients[5] },
  { title: "Lost Signal", artist: "Tenebris", plays: "11.3M", gradient: gradients[7] },
];

export const madeForYou = [
  { title: "Daily Mix 1", desc: "Luma Vale, Sia Moreno, Kairos", gradient: gradients[0] },
  { title: "Daily Mix 2", desc: "Echo Fields, Nova Kade, Dust & Gold", gradient: gradients[1] },
  { title: "Daily Mix 3", desc: "Tenebris, Sable Noir, Lux Vera", gradient: gradients[4] },
  { title: "Discover Weekly", desc: "Your weekly mixtape of new music", gradient: gradients[3] },
  { title: "Release Radar", desc: "Catch all the latest music", gradient: gradients[5] },
  { title: "On Repeat", desc: "Songs you can't stop playing", gradient: gradients[8] },
];

export const newReleases = [
  { title: "After the Bloom", artist: "Luma Vale", date: "Apr 18", genre: "Alt-Pop", gradient: gradients[0] },
  { title: "Obsidian", artist: "Tenebris", date: "Apr 15", genre: "Dark Wave", gradient: gradients[4] },
  { title: "Neon Gospel", artist: "Kairos", date: "Apr 12", genre: "Electronic", gradient: gradients[3] },
  { title: "Golden Root", artist: "Dust & Gold", date: "Apr 10", genre: "Indie Folk", gradient: gradients[6] },
  { title: "Undertow", artist: "Sia Moreno", date: "Apr 08", genre: "R&B", gradient: gradients[7] },
  { title: "Paper Crown", artist: "Echo Fields", date: "Apr 05", genre: "Indie Rock", gradient: gradients[1] },
];

export const podcasts = [
  { title: "The Midnight Frequency", host: "Ivan Ortega", episodes: 142, category: "Music", gradient: gradients[4] },
  { title: "Sonic Architects", host: "Mira Chen", episodes: 88, category: "Interviews", gradient: gradients[3] },
  { title: "Crate Diggers", host: "DJ Ashen", episodes: 210, category: "Hip-Hop", gradient: gradients[8] },
  { title: "After the Bridge", host: "Selma Vox", episodes: 56, category: "Songwriting", gradient: gradients[0] },
  { title: "Signal & Noise", host: "The Producers", episodes: 124, category: "Production", gradient: gradients[7] },
  { title: "Vinyl Rites", host: "Kofi Ade", episodes: 73, category: "Jazz", gradient: gradients[2] },
];

export const charts = {
  global: [
    { rank: 1, change: 0, title: "Gravity", artist: "Nova Kade", duration: "3:42", gradient: gradients[0] },
    { rank: 2, change: 1, title: "Runaway Sun", artist: "Echo Fields", duration: "2:58", gradient: gradients[1] },
    { rank: 3, change: -1, title: "Cold Static", artist: "Tenebris", duration: "4:12", gradient: gradients[2] },
    { rank: 4, change: 2, title: "Violet Hour", artist: "Sia Moreno", duration: "3:24", gradient: gradients[3] },
    { rank: 5, change: 0, title: "Amber Haze", artist: "Dust & Gold", duration: "3:51", gradient: gradients[6] },
    { rank: 6, change: -2, title: "Paper Crown", artist: "Kairos", duration: "2:47", gradient: gradients[4] },
    { rank: 7, change: 3, title: "Neon Saints", artist: "Lux Vera", duration: "4:05", gradient: gradients[5] },
    { rank: 8, change: 1, title: "Lost Signal", artist: "Tenebris", duration: "3:33", gradient: gradients[7] },
    { rank: 9, change: -1, title: "Soft Machine", artist: "Sable Noir", duration: "3:18", gradient: gradients[9] },
    { rank: 10, change: 4, title: "Midnight Velvet", artist: "Luma Vale", duration: "4:21", gradient: gradients[10] },
  ],
  india: [
    { rank: 1, change: 2, title: "Saanwariya", artist: "Arjun Raj", duration: "3:48", gradient: gradients[6] },
    { rank: 2, change: 0, title: "Chandni Raat", artist: "Noor Ali", duration: "4:12", gradient: gradients[3] },
    { rank: 3, change: -1, title: "Dil Se", artist: "Kavya", duration: "3:29", gradient: gradients[0] },
    { rank: 4, change: 5, title: "Monsoon", artist: "Tarun Bose", duration: "3:54", gradient: gradients[7] },
    { rank: 5, change: 1, title: "Roz Roz", artist: "The Local Train", duration: "4:02", gradient: gradients[11] },
    { rank: 6, change: -2, title: "Aaja", artist: "Priya Mehra", duration: "3:15", gradient: gradients[4] },
    { rank: 7, change: 0, title: "Nadiya", artist: "Ranveer Das", duration: "3:47", gradient: gradients[1] },
    { rank: 8, change: 3, title: "Reverie", artist: "Mira Chen", duration: "4:18", gradient: gradients[8] },
    { rank: 9, change: -1, title: "Gulmohar", artist: "Aasha Ro", duration: "3:32", gradient: gradients[9] },
    { rank: 10, change: 6, title: "Jaadu", artist: "Neon Tigers", duration: "2:58", gradient: gradients[5] },
  ],
};

export const radioStations = [
  { title: "Chill Vibes", desc: "Downtempo & lo-fi", gradient: gradients[1] },
  { title: "Hip-Hop Heat", desc: "Fresh drops daily", gradient: gradients[8] },
  { title: "Jazz Nights", desc: "Smoky late hours", gradient: gradients[4] },
  { title: "Indie Bloom", desc: "Curated indie cuts", gradient: gradients[6] },
  { title: "Electronic Pulse", desc: "Club to chillout", gradient: gradients[3] },
  { title: "R&B Soul", desc: "Velvet & groove", gradient: gradients[0] },
  { title: "Acoustic Room", desc: "Unplugged & raw", gradient: gradients[9] },
  { title: "Dark Ambient", desc: "Cinematic depths", gradient: gradients[11] },
];

export const recentlyPlayed = [
  { title: "Gravity", artist: "Nova Kade", ago: "2 hours ago", gradient: gradients[0] },
  { title: "Paper Crown", artist: "Kairos", ago: "3 hours ago", gradient: gradients[4] },
  { title: "Daily Mix 1", artist: "Made for you", ago: "Yesterday", gradient: gradients[3] },
  { title: "Runaway Sun", artist: "Echo Fields", ago: "Yesterday", gradient: gradients[1] },
  { title: "Chill Vibes", artist: "Radio", ago: "2 days ago", gradient: gradients[7] },
  { title: "Obsidian", artist: "Tenebris", ago: "3 days ago", gradient: gradients[11] },
  { title: "Amber Haze", artist: "Dust & Gold", ago: "4 days ago", gradient: gradients[6] },
  { title: "Neon Saints", artist: "Lux Vera", ago: "5 days ago", gradient: gradients[5] },
];

export const musicVideos = [
  { title: "Violet Hour — Official Video", artist: "Sia Moreno", views: "12.4M", duration: "4:02", gradient: gradients[3] },
  { title: "Gravity (Live at KEXP)", artist: "Nova Kade", views: "8.7M", duration: "5:18", gradient: gradients[0] },
  { title: "Obsidian — Visualizer", artist: "Tenebris", views: "3.2M", duration: "3:56", gradient: gradients[11] },
  { title: "Paper Crown — MV", artist: "Kairos", views: "15.1M", duration: "4:24", gradient: gradients[4] },
  { title: "Golden Root", artist: "Dust & Gold", views: "6.8M", duration: "3:48", gradient: gradients[6] },
];

export const friends = [
  { name: "Emilia R.", track: "Violet Hour", artist: "Sia Moreno", color: gradients[3], live: true },
  { name: "Marcus O.", track: "Gravity", artist: "Nova Kade", color: gradients[0], live: true },
  { name: "Priya K.", track: "Paper Crown", artist: "Kairos", color: gradients[4], live: false },
  { name: "Jun H.", track: "Runaway Sun", artist: "Echo Fields", color: gradients[1], live: false },
  { name: "Sofia T.", track: "Obsidian", artist: "Tenebris", color: gradients[11], live: true },
  { name: "Dax L.", track: "Neon Saints", artist: "Lux Vera", color: gradients[5], live: false },
  { name: "Zara W.", track: "Amber Haze", artist: "Dust & Gold", color: gradients[6], live: false },
];

export const spotlight = {
  name: "Luma Vale",
  listeners: "24.8M monthly listeners",
  tracks: [
    { title: "Midnight Velvet", plays: "142M" },
    { title: "Paper Planes", plays: "98M" },
    { title: "After the Bloom", plays: "54M" },
  ],
};
