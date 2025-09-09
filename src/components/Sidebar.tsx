import { useCalculatorStore } from "../app/store";
import type { SectionKey } from "../app/types";

const NAV: {
  key: SectionKey;
  label: string;
}[] = [
  { key: "general", label: "Información General" },
  { key: "transport", label: "Transporte" },
  { key: "food", label: "Comida y Bebidas" },
  { key: "energy", label: "Energía" },
  { key: "material", label: "Materiales e Insumos" },
  { key: "waste", label: "Gestión de residuos" },
];

const Sidebar = () => {
  const { current, setSection } = useCalculatorStore();
  return (
    <>
      <aside className="w-72 p-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Secciones</h2>
          <nav className="space-y-1">
            {NAV.map((i) => (
              <button
                key={i.key}
                onClick={() => setSection(i.key)}
                className={`w-full text-left px-3 py-2 rounded-lg hover:bg-emerald-100 ${
                  current === i.key
                    ? "bg-emerald-600 text-white"
                    : "bg-white border border-gray-200"
                }`}
              >
                {i.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
