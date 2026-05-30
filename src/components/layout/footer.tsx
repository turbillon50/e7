import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";

const columns = [
  {
    title: "Explorar",
    links: [
      { label: "Producciones", href: "/productions" },
      { label: "Comunidad", href: "/community" },
      { label: "Participar", href: "/participate" },
      { label: "Mi cuenta", href: "/account" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos", href: "#" },
      { label: "Privacidad", href: "#" },
      { label: "Contratos", href: "#" },
      { label: "Soporte", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/10 bg-surface-container-lowest px-margin-mobile py-16 md:px-margin-desktop">
      <div className="mx-auto grid max-w-frame grid-cols-1 gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-6">
            <Logo height={32} />
          </div>
          <p className="mb-8 max-w-sm font-body-md text-on-surface-variant">
            Elevando el cine a nuevas dimensiones de participación e impacto visual. Auteur
            Aesthetic desde {site.location}.
          </p>
          <div className="flex gap-4">
            {["public", "movie", "share"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant transition-all hover:bg-primary hover:text-on-primary"
              >
                <Icon name={icon} className="text-[18px]" />
              </a>
            ))}
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h5 className="mb-6 font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
              {col.title}
            </h5>
            <ul className="space-y-4 font-body-md text-on-surface-variant">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link className="transition-colors hover:text-primary" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-frame flex-col items-center justify-between gap-6 border-t border-outline-variant/10 pt-8 md:flex-row">
        <span className="font-label-sm text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/40">
          © {new Date().getFullYear()} {site.name} Studios. Todos los derechos reservados.
        </span>
        <span className="font-label-sm text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/40">
          Designed in CDMX · Premium Film Collective
        </span>
      </div>
    </footer>
  );
}
