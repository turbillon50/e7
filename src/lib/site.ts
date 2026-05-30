/**
 * Central brand & site configuration for E7 Pictures.
 * Extracted from the Google Stitch delivery (design/stitch-reference).
 */
export const site = {
  name: "E7 Pictures",
  shortName: "E7 Pictures",
  tagline: "Auteur Aesthetic Studios",
  description:
    "Forma parte de E7 Pictures. Participa en el desarrollo, producción y distribución de contenido cinematográfico desde $16 MXN.",
  url: "https://e7-pictures.vercel.app",
  locale: "es-MX",
  location: "Ciudad de México",
  themeColor: "#131313",
  accentColor: "#f2ca50",
} as const;

export type NavItem = {
  label: string;
  href: string;
  icon: string;
};

/** Bottom tab bar + desktop primary navigation. */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Producciones", href: "/productions", icon: "movie_filter" },
  { label: "Comunidad", href: "/community", icon: "group" },
  { label: "Cuenta", href: "/account", icon: "account_circle" },
];
