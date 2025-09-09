import { useCalculatorStore } from "../app/store";
import { calcularResultados } from "../app/schemas";
import { TreePine } from "lucide-react";

const Header = () => {
  const { data } = useCalculatorStore();

  return (
    <>
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="mx-auto max-w-6xl flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-600 flex justify-center items-center">
              <TreePine className="text-white" />
            </div>
            <div>
              <h1 className="font-semibold">Calculadora Carbono Neutral</h1>
              <p className="text-sm text-gray-600 -mt-1">
                Mide y compensa la huella de tu evento
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm px-3 py-1 rounded-full bg-emerald-100">
              {/* TODO Calcular los resultados en toneladas  cambiar el kg */}
              {calcularResultados(data).totalKg.toFixed(2)} kg CO₂e
            </span>

            {/* TODO: Boton para generar el pdf cuando todas las secciones esten completas  */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
