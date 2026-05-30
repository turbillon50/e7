import { Icon } from "./icon";
import { ButtonLink } from "./button";

export function EmptyState({
  icon = "movie",
  title,
  description,
  action,
}: {
  icon?: string;
  title: string;
  description: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="glass-panel flex flex-col items-center rounded-xl px-8 py-16 text-center">
      <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-outline-variant/30">
        <Icon name={icon} className="text-3xl text-primary" />
      </span>
      <h3 className="font-serif text-headline-md">{title}</h3>
      <p className="mt-3 max-w-sm font-body-md text-on-surface-variant">{description}</p>
      {action && (
        <ButtonLink href={action.href} className="mt-8">
          {action.label}
        </ButtonLink>
      )}
    </div>
  );
}
