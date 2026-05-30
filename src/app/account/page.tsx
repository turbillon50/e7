import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import {
  demoUser,
  vaultDocuments,
  upcomingEvents,
  recentActivity,
} from "@/lib/data";
import { formatMXN } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mi cuenta",
  description: "Resumen de participación, certificado, bóveda de documentos y próximos eventos.",
};

const summary = [
  { label: "Participación total", value: formatMXN(demoUser.totalParticipation), icon: "savings" },
  { label: "Nivel actual", value: demoUser.tier, icon: "workspace_premium" },
  { label: "Proyectos apoyados", value: String(demoUser.productionsBacked), icon: "movie" },
  { label: "Miembro desde", value: demoUser.memberSince, icon: "calendar_month" },
];

export default function AccountPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-frame px-margin-mobile md:px-margin-desktop">
        {/* Header */}
        <header className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-serif text-2xl text-primary">
              {demoUser.initials}
            </div>
            <div>
              <h1 className="font-serif text-headline-md">Hola, {demoUser.name.split(" ")[0]}</h1>
              <p className="font-body-md text-on-surface-variant">{demoUser.email}</p>
            </div>
          </div>
          <ButtonLink href="/account/certificate" variant="secondary">
            <Icon name="verified" className="text-base" />
            Ver certificado
          </ButtonLink>
        </header>

        {/* Summary cards */}
        <section className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {summary.map((s) => (
            <div key={s.label} className="rounded-xl glass-panel p-6">
              <Icon name={s.icon} className="mb-4 text-2xl text-primary" />
              <span className="block font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/60">
                {s.label}
              </span>
              <span className="mt-1 block font-serif text-headline-md text-on-surface">{s.value}</span>
            </div>
          ))}
        </section>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left column */}
          <div className="space-y-12 lg:col-span-7">
            {/* Document vault */}
            <section>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-serif text-headline-md">Bóveda de documentos</h2>
                <span className="font-label-sm text-label-sm uppercase text-on-surface-variant/60">
                  {vaultDocuments.length} archivos
                </span>
              </div>
              <ul className="divide-y divide-outline-variant/10 overflow-hidden rounded-xl glass-panel">
                {vaultDocuments.map((doc) => (
                  <li
                    key={doc.name}
                    className="flex items-center gap-4 p-5 transition-colors hover:bg-white/[0.02]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Icon name={doc.icon} className="text-primary" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-body-md text-on-surface">{doc.name}</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant/60">
                        {doc.type} · {doc.date}
                      </p>
                    </div>
                    <button
                      aria-label={`Descargar ${doc.name}`}
                      className="p-2 text-on-surface-variant transition-colors hover:text-primary"
                    >
                      <Icon name="download" />
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            {/* Recent activity */}
            <section>
              <h2 className="mb-6 font-serif text-headline-md">Actividad reciente</h2>
              <ul className="space-y-4">
                {recentActivity.map((a) => (
                  <li key={a.label} className="flex items-start gap-4 rounded-xl glass-panel p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-container-high">
                      <Icon name={a.icon} className="text-primary" />
                    </span>
                    <div className="flex-1">
                      <p className="font-body-md text-on-surface">{a.label}</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant/60">{a.detail}</p>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant/40">{a.date}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right column */}
          <aside className="space-y-12 lg:col-span-5">
            {/* Certificate teaser */}
            <section className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-surface-container to-surface-container-lowest p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <Icon name="workspace_premium" filled className="mb-4 text-4xl text-primary" />
              <h3 className="mb-1 font-serif text-headline-md">Certificado de participación</h3>
              <p className="mb-2 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/60">
                ID {demoUser.certificateId}
              </p>
              <p className="mb-6 font-body-md text-on-surface-variant">
                Tu acreditación oficial como parte de la producción cinematográfica de E7 Pictures.
              </p>
              <ButtonLink href="/account/certificate" className="w-full">
                Abrir certificado
              </ButtonLink>
            </section>

            {/* Upcoming events */}
            <section>
              <h2 className="mb-6 font-serif text-headline-md">Próximos eventos</h2>
              <ul className="space-y-4">
                {upcomingEvents.map((e) => (
                  <li key={e.title} className="flex gap-4 rounded-xl glass-panel p-5">
                    <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon name="event" />
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                        {e.type}
                      </span>
                      <p className="font-body-md text-on-surface">{e.title}</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant/60">
                        {e.date} · {e.location}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <Link
              href="/login"
              className="flex items-center justify-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/60 transition-colors hover:text-primary"
            >
              <Icon name="logout" className="text-base" />
              Cerrar sesión
            </Link>
          </aside>
        </div>
      </div>
    </AppShell>
  );
}
