import type { Metadata } from "next";
import { AppShell } from "@/components/layout/app-shell";
import { TierSelector } from "@/components/participate/tier-selector";
import { CinematicImage } from "@/components/ui/cinematic-image";
import { Eyebrow } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Participar",
  description:
    "Conviértete en arquitecto del cine. Participa en E7 Pictures desde $16 MXN y posee una parte de la próxima generación de historias.",
};

const benefits = [
  {
    icon: "verified",
    title: "El Certificado",
    body: "Cada participación queda anclada por un certificado de autenticidad que marca tu lugar en la historia de E7 Pictures.",
  },
  {
    icon: "group",
    title: "La Comunidad",
    body: "Únete a canales privados donde directores, escritores y productores comparten ideas y votan direcciones creativas.",
  },
];

export default function ParticipatePage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-frame px-margin-mobile md:px-margin-desktop">
        {/* Hero */}
        <header className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Invitación de Productor Ejecutivo</Eyebrow>
            <h1 className="mb-6 font-serif text-[40px] leading-tight md:text-display-lg">
              Conviértete en arquitecto del{" "}
              <span className="italic text-on-surface-variant">cine.</span>
            </h1>
            <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant/80">
              Ve más allá de la audiencia. E7 Pictures abre la oficina de producción a accionistas
              visionarios. Participa desde $16 MXN y posee una parte de la próxima generación de
              storytelling.
            </p>
          </div>
          <div className="glass-panel rounded-lg border-primary/20 p-6">
            <span className="mb-1 block font-label-sm text-label-sm text-on-surface-variant/60">
              RECAUDANDO ACTUALMENTE
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-headline-lg text-primary">$1.2M</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">MXN</span>
            </div>
            <div className="mt-4 h-[2px] w-full overflow-hidden bg-surface-variant">
              <div className="h-full w-2/3 bg-primary" />
            </div>
          </div>
        </header>

        {/* Tiers */}
        <TierSelector />

        {/* Dashboard preview + benefits */}
        <div className="mt-24 grid grid-cols-1 items-center gap-12 md:py-section-gap lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="group relative aspect-video overflow-hidden rounded-xl glass-panel">
              <CinematicImage
                src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&w=1200&q=70"
                alt="Sala de edición profesional de E7 Pictures"
                className="absolute inset-0 h-full w-full"
                imgClassName="opacity-60 transition-opacity duration-700 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute inset-x-8 bottom-8">
                <div className="mb-4 flex items-center gap-4">
                  <span className="rounded-full bg-primary/20 px-3 py-1 font-label-sm text-label-sm text-primary">
                    LIVE PREVIEW
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    PRODUCTION OFFICE DASHBOARD
                  </span>
                </div>
                <h4 className="mb-2 font-serif text-headline-md">
                  Monitorea cada cuadro de tu participación.
                </h4>
                <p className="font-body-md text-on-surface-variant/80">
                  Accede a actualizaciones de producción en tiempo real, desgloses de presupuesto y
                  material diario desde tu portal de miembro.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-12 lg:col-span-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full glass-panel">
                  <Icon name={b.icon} className="text-primary" />
                </div>
                <div>
                  <h5 className="mb-2 font-serif text-headline-md">{b.title}</h5>
                  <p className="font-body-md text-on-surface-variant/80">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
