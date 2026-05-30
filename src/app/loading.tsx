export default function Loading() {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <span className="font-serif text-headline-md uppercase tracking-[0.3em] text-primary">
          E7 PICTURES
        </span>
        <div className="h-px w-40 overflow-hidden bg-surface-variant">
          <div className="h-full w-1/3 animate-[fadeIn_1.2s_ease-in-out_infinite] bg-primary" />
        </div>
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/50">
          Cargando escena…
        </span>
      </div>
    </div>
  );
}
