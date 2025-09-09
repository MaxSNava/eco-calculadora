import { create } from "zustand";
import type { AppData } from "./schemas";
import type { SectionKey } from "./types";

type AppState = {
  current: SectionKey;
  data: AppData;
  setSection: (s: SectionKey) => void;
  isComplete: boolean;
};

const initialData: AppData = {
  general: {
    eventeType: "",
    eventDay: new Date(),
    eventDurationDay: 1,
    assistants: 0,
    staff: 0,
    treeCost: 35,
  },
  transport: {},
  food: {},
  energy: {},
  material: {},
  waste: {},
};

export const useCalculatorStore = create<AppState>((set) => ({
  current: "general",
  data: initialData,
  setSection: (s) => set({ current: s }),
  isComplete: true,
}));
