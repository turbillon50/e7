import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Text, Manrope } from "next/font/google";
import { site } from "@/lib/site";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import "./globals.css";

const serif = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  weight: ["300", "400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Cinematic Excellence`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: site.name,
  },
  keywords: [
    "E7 Pictures",
    "cine",
    "producción cinematográfica",
    "inversión en cine",
    "accionistas",
    "comunidad de cine",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Cinematic Excellence`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Cinematic Excellence`,
    description: site.description,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/icon-192.png", sizes: "192x192" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#131313",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`dark ${serif.variable} ${sans.variable}`}>
      <head>
        {/* Material Symbols — global icon font; intentionally app-wide. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-background font-sans text-on-background antialiased selection:bg-primary selection:text-on-primary">
        {/* Film-grain overlay across the whole app for cinematic texture. */}
        <div className="grain-overlay fixed inset-0 z-[100]" aria-hidden />
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
