import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "" }: CardProps) => {
  return (
    <div className={`px-6 py-5 border-b border-gray-100 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }: CardProps) => {
  return <div className={`px-6 py-6 ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className = "" }: CardProps) => {
  return (
    <h3 className={`text-xl font-semibold text-gray-900 ${className}`}>
      {children}
    </h3>
  );
};
