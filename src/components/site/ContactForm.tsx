import { useState, type FormEvent } from "react";
import { BadgeCheck, ChevronDown, LoaderCircle, Phone, Sparkles } from "lucide-react";

import { serviceOptions, site } from "@/config/site";
import { estimateSchema, type EstimateInput } from "@/lib/estimate-schema";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type FieldErrors = Partial<Record<keyof EstimateInput, string>>;

const emptyForm: EstimateInput = { name: "", phone: "", email: "", service: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<EstimateInput>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const set = (field: keyof EstimateInput) => (value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const parsed = estimateSchema.safeParse(form);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof EstimateInput;
        if (!next[field]) next[field] = issue.message;
      }
      setErrors(next);
      return;
    }

    setStatus("sending");
    setServerError("");
    try {
      const res = await fetch("/api/public/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }
      setForm(emptyForm);
      setStatus("sent");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const inputClass = (field: keyof EstimateInput) =>
    `w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-royal/50 focus:outline-none ${
      errors[field] ? "border-destructive" : "border-input"
    }`;

  return (
    <section id="contact" className="dark-section section-pad relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/4 -left-32 size-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--pink), transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading
            dark
            align="left"
            eyebrow="Free Estimate"
            title={
              <>
                Begin Your <span className="text-gradient-gold italic">Welcome Clean</span>
              </>
            }
            description={`Tell us about your space and we'll be in touch. First-time clients receive ${site.offer.name} — your first week of service free on recurring plans.`}
          />

          <Reveal delay={150} className="mt-10 space-y-4">
            <div className="glass-panel gold-ring flex items-center gap-4 rounded-2xl p-5">
              <span className="flex size-12 items-center justify-center rounded-full bg-gold/15">
                <Phone className="size-5 text-gold" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs tracking-[0.24em] text-white/60 uppercase">Prefer to call?</p>
                <a href={site.phoneHref} className="font-display text-2xl text-white transition-colors hover:text-gold">
                  {site.phone}
                </a>
              </div>
            </div>
            <div className="glass-panel flex items-start gap-4 rounded-2xl p-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold/15">
                <BadgeCheck className="size-5 text-gold" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-medium text-white">{site.offer.note}</p>
                <p className="mt-1 text-sm text-white/60">{site.serviceArea}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="reveal-right" delay={120}>
          {status === "sent" ? (
            <div className="rounded-[2rem] bg-card p-10 text-center shadow-[var(--shadow-luxe)] sm:p-14">
              <span className="gold-ring mx-auto flex size-16 items-center justify-center rounded-full bg-secondary">
                <Sparkles className="size-7 text-royal" aria-hidden="true" />
              </span>
              <h3 className="font-display mt-7 text-3xl font-medium">Request received</h3>
              <p className="mt-3 text-muted-foreground">
                Thank you — we'll reach out shortly to schedule your estimate. Need us sooner? Call{" "}
                <a href={site.phoneHref} className="font-semibold text-royal">
                  {site.phone}
                </a>
                .
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="btn-royal mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-[2rem] bg-card p-7 shadow-[var(--shadow-luxe)] sm:p-10"
              aria-label="Estimate request form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="estimate-name" className="mb-2 block text-xs font-semibold tracking-[0.18em] text-foreground/70 uppercase">
                    Name *
                  </label>
                  <input
                    id="estimate-name"
                    value={form.name}
                    onChange={(e) => set("name")(e.target.value)}
                    className={inputClass("name")}
                    placeholder="Your name"
                    autoComplete="name"
                    maxLength={100}
                  />
                  {errors.name ? <p className="mt-1.5 text-xs text-destructive">{errors.name}</p> : null}
                </div>
                <div>
                  <label htmlFor="estimate-phone" className="mb-2 block text-xs font-semibold tracking-[0.18em] text-foreground/70 uppercase">
                    Phone *
                  </label>
                  <input
                    id="estimate-phone"
                    value={form.phone}
                    onChange={(e) => set("phone")(e.target.value)}
                    className={inputClass("phone")}
                    placeholder="(423) 555-0100"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={20}
                  />
                  {errors.phone ? <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p> : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="estimate-email" className="mb-2 block text-xs font-semibold tracking-[0.18em] text-foreground/70 uppercase">
                  Email <span className="text-muted-foreground/70">(optional)</span>
                </label>
                <input
                  id="estimate-email"
                  value={form.email}
                  onChange={(e) => set("email")(e.target.value)}
                  className={inputClass("email")}
                  placeholder="you@example.com"
                  inputMode="email"
                  autoComplete="email"
                  maxLength={255}
                />
                {errors.email ? <p className="mt-1.5 text-xs text-destructive">{errors.email}</p> : null}
              </div>

              <div className="mt-5">
                <label htmlFor="estimate-service" className="mb-2 block text-xs font-semibold tracking-[0.18em] text-foreground/70 uppercase">
                  Service Needed *
                </label>
                <div className="relative">
                  <select
                    id="estimate-service"
                    value={form.service}
                    onChange={(e) => set("service")(e.target.value)}
                    className={`${inputClass("service")} appearance-none pr-10 ${form.service ? "" : "text-muted-foreground/70"}`}
                  >
                    <option value="" disabled>
                      Choose a service…
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                </div>
                {errors.service ? <p className="mt-1.5 text-xs text-destructive">{errors.service}</p> : null}
              </div>

              <div className="mt-5">
                <label htmlFor="estimate-message" className="mb-2 block text-xs font-semibold tracking-[0.18em] text-foreground/70 uppercase">
                  Tell us about your space <span className="text-muted-foreground/70">(optional)</span>
                </label>
                <textarea
                  id="estimate-message"
                  value={form.message}
                  onChange={(e) => set("message")(e.target.value)}
                  className={`${inputClass("message")} min-h-28 resize-y`}
                  placeholder="Rooms, pets, anything we should know…"
                  maxLength={1000}
                />
                {errors.message ? <p className="mt-1.5 text-xs text-destructive">{errors.message}</p> : null}
              </div>

              {status === "error" && serverError ? (
                <p role="alert" className="mt-5 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  {serverError}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-gold mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold tracking-wide disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Sparkles className="size-5" aria-hidden="true" />
                    Request My Free Estimate
                  </>
                )}
              </button>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                No spam, ever — we only use your details to prepare your estimate.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
