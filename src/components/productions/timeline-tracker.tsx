import { PRODUCTION_STAGES, type ProductionStatus } from "@/lib/data";
import { clsx } from "@/lib/utils";

export function TimelineTracker({
  status,
  progress,
}: {
  status: ProductionStatus;
  progress: number;
}) {
  const currentIndex = PRODUCTION_STAGES.indexOf(status);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
        <span>STATUS: {status.toUpperCase()}</span>
        <span className="text-primary">{progress}% COMPLETO</span>
      </div>
      <div className="timeline-line relative w-full">
        <div className="timeline-active absolute left-0 top-0" style={{ width: `${progress}%` }} />
      </div>
      <div className="grid grid-cols-6 gap-1">
        {PRODUCTION_STAGES.map((stage, i) => (
          <span
            key={stage}
            className={clsx(
              "text-[9px] font-bold uppercase leading-tight",
              i <= currentIndex ? "text-primary" : "text-on-surface-variant/40"
            )}
          >
            {stage}
          </span>
        ))}
      </div>
    </div>
  );
}
