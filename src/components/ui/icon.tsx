import { clsx } from "@/lib/utils";

/** Material Symbols icon wrapper. */
export function Icon({
  name,
  filled,
  className,
  style,
}: {
  name: string;
  filled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden
      className={clsx("material-symbols-outlined", filled && "filled", className)}
      style={style}
    >
      {name}
    </span>
  );
}
