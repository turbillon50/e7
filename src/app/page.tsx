import { AppShell } from "@/components/layout/app-shell";
import { ButtonLink } from "@/components/ui/button";
import { CinematicImage } from "@/components/ui/cinematic-image";
import { SectionHeading, Eyebrow } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { site } from "@/lib/site";

const pillars = [
  {
    icon: "movie_filter",
    title: "Film Production",
    body: "Historias que trascienden el tiempo, creadas con la más alta calidad técnica y narrativa.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=70",
  },
  {
    icon: "edit_note",
    title: "Development",
    body: "Nuevos proyectos pensados para el futuro, desde la conceptualización hasta el guion final.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=70",
  },
  {
    icon: "language",
    title: "Distribution",
    body: "Llevamos nuestras producciones a audiencias globales a través de canales estratégicos.",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=70",
  },
  {
    icon: "group_work",
    title: "Creative Talent",
    body: "Accionistas que creen, participan y crecen junto a una comunidad de visionarios.",
    image:
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=800&q=70",
  },
];

const journey = [
  { n: "01", icon: "person_add", title: "Account Setup", body: "Regístrate en nuestra plataforma exclusiva y forma parte de la red de inversionistas creativos." },
  { n: "02", icon: "payments", title: "Participation", body: "Elige el nivel que mejor se adapte a tus objetivos, desde mínimos accesibles a inversiones premium." },
  { n: "03", icon: "description", title: "Documents", body: "Gestión legal transparente y digital de todos tus acuerdos." },
  { n: "04", icon: "verified", title: "Certificate", body: "Recibe tu certificado oficial que te acredita como parte de la producción." },
];

export default function HomePage() {
  return (
    <AppShell padded={false}>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <CinematicImage
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1920&q=75"
            alt="Set cinematográfico de E7 Pictures en hora dorada"
            className="h-full w-full"
            imgClassName="opacity-70"
            priority
          />
          <div className="cinematic-vignette absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>

        <div className="relative z-10 flex max-w-4xl flex-col items-center px-margin-mobile text-center">
          <div className="animate-fade-in-up opacity-0">
            <Eyebrow className="tracking-[0.4em] text-primary-fixed">{site.tagline}</Eyebrow>
            <h1 className="mb-8 font-serif text-[44px] leading-tight md:text-display-lg">
              Forma parte de <span className="text-primary">E7 Pictures</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl font-body-lg text-body-lg leading-relaxed text-secondary">
              Participa en el crecimiento de una empresa dedicada al desarrollo, producción y
              distribución de contenido cinematográfico.
            </p>
            <div className="flex flex-col justify-center gap-4 md:flex-row">
              <ButtonLink href="/participate" size="lg">
                Quiero participar
              </ButtonLink>
              <ButtonLink href="/productions" variant="secondary" size="lg">
                Explorar proyectos
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-on-surface-variant/40">
          <span className="font-label-sm text-[10px] uppercase tracking-widest">Desplazar</span>
          <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Why E7 */}
      <section className="mx-auto max-w-frame px-margin-mobile py-24 md:px-margin-desktop md:py-section-gap">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="The Vision" title="Por qué elegir E7" />
          <p className="max-w-md font-body-md text-on-surface-variant">
            Un ecosistema diseñado para potenciar el talento cinematográfico y democratizar la
            inversión en la gran pantalla.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <article key={p.title} className="group relative aspect-[3/4] overflow-hidden glass-panel">
              <CinematicImage
                src={p.image}
                alt={p.title}
                className="absolute inset-0 h-full w-full"
                imgClassName="opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 w-full p-6">
                <Icon name={p.icon} className="mb-3 block text-4xl text-primary" />
                <h3 className="mb-2 font-serif text-headline-md">{p.title}</h3>
                <p className="font-body-md text-on-surface-variant">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="overflow-hidden bg-surface-container-low py-24 md:py-section-gap">
        <div className="mx-auto max-w-frame px-margin-mobile md:px-margin-desktop">
          <SectionHeading
            eyebrow="The Journey"
            title="Tu camino como accionista"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
            {journey.map((step) => (
              <div
                key={step.n}
                className="group flex flex-col justify-between glass-panel p-8 transition-colors hover:border-primary/50"
              >
                <div className="mb-12 flex items-start justify-between">
                  <span className="font-serif text-5xl text-primary opacity-20 transition-opacity group-hover:opacity-100">
                    {step.n}
                  </span>
                  <Icon name={step.icon} className="text-3xl text-on-surface-variant" />
                </div>
                <div>
                  <h4 className="mb-3 font-serif text-headline-md uppercase tracking-wider">
                    {step.title}
                  </h4>
                  <p className="font-body-md text-on-surface-variant">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-surface px-margin-mobile py-24 md:px-margin-desktop">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-between gap-10 overflow-hidden glass-panel p-10 md:flex-row md:p-20">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
          <div className="relative z-10 text-center md:text-left">
            <h2 className="mb-6 font-serif text-headline-lg">¿Listo para el estreno?</h2>
            <p className="font-body-lg text-on-surface-variant">
              Comienza hoy tu participación en E7 Pictures y sé parte de la próxima gran historia.
            </p>
          </div>
          <ButtonLink href="/participate" size="lg" className="relative z-10 shrink-0">
            Quiero ser accionista
          </ButtonLink>
        </div>
      </section>
    </AppShell>
  );
}
