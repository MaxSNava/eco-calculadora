import { z } from "zod";
import { transportSchema } from "./schemas/transportSchema";
import { foodSchema } from "./schemas/foodSchema";
import { energySchema } from "./schemas/energySchema";
import { materialsSchema } from "./schemas/materialsSchema";
import { wasteSchema } from "./schemas/wasteSchema";

/** 1) Esquemas por sección */
export const generalSchema = z.object({
  eventType: z.string().min(1, "Requerido"),
  eventDay: z.coerce.date(),
  eventDurationDay: z.coerce.number().int().min(1, ">= 1"),
  assistants: z.coerce.number().int().min(0),
  staff: z.coerce.number().int().min(0),
});

/** 2) Esquema total */
export const appSchema = z.object({
  general: generalSchema,
  transport: transportSchema,
  food: foodSchema,
  energy: energySchema,
  material: materialsSchema,
  waste: wasteSchema,
});
export type AppData = z.infer<typeof appSchema>;
