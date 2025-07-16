import * as React from "react";
import { cn } from "@/shared/lib/utils";

function Textarea({ className = "", ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {

return(
  <textarea 
    className={cn("w-full min-h-[60px] max-h-[130px] border border-border rounded-md p-2 text-primary text-sm font-semibold resize-vertical", className)} {...props} 
  />
)
}
export { Textarea };
