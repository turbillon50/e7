"use client";

import { useEffect } from "react";
import { Button, ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Hook for an error-reporting service (e.g. Sentry) in production.
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center px-margin-mobile text-center">
      <div className="grain-overlay fixed inset-0" aria-hidden />
      <Icon name="error" className="mb-6 text-6xl text-error/60" />
      <span className="mb-2 font-label-sm text-label-sm uppercase tracking-[0.3em] text-primary">
        Corte inesperado
      </span>
      <h1 className="mb-4 font-serif text-headline-lg text-on-surface">Algo salió de cuadro</h1>
      <p className="mb-10 max-w-md font-body-lg text-on-surface-variant">
        Ocurrió un error al renderizar esta escena. Intenta de nuevo o vuelve al inicio.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button onClick={reset}>Reintentar</Button>
        <ButtonLink href="/" variant="secondary">
          Volver al inicio
        </ButtonLink>
      </div>
    </div>
  );
}
