import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { confirmPasswordSchema, type ConfirmPasswordSchema } from "../../model";

interface ConfirmPasswordFormProps {
  onSuccess: () => void;
}

export const ConfirmPasswordForm = ({ onSuccess }: ConfirmPasswordFormProps) => {
  const form = useForm<ConfirmPasswordSchema>({
    resolver: zodResolver(confirmPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: ConfirmPasswordSchema) => {
    console.log(data);
    onSuccess();
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Новый пароль..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Подтвердите пароль..." {...field} />
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
