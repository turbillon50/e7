import type { Metadata } from "next";
import Link from "next/link";
import { AuthLayout, Field } from "@/components/auth/auth-layout";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Crear cuenta",
  description: "Únete a la red de inversionistas creativos de E7 Pictures.",
};

export default function RegisterPage() {
  return (
    <AuthLayout
      eyebrow="Únete a la industria"
      title="Crea tu cuenta"
      image="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=70"
    >
      <form className="space-y-8" action="/participate">
        <Field label="Nombre completo" placeholder="Tu nombre" autoComplete="name" />
        <Field label="Correo" type="email" placeholder="tu@correo.com" autoComplete="email" />
        <Field label="Contraseña" type="password" placeholder="Crea una contraseña" autoComplete="new-password" />
        <label className="flex items-start gap-3 font-label-sm text-label-sm text-on-surface-variant">
          <input type="checkbox" className="mt-0.5 accent-primary" required />
          Acepto los términos de servicio y la política de privacidad de E7 Pictures.
        </label>
        <ButtonLink href="/participate" size="lg" className="w-full">
          Crear cuenta
        </ButtonLink>
      </form>

      <p className="mt-8 text-center font-body-md text-on-surface-variant">
        ¿Ya tienes cuenta?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Inicia sesión
        </Link>
      </p>
    </AuthLayout>
  );
}
