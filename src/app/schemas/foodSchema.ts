import { z } from "zod";

// Helper para cantidades opcionales que vienen de inputs tipo text
const qty = z
  .preprocess(
    (v) => (v === "" || v == null ? undefined : v),
    z.coerce.number().int().min(1, "Debe ser un entero ≥ 1")
  )
  .optional();

export const foodSchema = z.object({
  // Tipo de vajilla
  dishwareType: z.enum(["disposable", "reusable"]), // "Vajilla desechable" | "Vajilla reutilizable"

  // Bebidas (piezas)
  drinks: z.object({
    alcohol: qty, // Alcohol (cerveza, vino, etc.)
    water500ml: qty, // Botella de agua (500 ml)
    soda500ml: qty, // Refrescos (vaso o botella de 500 ml)
  }),

  // Comida (piezas)
  food: z.object({
    mixedMenu: qty, // Menú convencional (mixto)
    veganMenu: qty, // Menú vegano
    vegetarianMenu: qty, // Menú vegetariano
  }),
});
