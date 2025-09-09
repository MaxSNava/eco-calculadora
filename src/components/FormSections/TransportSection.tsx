import { Truck } from "lucide-react";
import { Card, CardHeader, CardTitle } from "../ui/card";

const TransportSection = () => {
  return (
    <>
      <Card className="max-w-4xl">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-blue-100">
          <CardTitle className="flex items-center gap-3 text-blue-900">
            <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm">
              <Truck className="h-5 w-5 text-white" />
            </div>
            Transporte
          </CardTitle>
          <p className="text-blue-700 mt-2 font-medium">
            Información sobre el transporte de asistentes y materiales
          </p>
        </CardHeader>
      </Card>
    </>
  );
};

export default TransportSection;
