import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`
          w-full px-4 py-3 rounded-lg border transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent
          placeholder:text-gray-400
          ${
            error
              ? "border-red-300 bg-red-50 focus:ring-red-500"
              : "border-gray-300 bg-white hover:border-gray-400"
          }
          ${className}
        `}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
