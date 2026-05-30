"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav, site } from "@/lib/site";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";
import { clsx } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50 border-b border-outline-variant/15">
      <div className="mx-auto flex max-w-frame items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label={site.name}>
            <Logo height={30} />
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "relative font-label-sm text-label-sm uppercase transition-colors",
                  isActive(pathname, item.href)
                    ? "text-primary after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-primary"
                    : "text-on-surface-variant hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/participate"
            className="hidden rounded bg-primary px-5 py-2 font-label-sm text-label-sm uppercase tracking-widest text-on-primary transition hover:bg-primary-fixed md:inline-flex"
          >
            Participar
          </Link>
          <Link
            href="/account"
            aria-label="Notificaciones"
            className="p-2 text-primary transition-opacity hover:opacity-80"
          >
            <Icon name="notifications" />
          </Link>
          <button
            aria-label="Menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-primary transition-opacity hover:opacity-80 md:hidden"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="border-t border-outline-variant/15 bg-surface/95 px-margin-mobile py-4 md:hidden">
          {[...primaryNav, { label: "Participar", href: "/participate", icon: "redeem" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={clsx(
                "flex items-center gap-3 py-3 font-label-sm text-label-sm uppercase",
                isActive(pathname, item.href) ? "text-primary" : "text-on-surface-variant"
              )}
            >
              <Icon name={item.icon} className="text-xl" />
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
