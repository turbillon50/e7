import type { Metadata } from "next";
import Link from "next/link";
import { AuthLayout, Field } from "@/components/auth/auth-layout";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Accede a tu portal de accionista de E7 Pictures.",
};

export default function LoginPage() {
  return (
    <AuthLayout
      eyebrow="Portal de accionistas"
      title="Bienvenido de vuelta"
      image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=70"
    >
      <form className="space-y-8" action="/account">
        <Field label="Correo" type="email" placeholder="tu@correo.com" autoComplete="email" />
        <Field label="Contraseña" type="password" placeholder="••••••••" autoComplete="current-password" />
        <div className="flex items-center justify-between font-label-sm text-label-sm">
          <label className="flex items-center gap-2 text-on-surface-variant">
            <input type="checkbox" className="accent-primary" /> Recuérdame
          </label>
          <Link href="#" className="text-primary hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <ButtonLink href="/account" size="lg" className="w-full">
          Entrar
        </ButtonLink>
      </form>

      <div className="my-8 flex items-center gap-4 text-on-surface-variant/40">
        <span className="h-px flex-1 bg-outline-variant/30" />
        <span className="font-label-sm text-label-sm uppercase">o</span>
        <span className="h-px flex-1 bg-outline-variant/30" />
      </div>

      <button className="flex w-full items-center justify-center gap-3 rounded border border-outline-variant py-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface transition-colors hover:bg-white/5">
        <Icon name="g_translate" className="text-base" />
        Continuar con Google
      </button>

      <p className="mt-8 text-center font-body-md text-on-surface-variant">
        ¿No tienes cuenta?{" "}
        <Link href="/register" className="text-primary hover:underline">
          Regístrate
        </Link>
      </p>
    </AuthLayout>
  );
}
