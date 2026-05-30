import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { CinematicImage } from "@/components/ui/cinematic-image";
import { ButtonLink } from "@/components/ui/button";
import { TimelineTracker } from "@/components/productions/timeline-tracker";
import { productions, stats } from "@/lib/data";
import { clsx } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Producciones",
  description:
    "Sigue la evolución de cada historia, desde la primera chispa de una idea hasta el estreno global.",
};

export default function ProductionsPage() {
  return (
    <AppShell>
      <section className="mb-16 px-margin-mobile md:px-margin-desktop">
        <div className="mx-auto max-w-frame">
          <h1 className="mb-4 font-serif text-headline-lg-mobile text-primary md:text-headline-lg">
            Producciones activas
          </h1>
          <p className="max-w-2xl font-body-lg leading-relaxed text-on-surface-variant">
            Sé testigo de la evolución del storytelling. Desde la primera chispa de una idea hasta el
            estreno global, sigue el camino de nuestras últimas apuestas cinematográficas.
          </p>
        </div>
      </section>

      <section className="mx-auto flex max-w-frame flex-col gap-20 px-margin-mobile md:gap-section-gap md:px-margin-desktop">
        {productions.map((p, i) => (
          <article
            key={p.slug}
            className="group grid grid-cols-1 items-center gap-gutter lg:grid-cols-12"
          >
            <Link
              href={`/productions/${p.slug}`}
              className={clsx(
                "overflow-hidden rounded-lg lg:col-span-7",
                i % 2 === 1 && "lg:order-2"
              )}
            >
              <CinematicImage
                src={p.image}
                alt={p.title}
                className="aspect-video w-full"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
            </Link>
            <div
              className={clsx(
                "flex flex-col justify-center gap-6 lg:col-span-5",
                i % 2 === 1 && "lg:order-1"
              )}
            >
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">
                  {p.genre}
                </span>
                <h2 className="font-serif text-headline-md uppercase text-on-surface md:text-headline-lg">
                  {p.title}
                </h2>
              </div>
              <TimelineTracker status={p.status} progress={p.progress} />
              <p className="font-body-md italic leading-relaxed text-on-surface-variant">
                “{p.logline}”
              </p>
              <div className="flex flex-wrap gap-4">
                <ButtonLink href={`/productions/${p.slug}`}>Ver proyecto</ButtonLink>
                <ButtonLink href="/participate" variant="secondary">
                  Participar
                </ButtonLink>
              </div>
              <div className="flex gap-8 border-t border-outline-variant/10 pt-6">
                <div>
                  <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant/60">
                    Dirección
                  </span>
                  <span className="font-medium text-on-surface">{p.director}</span>
                </div>
                <div>
                  <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant/60">
                    Estreno
                  </span>
                  <span className="font-medium text-on-surface">{p.releaseLabel}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Stats callout */}
      <section className="mx-auto mt-20 max-w-frame px-margin-mobile md:mt-section-gap md:px-margin-desktop">
        <div className="film-poster relative overflow-hidden rounded-lg border border-outline-variant/15 p-12">
          <div className="relative z-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <span className="block font-serif text-[40px] text-primary md:text-display-lg">
                  {s.value}
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />
        </div>
      </section>
    </AppShell>
  );
}
