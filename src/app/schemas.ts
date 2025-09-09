import { z } from "zod";

/** 1) Esquemas por sección */
export const generalSchema = z.object({
  eventeType: z.string().min(1, "Requerido"),
  eventDay: z.date(),
  eventDurationDay: z.coerce.number().int().min(1, ">= 1"),
  assistants: z.coerce.number().int().min(0),
  staff: z.coerce.number().int().min(0),
  treeCost: z.coerce.number().min(0),
});

export const transportSchema = z.object({
  // TODO
});

export const foodSchema = z.object({
  // TODO
});

export const energySchema = z.object({
  // TODO
});

export const materialsSchema = z.object({
  // TODO
});

export const wasteSchema = z.object({
  // TODO
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
