import {
  Calendar,
  Users,
  UserCheck,
  Clock,
  DollarSign,
  BookImage,
} from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import { FormField } from "../ui/form-field";
import { Input } from "../ui/input";
import type z from "zod";
import { generalSchema } from "../../app/schemas";
import { useCalculatorStore } from "../../app/store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type GeneralData = z.infer<typeof generalSchema>;

const GeneralSection = () => {
  const { data, updateGeneral } = useCalculatorStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GeneralData>({
    resolver: zodResolver(generalSchema),
    defaultValues: data.general,
  });

  const onSubmit = (values: GeneralData) => {
    updateGeneral(values);
  };

  const handleFieldChange = (field: keyof GeneralData, value: any) => {
    updateGeneral({ [field]: value });
  };

  return (
    <>
      <Card className="max-w-4xl">
        <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
          <CardTitle className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-emerald-600 flex items-center justify-center">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            Información General del Evento
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Proporciona los datos básicos de tu evento para calcular su huella
            de carbono
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Tipo de evento"
                required
                error={errors.eventeType?.message}
                description="Selecciona el tipo de evento que organizarás"
              >
                <div className="relative">
                  <BookImage className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    {...register("eventeType")}
                    type="text"
                    className="pl-10"
                    error={!!errors.eventeType}
                    onChange={(e) =>
                      handleFieldChange(
                        "eventeType",
                        e.target.value || "Undeffined"
                      )
                    }
                  />
                </div>
              </FormField>

              <FormField
                label="Fecha del evento"
                required
                description="Selecciona la fecha del evento"
              >
                <Input
                  type="date"
                  onChange={(e) =>
                    handleFieldChange("eventDay", new Date(e.target.value))
                  }
                />
              </FormField>

              <FormField
                label="Duración del evento"
                required
                description="Número de días que durará el evento"
              >
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="number"
                    min="1"
                    placeholder="1"
                    className="pl-10"
                    onChange={(e) =>
                      handleFieldChange(
                        "eventDurationDay",
                        Number.parseInt(e.target.value) || 1
                      )
                    }
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                    días
                  </span>
                </div>
              </FormField>

              <FormField
                label="Número de asistentes"
                required
                description="Cantidad estimada de participantes"
              >
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="number"
                    min="1"
                    placeholder="50"
                    className="pl-10"
                    onChange={(e) =>
                      handleFieldChange(
                        "assistants",
                        Number.parseInt(e.target.value) || 0
                      )
                    }
                  />
                </div>
              </FormField>

              <FormField
                label="Número de staff"
                required
                description="Personal organizador y de apoyo"
              >
                <div className="relative">
                  <UserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="number"
                    min="0"
                    placeholder="5"
                    className="pl-10"
                    onChange={(e) =>
                      handleFieldChange(
                        "staff",
                        Number.parseInt(e.target.value) || 0
                      )
                    }
                  />
                </div>
              </FormField>
            </div>

            {/* Cost Information Card */}
            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                  <DollarSign className="h-4 w-4 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-emerald-900">
                  Información de compensación
                </h4>
              </div>
              <p className="text-sm text-emerald-700">
                Cada árbol compensa aproximadamente 25 kg de CO₂ durante su vida
                útil. El costo puede variar según la región y el tipo de
                proyecto de reforestación.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default GeneralSection;
