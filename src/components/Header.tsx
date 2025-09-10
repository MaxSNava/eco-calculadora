import { PDFDownloadLink } from "@react-pdf/renderer";
import { useCalculatorStore } from "../app/store";
// import { calcularResultados } from "../utils/calculations";
import { TreePine } from "lucide-react";
import { PdfDoc } from "../pdf/PdfDoc";

const Header = () => {
  const { data, isComplete } = useCalculatorStore();
  const complete = isComplete();

  return (
    <>
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
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
              {/*calcularResultados(data).numeriot*/} kg CO₂e
            </span>

            {/* TODO: Boton para generar el pdf cuando todas las secciones esten completas  */}
            {complete.ok ? (
              <PDFDownloadLink
                document={<PdfDoc data={data} />}
                fileName="resultados-evento.pdf"
                className="rounded-lg bg-emerald-600 text-white px-4 py-2"
              >
                {({ loading }) => (loading ? "Generando…" : "Exportar PDF")}
              </PDFDownloadLink>
            ) : (
              <button
                className="rounded-lg bg-gray-300 text-gray-600 px-4 py-2 cursor-not-allowed"
                title={complete.issues?.join("\n")}
                disabled
              >
                Completa todas las secciones
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
