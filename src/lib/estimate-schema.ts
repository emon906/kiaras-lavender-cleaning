import { z } from "zod";

// Shared by the contact form (client) and the public API route (server).
export const estimateSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[+()\d][\d\s().-]{5,19}$/, "Please enter a valid phone number")
    .max(20),
  email: z.union([z.string().trim().email("Please enter a valid email").max(255), z.literal("")]),
  service: z.string().trim().min(1, "Please choose a service").max(120),
  message: z.union([z.string().trim().max(1000), z.literal("")]),
});

export type EstimateInput = z.infer<typeof estimateSchema>;
