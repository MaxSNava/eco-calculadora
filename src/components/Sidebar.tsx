import { useCalculatorStore } from "../app/store";

const NAV: {
  key: Parameters<typeof useCalculatorStore.getState>["0"]["current"];
  label: string;
}[] = [
  { key: "general", label: "Información General" },
  { key: "transport", label: "Transporte" },
  { key: "food", label: "Comida y Bebidas" },
  { key: "energy", label: "Energía" },
  { key: "material", label: "Materiales e Insumos" },
  { key: "waste", label: "Gestión de residuos" },
  { key: "resume", label: "Resultados" },
];

const Sidebar = () => {
  const { current, setSection } = useCalculatorStore();
  return (
    <>
      <aside className="w-72 p-4">
        <div className="rounded-2xl border bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Secciones</h2>
          100 %
          <div className="mb-4 h-2 w-full rounded bg-gray-200">
            <div className="h-2 rounded bg-emerald-500" />
          </div>
          <nav className="space-y-1">
            {NAV.map((i) => (
              <button
                key={i.key}
                onClick={() => setSection(i.key)}
                className={`w-full text-left px-3 py-2 rounded-lg hover:bg-emerald-50 ${
                  current === i.key
                    ? "bg-emerald-600 text-white"
                    : "bg-white border"
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
