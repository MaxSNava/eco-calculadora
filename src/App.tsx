import { useCalculatorStore } from "./app/store";
import Sidebar from "./components/Sidebar";
import GeneralSection from "./components/FormSections/GeneralSection";
import TransportSection from "./components/FormSections/TransportSection";
import FoodSection from "./components/FormSections/FoodSection";
import EnergySection from "./components/FormSections/EnergySection";
import MaterialsSection from "./components/FormSections/MaterialsSection";
import WasteSection from "./components/FormSections/WasteSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const { current } = useCalculatorStore();

  return (
    <>
      <Header />

      <div className="min-h-screen bg-emerald-50/50">
        <main className="mx-auto max-w-6xl flex gap-6 px-4 py-6">
          <Sidebar />
          <section className="flex-1">
            {current === "general" && <GeneralSection />}
            {current === "transport" && <TransportSection />}
            {current === "food" && <FoodSection />}
            {current === "energy" && <EnergySection />}
            {current === "material" && <MaterialsSection />}
            {current === "waste" && <WasteSection />}
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
