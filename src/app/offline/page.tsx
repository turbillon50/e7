import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export const metadata = { title: "Sin conexión" };

export default function OfflinePage() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center px-margin-mobile text-center">
      <Icon name="wifi_off" className="mb-6 text-6xl text-primary/40" />
      <span className="mb-2 font-label-sm text-label-sm uppercase tracking-[0.3em] text-primary">
        Modo offline
      </span>
      <h1 className="mb-4 font-serif text-headline-lg text-on-surface">Sin conexión</h1>
      <p className="mb-10 max-w-md font-body-lg text-on-surface-variant">
        No hay conexión a internet. Algunas escenas guardadas siguen disponibles; reconéctate para
        ver el contenido más reciente.
      </p>
      <ButtonLink href="/">Reintentar</ButtonLink>
    </div>
  );
}
