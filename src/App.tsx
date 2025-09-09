import { useApp } from "./app/store";
import { appSchema, calcularResultados } from "./app/schemas";
import Sidebar from "./components/Sidebar";
import { TreePine, Leaf } from "lucide-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDoc } from "./pdf/PdfDoc";

const App = () => {
  const { current, data, isComplete } = useApp();

  //const completion = calcCompletion();
  //const complete = isComplete();

  return (
    <>
      <div className="min-h-screen bg-emerald-50/50">
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
                {calcularResultados(data).totalKg.toFixed(2)} kg CO₂e
              </span>

              {/*complete.ok ? (
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
              )*/}
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl flex gap-6 px-4 py-6">
          <Sidebar />
          <section className="flex-1">
            {/*current === "general" && <GeneralForm />*/}
            {/*current === "general" && <GeneralForm />*/}
            {/*current === "general" && <GeneralForm />*/}
            {/*current === "general" && <GeneralForm />*/}
            {current === "resumen" && (
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Resumen</h3>
                <pre className="text-sm bg-gray-50 p-4 rounded-lg overflow-auto">
                  {JSON.stringify(data, null, 2)}
                </pre>
              </div>
            )}
          </section>
        </main>

        <footer className="mx-auto max-w-6xl flex flex-col gap-6 px-4 py-6 bg-green-100 border border-green-300 rounded-xl p-6 text-center">
          <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Para compensar tu huella de carbono sería necesario plantar:
          </h3>
          <div className="text-3xl font-bold text-green-700 mb-2">
            0 árboles
          </div>
          <p className="text-sm text-green-600">
            Costo estimado para compensar la huella de carbono: 0 MXN
          </p>
        </footer>
      </div>
    </>
  );
};

export default App;
