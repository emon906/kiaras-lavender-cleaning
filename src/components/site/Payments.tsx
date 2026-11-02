import { CreditCard } from "lucide-react";

import { payments } from "@/config/site";
import { ServiceIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Payments() {
  return (
    <section id="payments" className="section-pad">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Easy Payment"
          title={
            <>
              Pay Your Way, <span className="text-gradient-royal italic">Effortlessly</span>
            </>
          }
          description="Whichever is easiest for you — tap, app, or invoice. Simple, secure, and always convenient."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {payments.map((method, index) => (
            <Reveal key={method.name} delay={index * 80}>
              <div className="card-luxe flex h-full flex-col items-center gap-4 rounded-3xl p-6 text-center sm:p-7">
                <span className="gold-ring flex size-14 items-center justify-center rounded-full bg-secondary">
                  <ServiceIcon icon={method.icon} className="size-6 text-royal" />
                </span>
                <span className="font-display text-xl font-semibold tracking-tight">{method.name}</span>
                <span className="text-sm leading-relaxed text-muted-foreground">{method.detail}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <CreditCard className="size-4 text-gold" aria-hidden="true" />
            Prefer to talk it through first? Call{" "}
            <a href="tel:+14232877090" className="font-semibold text-royal underline-offset-4 hover:underline">
              (423) 287-7090
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
