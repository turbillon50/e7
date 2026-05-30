"use client";

import { useMemo, useState } from "react";
import { tiers } from "@/lib/data";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { clsx, formatMXN } from "@/lib/utils";

export function TierSelector() {
  const [selected, setSelected] = useState<string>("cinematographer");
  const [custom, setCustom] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const activeTier = tiers.find((t) => t.id === selected);
  const amount = useMemo(() => {
    if (activeTier?.amount != null) return activeTier.amount;
    const parsed = Number(custom);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  }, [activeTier, custom]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier) => {
          const active = selected === tier.id;
          return (
            <button
              key={tier.id}
              type="button"
              onClick={() => setSelected(tier.id)}
              aria-pressed={active}
              className={clsx(
                "group relative flex h-full flex-col overflow-hidden rounded-xl p-8 text-left transition-all duration-300 glass-panel",
                active
                  ? "border-primary shadow-[0_0_0_1px_#f2ca50] ring-1 ring-primary"
                  : "border-outline-variant/10 hover:border-primary/40",
                tier.featured && !active && "bg-primary/5"
              )}
            >
              {tier.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-primary/20 px-3 py-1 font-label-sm text-[10px] uppercase tracking-widest text-primary">
                  Popular
                </span>
              )}
              <div className="mb-8">
                <Icon name={tier.icon} className="mb-4 block text-3xl text-primary" />
                <h3 className="mb-1 font-serif text-headline-md">{tier.name}</h3>
                <p className="font-label-sm text-label-sm uppercase tracking-tight text-on-surface-variant">
                  {tier.subtitle}
                </p>
              </div>
              <div className="mt-auto">
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="font-serif text-headline-lg text-primary">
                    {tier.amount != null ? `$${tier.amount}` : "$300+"}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">MXN</span>
                </div>
                <ul className="mb-2 space-y-3">
                  {tier.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-start gap-2 font-label-sm text-label-sm text-on-surface-variant/80"
                    >
                      <Icon name="check_circle" className="mt-0.5 text-[16px] text-primary" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          );
        })}
      </div>

      {/* Custom amount appears when Auteur tier is selected */}
      {activeTier?.amount == null && (
        <div className="mt-8 max-w-sm">
          <label htmlFor="custom-amount" className="mb-2 block font-label-sm text-label-sm uppercase text-on-surface-variant/60">
            Monto personalizado (MXN)
          </label>
          <input
            id="custom-amount"
            type="number"
            min={300}
            inputMode="numeric"
            placeholder="300+"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className="field-underline w-full pb-2 font-serif text-headline-md text-on-surface"
          />
        </div>
      )}

      {/* Sticky-ish summary / checkout */}
      <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-xl glass-panel p-6 md:flex-row md:p-8">
        <div>
          <span className="block font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/60">
            Tu participación
          </span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-serif text-headline-md text-primary">
              {amount > 0 ? formatMXN(amount) : "—"}
            </span>
            <span className="font-body-md text-on-surface-variant">· {activeTier?.name}</span>
          </div>
        </div>
        <Button
          size="lg"
          disabled={amount <= 0}
          onClick={() => setSubmitted(true)}
          className="w-full md:w-auto"
        >
          {submitted ? "¡Reservado! Te contactaremos" : "Continuar al pago"}
        </Button>
      </div>

      {submitted && (
        <p className="mt-4 text-center font-body-md text-on-surface-variant">
          <Icon name="info" className="mr-1 align-middle text-primary" />
          Demo: la pasarela de pago (Mercado Pago / Stripe) se conecta en producción. Tu intención
          de participación quedó registrada.
        </p>
      )}
    </div>
  );
}
