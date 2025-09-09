import { create } from "zustand";
import { appSchema, type AppData } from "./schemas";

type SectionKey = "general" | "transporte" | "comida" | "energia" | "resumen";

type AppState = {
  current: SectionKey;
  data: AppData;
  setSection: (s: SectionKey) => void;
  patch: <K extends keyof AppData>(k: K, partial: Partial<AppData[K]>) => void;
  isComplete: () => { ok: boolean; issues?: string[] };
};

const initial: AppData = {
  general: {
    tipoEvento: "",
    fecha: "",
    dias: 1,
    asistentes: 0,
    staff: 0,
    costoArbol: 35,
  },
  transporte: { kmPromedioAsistente: 0, factorTransporte: 0.15 },
  comida: { comidasPorDia: 0, factorComida: 1.2 },
  energia: { kwhTotales: 0, factorEnergia: 0.455 },
};

export const useApp = create<AppState>((set, get) => ({
  current: "general",
  data: initial,
  setSection: (s) => set({ current: s }),
  patch: (k, partial) =>
    set(({ data }) => ({ data: { ...data, [k]: { ...data[k], ...partial } } })),
  isComplete: () => {
    const parse = appSchema.safeParse(get().data);
    if (parse.success) return { ok: true };
    const issues = parse.error.errors.map(
      (e) => `${e.path.join(".")}: ${e.message}`
    );
    return { ok: false, issues };
  },
}));
