import { z } from "zod";

// Cantidades en Kg: permite "", null, undefined; convierte a number si hay valor
const kgQty = z
  .preprocess(
    (v) => (v === "" || v == null ? undefined : v),
    z.coerce.number().positive("Debe ser > 0")
  )
  .optional();

export const wasteSchema = z.object({
  organicWasteKg: kgQty, // Residuos orgánicos (restos de comida, plantas)
  recyclableWasteKg: kgQty, // Residuos reciclables (plástico, vidrio, papel)
  hazardousWasteKg: kgQty, // Residuos peligrosos (electrónicos, baterías)
  generalWasteKg: kgQty, // Residuos generales (no reciclables)
  incineratedWasteKg: kgQty, // Incineración: genera emisiones directas
});
