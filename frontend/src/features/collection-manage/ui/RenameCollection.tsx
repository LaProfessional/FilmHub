import { collectionModel } from "@/entities/collection";
import type { Collection } from "@/entities/collection/model";
import { Form, FormControl, FormField, FormItem, FormMessage, Input } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { collectionSchema, type CollectionSchema } from "../model/validation";

export const RenameCollection = ({
  col,
  onSuccess,
}: {
  col: Collection;
  onSuccess: () => void;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<CollectionSchema>({
    resolver: zodResolver(collectionSchema),
    defaultValues: {
      name: col.name,
    },
  });

  const onSubmit = ({ name }: CollectionSchema) => {
    collectionModel.renameCollection({ id: col.id, name });
    onSuccess();
  };

  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl onBlur={onSuccess}>
                <Input
                  {...field}
                  type="text"
                  ref={(el) => {
                    field.ref(el); // RHF
                    inputRef.current = el; // свой ref
                  }}
                  placeholder="Введите название папки..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
