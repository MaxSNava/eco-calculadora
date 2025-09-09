import { z } from "zod";

const transportEntry = z
  .object({
    // Permite "", null, undefined y los convierte/filtra
    numPersons: z
      .preprocess(
        (v) => (v === "" || v == null ? undefined : v),
        z.coerce.number().int().min(1, ">= 1")
      )
      .optional(),
    distanceKm: z
      .preprocess(
        (v) => (v === "" || v == null ? undefined : v),
        z.coerce.number().int().min(1, ">= 1")
      )
      .optional(),
  })
  .superRefine((val, ctx) => {
    const anyFilled = val.numPersons != null || val.distanceKm != null;
    if (anyFilled) {
      if (val.numPersons == null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Requerido cuando hay distancia",
          path: ["numPersons"],
        });
      }
      if (val.distanceKm == null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Requerido cuando hay personas",
          path: ["distanceKm"],
        });
      }
    }
  });

export const transportSchema = z.object({
  truck: transportEntry, // Camión
  planeDomestic: transportEntry, // Avión nacional
  planeInternational: transportEntry, // Avión internacional
  carICE: transportEntry, // Automóvil tradicional
  carEV: transportEntry, // Automóvil eléctrico
  bikeWalk: transportEntry, // Bicicleta o caminando
  taxiUber: transportEntry, // Taxi o Uber
  train: transportEntry, // Tren
  metro: transportEntry, // Metro
});
