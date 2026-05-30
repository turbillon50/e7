import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { CinematicImage } from "@/components/ui/cinematic-image";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { TimelineTracker } from "@/components/productions/timeline-tracker";
import { productions } from "@/lib/data";

export function generateStaticParams() {
  return productions.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const production = productions.find((p) => p.slug === slug);
  if (!production) return { title: "Producción no encontrada" };
  return {
    title: production.title,
    description: production.logline,
  };
}

export default async function ProductionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const production = productions.find((p) => p.slug === slug);
  if (!production) notFound();

  const related = productions.filter((p) => p.slug !== slug);

  return (
    <AppShell>
      <article className="mx-auto max-w-frame px-margin-mobile md:px-margin-desktop">
        <Link
          href="/productions"
          className="mb-8 inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant transition-colors hover:text-primary"
        >
          <Icon name="arrow_back" className="text-base" />
          Producciones
        </Link>

        <div className="relative mb-12 overflow-hidden rounded-xl">
          <CinematicImage
            src={production.image}
            alt={production.title}
            className="aspect-[21/9] w-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute inset-x-6 bottom-6 md:inset-x-12 md:bottom-12">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">
              {production.genre}
            </span>
            <h1 className="mt-2 font-serif text-headline-lg-mobile uppercase md:text-display-lg">
              {production.title}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-8 font-serif text-headline-md italic leading-snug text-on-surface-variant">
              “{production.logline}”
            </p>
            <p className="mb-8 font-body-lg leading-relaxed text-on-surface-variant/80">
              {production.title} es una de las apuestas insignia de E7 Pictures. Como accionista,
              accedes a actualizaciones de rodaje, material exclusivo detrás de cámaras y a las
              decisiones creativas que dan forma a esta historia. Tu participación financia
              directamente la siguiente etapa de la producción.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/participate">Participar en este proyecto</ButtonLink>
              <ButtonLink href="/community" variant="secondary">
                Updates para accionistas
              </ButtonLink>
            </div>
          </div>

          <aside className="space-y-8 lg:col-span-5">
            <div className="rounded-xl glass-panel p-8">
              <h3 className="mb-6 font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
                Estado de producción
              </h3>
              <TimelineTracker status={production.status} progress={production.progress} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl glass-panel p-6">
                <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant/60">
                  Dirección
                </span>
                <span className="font-medium text-on-surface">{production.director}</span>
              </div>
              <div className="rounded-xl glass-panel p-6">
                <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant/60">
                  Estreno
                </span>
                <span className="font-medium text-on-surface">{production.releaseLabel}</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Related */}
        <section className="mt-20">
          <h2 className="mb-8 font-serif text-headline-md">Más producciones</h2>
          <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/productions/${r.slug}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <CinematicImage
                  src={r.image}
                  alt={r.title}
                  className="aspect-video w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="font-label-sm text-label-sm uppercase text-primary">{r.genre}</span>
                  <h3 className="font-serif text-headline-md">{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </AppShell>
  );
}
