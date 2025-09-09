import { create } from "zustand";
import type { AppData } from "./schemas";
import type { SectionKey } from "./types";

type AppState = {
  current: SectionKey;
  data: AppData;
  // funcion para cambiar de seccion
  setSection: (s: SectionKey) => void;
  // funcion para SEETEAR la data
  setData: (d: Partial<AppData>) => void;
  // TODO: funcion para actualizar la data
  updateData: () => void;
  // TODO: funcion para sabe si todas las secciones estan completas para generar el pdf
  isComplete: () => void;
};

const initial: AppData = {
  general: {
    eventType: "",
    eventDay: new Date(),
    eventDurationDay: 1,
    assistants: 0,
    staff: 0,
    // Esta es una constante siempre va a valer 30 dolares el arbol || muy raro que cambie || 30 DLLS LA TONELADA
    treeCost: 30,
  },
  transport: {
    truck: { numPersons: 0, distanceKm: 0 },
    planeDomestic: { numPersons: 0, distanceKm: 0 },
    planeInternational: { numPersons: 0, distanceKm: 0 },
    carICE: { numPersons: 0, distanceKm: 0 },
    carEV: { numPersons: 0, distanceKm: 0 },
    bikeWalk: { numPersons: 0, distanceKm: 0 },
    taxiUber: { numPersons: 0, distanceKm: 0 },
    train: { numPersons: 0, distanceKm: 0 },
    metro: { numPersons: 0, distanceKm: 0 },
  },
  food: {
    dishwareType: "disposable",
    drinks: {
      alcohol: 0,
      soda500ml: 0,
      water500ml: 0,
    },
    food: {
      mixedMenu: 0,
      veganMenu: 0,
      vegetarianMenu: 0,
    },
  },
  energy: {
    minisplit1ton: { quantityUnits: 0, hoursOfUse: 0 },
    minisplit2ton: { quantityUnits: 0, hoursOfUse: 0 },
    minisplit3ton: { quantityUnits: 0, hoursOfUse: 0 },
    gasStove: { quantityUnits: 0, hoursOfUse: 0 },
    firewoodStove3k: { quantityUnits: 0, hoursOfUse: 0 },
    ledBulb10w: { quantityUnits: 0, hoursOfUse: 0 },
    ledScreen55: { quantityUnits: 0, hoursOfUse: 0 },
    smallSpeakersPair: { quantityUnits: 0, hoursOfUse: 0 },
    largeSpeakerBaffle: { quantityUnits: 0, hoursOfUse: 0 },
    eventLighting: { quantityUnits: 0, hoursOfUse: 0 },
    microphoneConsole: { quantityUnits: 0, hoursOfUse: 0 },
    waterCooler: { quantityUnits: 0, hoursOfUse: 0 },
    electricOvenMicrowave: { quantityUnits: 0, hoursOfUse: 0 },
    beverageCooler: { quantityUnits: 0, hoursOfUse: 0 },
    laptop: { quantityUnits: 0, hoursOfUse: 0 },
    cameraAudio: { quantityUnits: 0, hoursOfUse: 0 },
    inflatableMotor: { quantityUnits: 0, hoursOfUse: 0 },
  },
  material: {
    calc: {
      pvcCanvas: [{ measureA: 0, measureB: 0, total: 0 }],
      cardboard: [{ measureA: 0, measureB: 0, total: 0 }],
      rigidPlastic: [{ measureA: 0, measureB: 0, total: 0 }],
      paper: [{ amount: 0, capacity: 0, total: 0 }],
    },
    articles: [
      { name: "Lona de PVC", quantity: 0, unit: "M2" },
      { name: "Cartón", quantity: 0.1, unit: "Kg" },
      { name: "Plástico rígido", quantity: 0, unit: "Kg" },
      { name: "Papel", quantity: 0, unit: "Kg" },
      { name: "Playeras promocionales", quantity: 1, unit: "Pzas" },
      { name: "Impresión de credenciales", quantity: 1, unit: "Pzas" },
      { name: "Regalos promocionales", quantity: 3, unit: "Pzas" },
    ],
  },
  waste: {
    organicWasteKg: 0,
    recyclableWasteKg: 0,
    hazardousWasteKg: 0,
    generalWasteKg: 0,
    incineratedWasteKg: 0,
  },
};

export const useCalculatorStore = create<AppState>((set, get) => ({
  current: "general",
  data: initial,
  setSection: (s) => set({ current: s }),
  setData: () => {},
  updateData: () => {},
  isComplete: () => {},
}));
