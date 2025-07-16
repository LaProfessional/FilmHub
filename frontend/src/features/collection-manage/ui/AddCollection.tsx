import { collectionModel } from "@/entities/collection";
import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { FolderInput } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";

const collectionSchema = z.object({
  name: z
    .string()
    .min(3, "Введите название папки")
    .max(12, "Название не должно быть длиннее 12 символов"),
});

type CollectionSchema = z.infer<typeof collectionSchema>;

export const AddCollection = ({ onSuccess }: { onSuccess: () => void }) => {
  const form = useForm<CollectionSchema>({
    resolver: zodResolver(collectionSchema),
  });

  const onSubmit = (data: CollectionSchema) => {
    collectionModel.addCollection(data.name);
    onSuccess();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Введите название папки..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Button type="submit">
          <FolderInput />
        </Button>
      </form>
    </Form>
  );
};
