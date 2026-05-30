/**
 * Integration seams for E7 Pictures.
 *
 * Each block reads its config from the environment and exposes an `enabled`
 * flag plus a thin place to wire the real SDK. Nothing here makes a network
 * call yet — the UI runs fully on mock data (see `lib/data.ts`) until these
 * are connected. This keeps the demo stable while documenting exactly what a
 * production wire-up needs.
 */

const env = (key: string) => process.env[key] ?? "";

/** Authentication — Clerk. */
export const auth = {
  enabled: Boolean(env("NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY")),
  signInUrl: env("NEXT_PUBLIC_CLERK_SIGN_IN_URL") || "/login",
  signUpUrl: env("NEXT_PUBLIC_CLERK_SIGN_UP_URL") || "/register",
  // TODO: wrap RootLayout in <ClerkProvider> and add middleware.ts once enabled.
};

/** Database — Neon (PostgreSQL). */
export const db = {
  enabled: Boolean(env("DATABASE_URL")),
  url: env("DATABASE_URL"),
  // TODO: connect with `@neondatabase/serverless` or Prisma + the pooled URL.
};

/** Transactional email — Resend. */
export const email = {
  enabled: Boolean(env("RESEND_API_KEY")),
  from: env("RESEND_FROM_EMAIL") || "hola@e7pictures.mx",
  // TODO: `new Resend(process.env.RESEND_API_KEY)` for receipts & certificates.
};

/** Payments — Mercado Pago (primary, MXN) and Stripe (international). */
export const payments = {
  mercadoPago: {
    enabled: Boolean(env("MERCADOPAGO_ACCESS_TOKEN")),
    publicKey: env("NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY"),
  },
  stripe: {
    enabled: Boolean(env("STRIPE_SECRET_KEY")),
    publishableKey: env("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"),
  },
  // TODO: create a checkout preference (MP) or PaymentIntent (Stripe) from a
  // selected tier, then confirm via webhook and persist to the DB.
};

/** QR — used today client-side for certificate verification (see QrCode). */
export const qr = { enabled: true };
