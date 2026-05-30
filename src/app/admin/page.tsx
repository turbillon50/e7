import type { Metadata } from "next";
import { AppShell } from "@/components/layout/app-shell";
import { Icon } from "@/components/ui/icon";
import { ButtonLink } from "@/components/ui/button";
import { productions, stats } from "@/lib/data";
import { clsx } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Administración",
  description: "Panel interno de E7 Pictures: producciones, recaudación y accionistas.",
  robots: { index: false, follow: false },
};

const statusColor: Record<string, string> = {
  Development: "text-on-surface-variant",
  "Pre-Prod": "text-secondary",
  Filming: "text-primary",
  "Post-Prod": "text-primary-fixed",
  Distribution: "text-tertiary",
  Premiere: "text-primary",
};

export default function AdminPage() {
  return (
    <AppShell showFooter={false}>
      <div className="mx-auto max-w-frame px-margin-mobile md:px-margin-desktop">
        <header className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Production Office
            </span>
            <h1 className="font-serif text-headline-lg-mobile md:text-headline-lg">Panel de administración</h1>
          </div>
          <ButtonLink href="/productions">
            <Icon name="add" className="text-base" />
            Nueva producción
          </ButtonLink>
        </header>

        {/* KPI cards */}
        <section className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl glass-panel p-6">
              <span className="block font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/60">
                {s.label}
              </span>
              <span className="mt-2 block font-serif text-display-lg text-primary md:text-headline-lg">
                {s.value}
              </span>
            </div>
          ))}
        </section>

        {/* Productions table */}
        <section className="overflow-hidden rounded-xl glass-panel">
          <div className="flex items-center justify-between border-b border-outline-variant/10 p-6">
            <h2 className="font-serif text-headline-md">Producciones</h2>
            <span className="font-label-sm text-label-sm uppercase text-on-surface-variant/60">
              {productions.length} activas
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-outline-variant/10 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/50">
                  <th className="p-5 font-semibold">Título</th>
                  <th className="p-5 font-semibold">Género</th>
                  <th className="p-5 font-semibold">Estado</th>
                  <th className="p-5 font-semibold">Progreso</th>
                  <th className="p-5 font-semibold">Dirección</th>
                </tr>
              </thead>
              <tbody>
                {productions.map((p) => (
                  <tr
                    key={p.slug}
                    className="border-b border-outline-variant/5 transition-colors last:border-0 hover:bg-white/[0.02]"
                  >
                    <td className="p-5 font-medium text-on-surface">{p.title}</td>
                    <td className="p-5 font-body-md text-on-surface-variant">{p.genre}</td>
                    <td className={clsx("p-5 font-label-sm text-label-sm uppercase", statusColor[p.status])}>
                      {p.status}
                    </td>
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="h-1.5 w-24 overflow-hidden rounded-full bg-surface-variant">
                          <div className="h-full bg-primary" style={{ width: `${p.progress}%` }} />
                        </div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {p.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="p-5 font-body-md text-on-surface-variant">{p.director}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p className="mt-6 font-body-md text-on-surface-variant/60">
          <Icon name="lock" className="mr-1 align-middle text-primary" />
          Vista de demostración. En producción este panel queda detrás de control de acceso por rol
          (Clerk) y conectado a la base de datos (Neon).
        </p>
      </div>
    </AppShell>
  );
}
