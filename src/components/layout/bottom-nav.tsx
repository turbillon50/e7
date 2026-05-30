"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/site";
import { Icon } from "@/components/ui/icon";
import { clsx } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="glass-nav pb-safe fixed inset-x-0 bottom-0 z-50 flex h-20 items-center justify-around border-t border-outline-variant/10 px-2 shadow-2xl md:hidden">
      {primaryNav.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "flex flex-col items-center justify-center gap-1 transition-colors",
              active ? "text-primary" : "text-on-surface-variant/60"
            )}
          >
            <Icon name={item.icon} filled={active} />
            <span className="font-label-sm text-[10px]">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
