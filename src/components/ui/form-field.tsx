import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  children: ReactNode;
  error?: string;
  required?: boolean;
  description?: string;
}

export const FormField = ({
  label,
  children,
  error,
  required,
  description,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-900">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {description && <p className="text-sm text-gray-600">{description}</p>}
      {children}
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <span className="text-red-500">⚠</span>
          {error}
        </p>
      )}
    </div>
  );
};
