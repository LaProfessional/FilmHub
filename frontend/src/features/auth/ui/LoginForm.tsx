import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Input,
  Button,
  Separator,
} from "@/shared/ui";
import { useLoginMutation } from "../api/authApiSlice";
import { loginFormSchema, type LoginFormData } from "../model/validation";

// TODO: переделать на функцию с переводом (`t`)
const loginFormFields = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  },
] as const;

export function LoginForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const onLoginFormSubmit = async (value: LoginFormData) => {
    try {
      // TODO: эту логику нужно вынести за пределы формы и сделать форму "глупой"
      await login(value).unwrap();
      navigate("/");
    } catch (error) {
      // TODO: handle error
      // TODO: форма должны отображать ошибки
      console.error(error);
    }
  };

  const renderedFormFields = loginFormFields.map(({ name, type, placeholder }) => (
    <FormField
      key={name}
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormControl>
              <Input type={type} placeholder={placeholder} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  ));

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onLoginFormSubmit)}>
        <FormMessage>{form.formState.errors.root?.message}</FormMessage>
        <header>
          <h1 className="text-2xl">Login</h1>
        </header>
        {renderedFormFields}
        <Separator orientation="horizontal" />
        <Button type="submit" disabled={isLoading}>
          Login
        </Button>
      </form>
    </Form>
  );
}
