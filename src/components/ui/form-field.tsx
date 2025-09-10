import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  children: ReactNode;
  error?: string;
  required?: boolean;
  description?: string;
  twocolum?: boolean;
}

export const FormField = ({
  label,
  children,
  error,
  required,
  description,
  twocolum,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-900">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {description && <p className="text-sm text-gray-600">{description}</p>}
      <div className={twocolum ? "flex gap-2" : "flex flex-col"}>
        {children}
      </div>
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <span className="text-red-500">⚠</span>
          {error}
        </p>
      )}
    </div>
  );
};
