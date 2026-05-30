import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { QrCode } from "@/components/account/qr-code";
import { demoUser } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Certificado",
  description: "Certificado oficial de participación en E7 Pictures con verificación por QR.",
};

export default function CertificatePage() {
  const verifyUrl = `${site.url}/verify/${demoUser.certificateId}`;

  return (
    <AppShell>
      <div className="mx-auto max-w-3xl px-margin-mobile md:px-margin-desktop">
        <Link
          href="/account"
          className="mb-8 inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant transition-colors hover:text-primary"
        >
          <Icon name="arrow_back" className="text-base" />
          Mi cuenta
        </Link>

        {/* The certificate */}
        <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-br from-[#1c1b1b] via-surface to-surface-container-lowest p-8 md:p-14">
          <div className="grain-overlay absolute inset-0 opacity-[0.04]" aria-hidden />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />

          {/* Header */}
          <div className="relative flex items-start justify-between border-b border-outline-variant/20 pb-8">
            <div>
              <span className="font-serif text-headline-md uppercase tracking-widest text-primary">
                {site.name.toUpperCase()}
              </span>
              <p className="mt-1 font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-surface-variant/60">
                Certificate of Participation
              </p>
            </div>
            <Icon name="workspace_premium" filled className="text-5xl text-primary" />
          </div>

          {/* Body */}
          <div className="relative py-10 text-center">
            <p className="mb-2 font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-surface-variant/60">
              Se otorga a
            </p>
            <h1 className="mb-6 font-serif text-[40px] leading-tight text-on-surface md:text-display-lg">
              {demoUser.name}
            </h1>
            <p className="mx-auto max-w-md font-body-md leading-relaxed text-on-surface-variant">
              Por su valiosa participación como <strong className="text-primary">{demoUser.tier}</strong>{" "}
              en el desarrollo, producción y distribución del cine de {site.name}.
            </p>
          </div>

          {/* Footer */}
          <div className="relative flex flex-col items-center justify-between gap-8 border-t border-outline-variant/20 pt-8 md:flex-row">
            <div className="space-y-3 text-center md:text-left">
              <div>
                <span className="block font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/50">
                  Certificate ID
                </span>
                <span className="font-serif text-lg text-on-surface">{demoUser.certificateId}</span>
              </div>
              <div>
                <span className="block font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/50">
                  Emitido
                </span>
                <span className="font-serif text-lg text-on-surface">{demoUser.memberSince}</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-lg bg-on-surface p-2">
                <QrCode value={verifyUrl} size={120} />
              </div>
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant/50">
                Verificación segura
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button className="flex-1">
            <Icon name="download" className="text-base" />
            Descargar PDF
          </Button>
          <Button variant="secondary" className="flex-1">
            <Icon name="share" className="text-base" />
            Compartir
          </Button>
        </div>
        <p className="mt-4 text-center font-body-md text-on-surface-variant/60">
          La generación de PDF y el endpoint de verificación se activan en producción.
        </p>
      </div>
    </AppShell>
  );
}
