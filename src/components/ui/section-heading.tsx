import { clsx } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        "mb-4 block font-label-sm text-label-sm uppercase tracking-widest text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={clsx(align === "center" && "text-center", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-serif text-headline-lg-mobile md:text-headline-lg">{title}</h2>
      {description && (
        <p
          className={clsx(
            "mt-4 font-body-md text-on-surface-variant",
            align === "center" ? "mx-auto max-w-xl" : "max-w-md"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
