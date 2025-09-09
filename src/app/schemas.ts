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
  treeCost: z.coerce.number().min(0),
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

/** 3) Cálculos */
/** TODO cambiar a otro archivo */
export function calcularResultados(d: AppData) {
  const t = 1 + 1;
  const f = 1 + 1;
  const e = 1 + 1;
  const m = 1 + 1;
  const w = 1 + 1;

  const totalKg = t + f + e + m + w;
  const arboles = Math.ceil(totalKg / 25); // sup: 25 kg CO2e compensa un árbol/año (ajusta a tu modelo)
  const costo = arboles * d.general.treeCost;

  return { tKg: t, fKg: f, eKg: e, mKg: m, wKg: w, totalKg, arboles, costo };
}
