/**
 * Demo (mock) data for E7 Pictures.
 *
 * This is the seam where a real backend connects later. Each export mirrors a
 * table/endpoint shape so swapping to Neon/Prisma or an API is a drop-in.
 * Images use the Unsplash CDN; the UI degrades gracefully to a cinematic
 * gradient if an image fails to load.
 */

export type ProductionStatus =
  | "Development"
  | "Pre-Prod"
  | "Filming"
  | "Post-Prod"
  | "Distribution"
  | "Premiere";

export const PRODUCTION_STAGES: ProductionStatus[] = [
  "Development",
  "Pre-Prod",
  "Filming",
  "Post-Prod",
  "Distribution",
  "Premiere",
];

export type Production = {
  slug: string;
  title: string;
  genre: string;
  logline: string;
  status: ProductionStatus;
  progress: number; // 0–100
  director: string;
  releaseLabel: string;
  image: string;
};

export const productions: Production[] = [
  {
    slug: "horizon-protocol",
    title: "Horizon Protocol",
    genre: "Sci-Fi / Drama",
    logline:
      "En un mundo donde los recuerdos son moneda, un hombre descubre una deuda que jamás podrá pagar.",
    status: "Filming",
    progress: 65,
    director: "Elena Vance",
    releaseLabel: "Invierno 2025",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "silent-mercury",
    title: "Silent Mercury",
    genre: "Neo-Noir Thriller",
    logline:
      "Los secretos más ruidosos son los que nunca se pronuncian. Un atraco de alto riesgo en el corazón de Tokio.",
    status: "Post-Prod",
    progress: 88,
    director: "Kaito Sato",
    releaseLabel: "Mayo 2025",
    image:
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "the-alchemists-echo",
    title: "The Alchemist's Echo",
    genre: "Period Piece / Mystery",
    logline:
      "En los salones de la sabiduría olvidada, una joven estudiosa descubre una fórmula capaz de rehacer la realidad o destruirla.",
    status: "Development",
    progress: 15,
    director: "Julian Thorne",
    releaseLabel: "Producción 2026",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=70",
  },
];

export type Tier = {
  id: string;
  name: string;
  subtitle: string;
  amount: number | null; // null = custom
  icon: string;
  featured?: boolean;
  perks: string[];
  cta: string;
};

export const tiers: Tier[] = [
  {
    id: "supporter",
    name: "Supporter",
    subtitle: "Nivel de entrada",
    amount: 16,
    icon: "movie_filter",
    perks: [
      "Certificado digital de Miembro Fundador",
      "Acceso a los Production Vlogs",
    ],
    cta: "Elegir nivel",
  },
  {
    id: "cinematographer",
    name: "Cinematographer",
    subtitle: "El favorito",
    amount: 50,
    icon: "camera_roll",
    featured: true,
    perks: [
      "Todos los beneficios de Supporter",
      "Tu nombre en los créditos digitales",
      "Acceso anticipado a screenings",
    ],
    cta: "Elegir nivel",
  },
  {
    id: "director",
    name: "Director",
    subtitle: "Profesional",
    amount: 100,
    icon: "theaters",
    perks: [
      "Certificado impreso en alta resolución",
      "Invitaciones a lecturas de guion",
      "Merch de edición limitada del estudio",
    ],
    cta: "Elegir nivel",
  },
  {
    id: "auteur",
    name: "Auteur",
    subtitle: "Legado a medida",
    amount: null,
    icon: "stars",
    perks: [
      "Define tu propio impacto desde $300 MXN",
      "Incluye todos los beneficios de Director",
      "Reconocimiento ejecutivo personalizado",
    ],
    cta: "Personalizar",
  },
];

export type NewsItem = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  size: "feature" | "wide" | "standard";
};

export const news: NewsItem[] = [
  {
    slug: "golden-hour",
    category: "Newsroom • Exclusiva",
    title: "Inside the Golden Hour: capturando el alma de 'The Eternal Horizon'",
    excerpt:
      "Una mirada íntima al proceso detrás de nuestra producción más ambiciosa hasta la fecha.",
    image:
      "https://images.unsplash.com/photo-1500210600320-c54a98e9c4d4?auto=format&fit=crop&w=1600&q=70",
    size: "feature",
  },
  {
    slug: "architecture-of-lighting",
    category: "Behind the Scenes",
    title: "La arquitectura de la luz",
    excerpt: "Descubre el setup técnico detrás de nuestra última epopeya sci-fi.",
    image:
      "https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&w=1200&q=70",
    size: "wide",
  },
  {
    slug: "script-to-screen",
    category: "Development",
    title: "Del guion a la pantalla",
    excerpt: "El viaje creativo de una idea hasta su primer día de rodaje.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=70",
    size: "standard",
  },
  {
    slug: "art-of-vision",
    category: "Entrevistas",
    title: "El arte de la visión",
    excerpt: "Conversamos con los directores que están redefiniendo el cine independiente.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=70",
    size: "standard",
  },
];

export type RecognitionLevel = {
  name: string;
  description: string;
  icon: string;
  active: boolean;
};

export const recognitionLevels: RecognitionLevel[] = [
  {
    name: "Executive Tier",
    description:
      "Acceso directo a invitaciones de premiere y cumbres trimestrales de producción.",
    icon: "workspace_premium",
    active: true,
  },
  {
    name: "Visionary Tier",
    description: "Reconocimiento digital en créditos y acceso a screenings privados.",
    icon: "stars",
    active: false,
  },
];

/** Aggregate community stats shown across Community / Productions. */
export const stats = [
  { value: "12", label: "Proyectos activos" },
  { value: "34", label: "Premios internacionales" },
  { value: "85k+", label: "Accionistas activos" },
  { value: "$124.5M", label: "Valor construido" },
];

/** The signed-in demo user (replace with auth provider session). */
export const demoUser = {
  name: "Daniela Torres",
  initials: "DT",
  email: "daniela@e7pictures.mx",
  tier: "Cinematographer",
  memberSince: "Marzo 2024",
  totalParticipation: 1450,
  certificateId: "E7-2024-0042",
  productionsBacked: 3,
};

export type VaultDocument = {
  name: string;
  type: string;
  date: string;
  icon: string;
};

export const vaultDocuments: VaultDocument[] = [
  { name: "Certificado de Participación", type: "PDF", date: "12 Mar 2024", icon: "verified" },
  { name: "Acuerdo de Accionista", type: "PDF", date: "12 Mar 2024", icon: "gavel" },
  { name: "Reporte Q1 — Horizon Protocol", type: "PDF", date: "01 Abr 2024", icon: "summarize" },
  { name: "Recibo de Participación", type: "PDF", date: "12 Mar 2024", icon: "receipt_long" },
];

export type EventItem = {
  title: string;
  date: string;
  location: string;
  type: string;
};

export const upcomingEvents: EventItem[] = [
  {
    title: "Premiere: Silent Mercury",
    date: "24 May 2025",
    location: "Cineteca Nacional, CDMX",
    type: "Premiere",
  },
  {
    title: "Cumbre de Accionistas Q2",
    date: "10 Jun 2025",
    location: "Online",
    type: "Summit",
  },
  {
    title: "Lectura de guion: The Alchemist's Echo",
    date: "02 Jul 2025",
    location: "E7 Studios, CDMX",
    type: "Script Reading",
  },
];

export type Activity = {
  label: string;
  detail: string;
  date: string;
  icon: string;
};

export const recentActivity: Activity[] = [
  { label: "Participación confirmada", detail: "Nivel Director · $100 MXN", date: "Hace 2 días", icon: "payments" },
  { label: "Nuevo documento", detail: "Reporte Q1 — Horizon Protocol", date: "Hace 1 semana", icon: "description" },
  { label: "Hito de producción", detail: "Silent Mercury alcanzó 88%", date: "Hace 2 semanas", icon: "movie" },
];
