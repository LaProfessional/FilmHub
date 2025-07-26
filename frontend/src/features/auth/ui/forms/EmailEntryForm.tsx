import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { emailEntryFormSchema, type EmailEntryFormSchema } from "../../model";

interface EmailEntryFormProps {
  onSuccess: () => void;
}

export const EmailEntryForm = ({ onSuccess }: EmailEntryFormProps) => {
  const form = useForm<EmailEntryFormSchema>({
    resolver: zodResolver(emailEntryFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: EmailEntryFormSchema) => {
    console.log(data);
    onSuccess();
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="почта..." {...field} />
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
