import { z } from "zod";

/** 1) Esquemas por sección */
export const generalInfoSchema = z.object({
  tipoEvento: z.string().min(1, "Requerido"),
  fecha: z.string().min(1, "Requerido"),
  dias: z.coerce.number().int().min(1, ">= 1"),
  asistentes: z.coerce.number().int().min(0),
  staff: z.coerce.number().int().min(0),
  costoArbol: z.coerce.number().min(0),
});

export const transporteSchema = z.object({
  kmPromedioAsistente: z.coerce.number().min(0),
  factorTransporte: z.coerce.number().min(0), // kg CO2e/km
});

export const comidaSchema = z.object({
  comidasPorDia: z.coerce.number().int().min(0),
  factorComida: z.coerce.number().min(0), // kg CO2e/porción
});

export const energiaSchema = z.object({
  kwhTotales: z.coerce.number().min(0),
  factorEnergia: z.coerce.number().min(0), // kg CO2e/kWh
});

/** 2) Esquema total */
export const appSchema = z.object({
  general: generalInfoSchema,
  transporte: transporteSchema,
  comida: comidaSchema,
  energia: energiaSchema,
});
export type AppData = z.infer<typeof appSchema>;

/** 3) Cálculos */
export function calcularResultados(d: AppData) {
  const t =
    d.transporte.kmPromedioAsistente *
    d.general.asistentes *
    d.transporte.factorTransporte;
  const c =
    d.comida.comidasPorDia *
    d.general.dias *
    d.general.asistentes *
    d.comida.factorComida;
  const e = d.energia.kwhTotales * d.energia.factorEnergia;

  const totalKg = t + c + e;
  const arboles = Math.ceil(totalKg / 25); // sup: 25 kg CO2e compensa un árbol/año (ajusta a tu modelo)
  const costo = arboles * d.general.costoArbol;

  return { tKg: t, cKg: c, eKg: e, totalKg, arboles, costo };
}
