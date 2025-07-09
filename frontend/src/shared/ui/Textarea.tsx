import * as React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ error, className = "", ...props }) => {
  const baseClasses =
    "w-full min-h-[60px] max-h-[130px] border rounded-md p-2 text-primary text-sm font-semibold resize-vertical";
  const errorClass = error ? "border-red-500" : "border-border";
  const combinedClasses = `${baseClasses} ${errorClass} ${className}`.trim();

  return <textarea className={combinedClasses} {...props} />;
};
