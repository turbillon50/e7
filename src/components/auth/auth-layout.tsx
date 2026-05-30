import Link from "next/link";
import { CinematicImage } from "@/components/ui/cinematic-image";
import { site } from "@/lib/site";

/** Split-screen cinematic auth scaffold shared by login & register. */
export function AuthLayout({
  eyebrow,
  title,
  children,
  image,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  image: string;
}) {
  return (
    <div className="grid min-h-[100svh] grid-cols-1 lg:grid-cols-2">
      {/* Visual side */}
      <div className="relative hidden lg:block">
        <CinematicImage src={image} alt="" className="absolute inset-0 h-full w-full" priority imgClassName="opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-x-12 bottom-12">
          <h2 className="font-serif text-headline-lg italic text-on-surface">
            “No solo hacemos películas; construimos un estudio del pueblo, para las historias que
            importan.”
          </h2>
        </div>
      </div>

      {/* Form side */}
      <div className="flex flex-col justify-center px-margin-mobile py-12 md:px-20">
        <div className="mx-auto w-full max-w-md">
          <Link
            href="/"
            className="mb-12 inline-block font-serif text-headline-md uppercase tracking-widest text-primary"
          >
            {site.name.toUpperCase()}
          </Link>
          <span className="mb-3 block font-label-sm text-label-sm uppercase tracking-widest text-primary">
            {eyebrow}
          </span>
          <h1 className="mb-8 font-serif text-headline-lg-mobile text-on-surface">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}

export function Field({
  label,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/60">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="field-underline w-full pb-3 font-body-md text-on-surface placeholder:text-on-surface-variant/30"
      />
    </label>
  );
}
