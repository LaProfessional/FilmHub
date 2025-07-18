import { Form, FormControl, FormField, FormItem, FormMessage, Input } from "@/shared/ui";

import { useEffect } from "react";

import { collectionModel } from "@/entities/collection";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { collectionSchema, type CollectionSchema } from "../model/validation";

export const AddCollection = ({ onSuccess }: { onSuccess: () => void }) => {
  const form = useForm<CollectionSchema>({
    resolver: zodResolver(collectionSchema),
  });

  const onSubmit = (data: CollectionSchema) => {
    collectionModel.addCollection(data.name);
    onSuccess();
  };

  useEffect(() => {
    form.setFocus("name");
  }, []); // eslint-disable-line

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl onBlur={onSuccess}>
                  <Input type="text" placeholder="Введите название папки..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      </form>
    </Form>
  );
};
