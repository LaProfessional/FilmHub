import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Separator,
} from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useSignIn } from "../../api/use-sign-in";
import { signInFormSchema, type SignInFormSchema } from "../../model";

export function SignInForm() {
  const form = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { signIn } = useSignIn();

  const onSubmit = (values: SignInFormSchema) => {
    signIn(values, form.setError);
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <header>
          <h1 className="text-2xl">Login</h1>
        </header>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Separator orientation="horizontal" />

        <Link
          to={"/auth/reset-password"}
          className="text-sm cursor-pointer text-center hover:opacity-50 transition-opacity"
        >
          Забыли пароль?
        </Link>

        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
}
