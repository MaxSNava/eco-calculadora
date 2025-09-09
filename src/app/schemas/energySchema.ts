import { z } from "zod";

const energyEntry = z
  .object({
    quantityUnits: z
      .preprocess(
        (v) => (v === "" || v == null ? undefined : v),
        z.coerce.number().int().min(1, ">= 1")
      )
      .optional(),
    hoursOfUse: z
      .preprocess(
        (v) => (v === "" || v == null ? undefined : v),
        z.coerce.number().int().min(1, ">= 1")
      )
      .optional(),
  })
  .superRefine((val, ctx) => {
    const anyFilled = val.quantityUnits != null || val.hoursOfUse != null;
    if (anyFilled) {
      if (val.quantityUnits == null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Requerido cuando hay distancia",
          path: ["numPersons"],
        });
      }
      if (val.hoursOfUse == null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Requerido cuando hay personas",
          path: ["distanceKm"],
        });
      }
    }
  });

export const energySchema = z.object({
  minisplit1ton: energyEntry, // Minisplit 1 tonelada
  minisplit2ton: energyEntry, // Minisplit 2 toneladas
  minisplit3ton: energyEntry, // Minisplit 3 toneladas
  gasStove: energyEntry, // Estufa de gas (metano)
  firewoodStove3k: energyEntry, // Estufa de leña 3k
  ledBulb10w: energyEntry, // Foco LED (10W)
  ledScreen55: energyEntry, // Pantalla LED (55")
  smallSpeakersPair: energyEntry, // Bocina pequeña (par)
  largeSpeakerBaffle: energyEntry, // Bocina grande (tipo baffle)
  eventLighting: energyEntry, // Iluminación de evento
  microphoneConsole: energyEntry, // Micrófono y consola
  waterCooler: energyEntry, // Enfriador de agua
  electricOvenMicrowave: energyEntry, // Horno eléctrico / microondas
  beverageCooler: energyEntry, // Enfriador de bebidas
  laptop: energyEntry, // Computadora portátil
  cameraAudio: energyEntry, // Cámara + equipo audición
  inflatableMotor: energyEntry, // Inflables (con motor)
});
