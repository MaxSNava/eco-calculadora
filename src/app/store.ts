import { create } from "zustand";
import { appSchema, type AppData } from "./schemas";
import type { CompletionStatus, SectionKey } from "./types";
import { initial } from "./const";

type AppState = {
  current: SectionKey;
  data: AppData;
  // funcion para cambiar de seccion
  setSection: (s: SectionKey) => void;
  // funciones para actualizar la data
  updateGeneralData: (d: Partial<AppData["general"]>) => void;
  updateTransportData: (d: Partial<AppData["transport"]>) => void;
  updateFoodData: (d: Partial<AppData["food"]>) => void;
  updateEnergyData: (d: Partial<AppData["energy"]>) => void;
  updateMaterialData: (d: Partial<AppData["material"]>) => void;
  updateWasteDate: (d: Partial<AppData["waste"]>) => void;
  // TODO: funcion para sabe si todas las secciones estan completas para generar el pdf
  isComplete: () => CompletionStatus;
};

export const useCalculatorStore = create<AppState>((set, get) => ({
  current: "general",
  data: initial,
  setSection: (s) => set({ current: s }),
  updateGeneralData: (d) =>
    set((state) => ({
      data: { ...state.data, general: { ...state.data.general, ...d } },
    })),
  updateTransportData: (d) =>
    set((state) => ({
      data: { ...state.data, transport: { ...state.data.transport, ...d } },
    })),
  updateFoodData: (d) =>
    set((state) => ({
      data: { ...state.data, food: { ...state.data.food, ...d } },
    })),
  updateEnergyData: (d) =>
    set((state) => ({
      data: { ...state.data, energy: { ...state.data.energy, ...d } },
    })),
  updateMaterialData: (d) =>
    set((state) => ({
      data: { ...state.data, material: { ...state.data.material, ...d } },
    })),
  updateWasteDate: (d) =>
    set((state) => ({
      data: { ...state.data, waste: { ...state.data.waste, ...d } },
    })),
  isComplete: () => {
    const result = appSchema.safeParse(get().data);
    if (result.success) {
      return { ok: true, issues: [] };
    }
    const issues = result.error.issues.map(
      (i) => `${i.path.join(".")}: ${i.message}`
    );
    return { ok: false, issues };
  },
}));
