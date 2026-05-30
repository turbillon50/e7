import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center px-margin-mobile text-center">
      <div className="grain-overlay fixed inset-0" aria-hidden />
      <Icon name="theaters" className="mb-6 text-6xl text-primary/40" />
      <span className="mb-2 font-label-sm text-label-sm uppercase tracking-[0.3em] text-primary">
        Escena no encontrada
      </span>
      <h1 className="mb-4 font-serif text-[64px] leading-none text-on-surface md:text-[96px]">404</h1>
      <p className="mb-10 max-w-md font-body-lg text-on-surface-variant">
        La toma que buscas se quedó en el cuarto de edición. Volvamos al set principal.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <ButtonLink href="/">Volver al inicio</ButtonLink>
        <ButtonLink href="/productions" variant="secondary">
          Ver producciones
        </ButtonLink>
      </div>
    </div>
  );
}
