import { Truck, User, Gauge } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useCalculatorStore } from "../../app/store";
import { useForm, type Resolver, type SubmitHandler } from "react-hook-form";
import type z from "zod";
import { transportSchema } from "../../app/schemas/transportSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "../ui/form-field";
import { Input } from "../ui/input";

type TransportData = z.infer<typeof transportSchema>;

const TransportSection = () => {
  const { data, updateTransportData } = useCalculatorStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransportData>({
    resolver: zodResolver(transportSchema) as Resolver<TransportData>,
    defaultValues: data.transport,
  });

  const onSubmit: SubmitHandler<TransportData> = (values) => {
    updateTransportData(values);
  };

  const handleFieldChange = <
    T extends keyof TransportData,
    K extends keyof TransportData[T]
  >(
    section: T,
    field: K,
    value: TransportData[T][K]
  ) => {
    updateTransportData({
      [section]: {
        ...data.transport[section],
        [field]: value,
      },
    } as Partial<TransportData>);
  };

  return (
    <>
      <Card className="max-w-4xl">
        <CardHeader className="bg-gradient-to-r from-emerald-50 to-cyan-50 border-b border-emerald-100">
          <CardTitle className="flex items-center gap-3 text-emerald-900">
            <div className="h-10 w-10 rounded-lg bg-emerald-600 flex items-center justify-center shadow-sm">
              <Truck className="h-5 w-5 text-white" />
            </div>
            Transporte
          </CardTitle>
          <p className="text-emerald-700 mt-2 font-medium">
            Información sobre el transporte de asistentes y materiales
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="gap-6">
              <FormField
                label="Camión"
                required
                error={errors.truck?.message}
                description="Coloca el Num. de Personas y la Distancia Recorrida en Km"
                twocolum
              >
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    {...register("truck.numPersons")}
                    type="number"
                    className="pl-10"
                    error={!!errors.truck?.numPersons}
                    onChange={(e) =>
                      handleFieldChange(
                        "truck",
                        "numPersons",
                        Number(e.target.value) || 0
                      )
                    }
                  />
                </div>
                <div className="relative">
                  <Gauge className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    {...register("truck.distanceKm")}
                    type="number"
                    className="pl-10"
                    error={!!errors.truck?.distanceKm}
                    onChange={(e) =>
                      handleFieldChange(
                        "truck",
                        "distanceKm",
                        Number(e.target.value) || 0
                      )
                    }
                  />
                </div>
              </FormField>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default TransportSection;
