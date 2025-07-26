import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { codeVerifyFormSchema, type CodeVerifyFormSchema } from "../../model";

interface CodeVerifyFormProps {
  onSuccess: () => void;
}

export const CodeVerifyForm = ({ onSuccess }: CodeVerifyFormProps) => {
  const form = useForm<CodeVerifyFormSchema>({
    resolver: zodResolver(codeVerifyFormSchema),
    defaultValues: {
      code: "",
    },
  });

  const { setValue, handleSubmit, control } = form;

  const onSubmit = (data: CodeVerifyFormSchema) => {
    console.log(data);
    onSuccess();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
    setValue("code", digits);
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="code"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="XXXX"
                    inputMode="numeric"
                    maxLength={4}
                    {...field}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Button type="submit" className="w-fit mx-auto">
          Подтвердить
        </Button>
      </form>
    </Form>
  );
};
