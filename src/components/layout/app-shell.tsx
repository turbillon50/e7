import { TopNav } from "./top-nav";
import { BottomNav } from "./bottom-nav";
import { Footer } from "./footer";

/**
 * Shared app frame: fixed top nav, mobile bottom tab bar, and footer.
 * `padded` adds the standard top offset for inner pages (the landing page
 * manages its own full-bleed hero, so it opts out).
 */
export function AppShell({
  children,
  padded = true,
  showFooter = true,
}: {
  children: React.ReactNode;
  padded?: boolean;
  showFooter?: boolean;
}) {
  return (
    <>
      <TopNav />
      <main className={padded ? "min-h-screen pt-24 pb-28 md:pb-16" : "pb-20 md:pb-0"}>
        {children}
      </main>
      {showFooter && <Footer />}
      <div className="h-20 md:hidden" aria-hidden />
      <BottomNav />
    </>
  );
}
