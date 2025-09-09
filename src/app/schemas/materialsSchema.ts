import { z } from "zod";

// Para medidas en cm (permite "" pero convierte a número si hay valor)
const dimension = z
  .preprocess(
    (v) => (v === "" || v == null ? undefined : v),
    z.coerce.number().positive("Debe ser > 0")
  )
  .optional();

// Para cantidades
const qty = z
  .preprocess(
    (v) => (v === "" || v == null ? undefined : v),
    z.coerce.number().positive("Debe ser > 0")
  )
  .optional();

// Fila de cálculo de área
const areaRow = z.object({
  measureA: dimension,
  measureB: dimension,
  total: z.number().nonnegative().optional(), // calculado
});

// Fila de cálculo de hojas (papel)
const paperRow = z.object({
  amount: qty, // Cantidad
  capacity: qty, // ¿Cuántos caben en?
  total: z.number().nonnegative().optional(),
});

export const materialsCalcSchema = z.object({
  pvcCanvas: z.array(areaRow), // Lona de PVC
  cardboard: z.array(areaRow), // Cartón
  rigidPlastic: z.array(areaRow), // Plástico rígido
  paper: z.array(paperRow), // Papel
});

const articleRow = z.object({
  name: z.string(), // Ej. "Lona de PVC (impresa)"
  quantity: qty, // Cantidad
  unit: z.string().optional(), // Ej. "M2", "Kg", "Pzas"
});

export const articlesSchema = z.array(articleRow);

export const materialsSchema = z.object({
  calc: materialsCalcSchema,
  articles: articlesSchema,
});
