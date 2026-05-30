import type { Metadata } from "next";
import { AppShell } from "@/components/layout/app-shell";
import { CinematicImage } from "@/components/ui/cinematic-image";
import { Button, ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { news, recognitionLevels } from "@/lib/data";
import { clsx } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Comunidad",
  description:
    "Behind the scenes, actualizaciones de proyectos, contenido exclusivo y niveles de reconocimiento para accionistas de E7 Pictures.",
};

export default function CommunityPage() {
  const [feature, ...rest] = news;

  return (
    <AppShell>
      <div className="mx-auto max-w-frame px-margin-mobile md:px-margin-desktop">
        {/* Featured */}
        <header className="mb-20">
          <div className="group relative h-[420px] overflow-hidden rounded-lg md:h-[560px]">
            <CinematicImage
              src={feature.image}
              alt={feature.title}
              className="h-full w-full"
              imgClassName="transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-x-6 bottom-8 md:inset-x-12 md:bottom-12">
              <span className="mb-4 block font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">
                {feature.category}
              </span>
              <h1 className="mb-6 max-w-3xl font-serif text-headline-lg-mobile text-white md:text-headline-lg">
                {feature.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6">
                <Button>Leer feature</Button>
                <span className="font-label-sm text-label-sm text-on-surface-variant/70">
                  DIRECTOR: MARCO ESTRADA · 2025
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* News grid */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="Newsroom"
            title="Lo último del estudio"
            description="Explora el detrás de cámaras, nuevos proyectos y entrevistas."
            className="mb-10"
          />
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-4">
            {rest.map((item) => (
              <article
                key={item.slug}
                className={clsx(
                  "group relative h-[440px] cursor-pointer overflow-hidden rounded-lg",
                  item.size === "wide" ? "md:col-span-2" : "md:col-span-1"
                )}
              >
                <CinematicImage
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="mb-2 block font-label-sm text-label-sm uppercase text-primary">
                    {item.category}
                  </span>
                  <h3 className="mb-2 font-serif text-headline-md text-white">{item.title}</h3>
                  <p className="font-label-sm text-label-sm text-on-surface-variant opacity-0 transition-opacity group-hover:opacity-100">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Shareholders / recognition */}
        <section className="mb-12">
          <div className="rounded-xl glass-panel p-8 md:p-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="mb-4 block font-label-sm text-label-sm uppercase tracking-widest text-primary">
                  Accionistas · Comunidad
                </span>
                <h2 className="mb-6 font-serif text-headline-lg-mobile text-white md:text-headline-lg">
                  Nuestro éxito es tu legado.
                </h2>
                <p className="mb-8 font-body-md leading-relaxed text-on-surface-variant">
                  Únete a un círculo global de inversionistas visionarios. Como socio de E7 Pictures
                  no solo financias historias: las traes a la vida. Accede a hitos exclusivos de
                  producción y reconocimiento especializado.
                </p>
                <div className="space-y-6">
                  {recognitionLevels.map((level) => (
                    <div
                      key={level.name}
                      className={clsx(
                        "flex items-center gap-6 border-l-2 p-4 transition-colors",
                        level.active
                          ? "border-primary bg-primary/5"
                          : "border-outline-variant/30 hover:border-primary/50"
                      )}
                    >
                      <Icon
                        name={level.icon}
                        filled={level.active}
                        className={clsx("text-4xl", level.active ? "text-primary" : "text-secondary")}
                      />
                      <div>
                        <h4 className="font-label-sm text-label-sm font-bold uppercase text-white">
                          {level.name}
                        </h4>
                        <p className="text-xs text-on-surface-variant/80">{level.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <ButtonLink href="/participate" variant="secondary" className="mt-12 w-full">
                  Mejora tu participación
                </ButtonLink>
              </div>

              <div className="grid grid-cols-2 gap-4 lg:col-span-7">
                <div className="relative col-span-2 h-48 overflow-hidden rounded-lg">
                  <CinematicImage
                    src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1200&q=70"
                    alt="Premiere de E7 Pictures"
                    className="h-full w-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="text-center">
                      <span className="block font-serif text-[40px] text-primary">85k+</span>
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-white">
                        Accionistas activos
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center rounded-lg border border-outline-variant/10 bg-surface-container p-8">
                  <Icon name="account_balance_wallet" className="mb-4 text-primary" />
                  <h4 className="mb-2 font-bold text-white">Valor total construido</h4>
                  <p className="font-serif text-2xl text-primary">$124.5M</p>
                </div>
                <div className="flex flex-col justify-center rounded-lg border border-outline-variant/10 bg-surface-container p-8">
                  <Icon name="movie" className="mb-4 text-primary" />
                  <h4 className="mb-2 font-bold text-white">Producciones activas</h4>
                  <p className="font-serif text-2xl text-primary">12</p>
                </div>
                <div className="col-span-2 rounded-lg border border-primary/20 bg-primary/5 p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="mb-1 font-bold text-white">Hito actual</h4>
                      <p className="text-sm text-on-surface-variant">
                        Ronda Serie B: producción de &lsquo;The Last Echo&rsquo;
                      </p>
                    </div>
                    <span className="font-bold text-primary">78%</span>
                  </div>
                  <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-surface-variant">
                    <div className="h-full bg-primary" style={{ width: "78%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
