import { createClient } from "@supabase/supabase-js";
import { createFileRoute } from "@tanstack/react-router";

import { estimateSchema } from "@/lib/estimate-schema";
import type { Database } from "@/integrations/supabase/types";

// Public estimate intake: anyone on the site may submit, so every field is
// validated here before it reaches the database (anon INSERT policy applies).
export const Route = createFileRoute("/api/public/estimate")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid request." }, { status: 400 });
        }

        const parsed = estimateSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json({ error: "Please check your details and try again." }, { status: 422 });
        }

        const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
        const supabase = createClient<Database>(process.env["SUPABASE_URL"]!, key, {
          auth: { persistSession: false },
          // Opaque sb_ keys aren't JWTs; send apikey only.
          global: {
            fetch: (input, init) => {
              const headers = new Headers(init?.headers);
              if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
                headers.delete("Authorization");
              }
              headers.set("apikey", key);
              return fetch(input, { ...init, headers });
            },
          },
        });

        const { error } = await supabase.from("estimate_requests").insert({
          name: parsed.data.name,
          phone: parsed.data.phone,
          email: parsed.data.email || null,
          service: parsed.data.service,
          message: parsed.data.message || null,
        });

        if (error) {
          console.error("estimate_requests insert failed:", error.message);
          return Response.json(
            { error: "We couldn't save your request — please call us at (423) 287-7090." },
            { status: 500 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
