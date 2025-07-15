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
import { useRegisterMutation } from "../api/authApiSlice";
import { registerFormSchema, type RegisterFormData } from "../model/validation";

// NOTE: формат данных изменится
const registerFormFields = [
  {
    name: "username",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm password",
  },
] as const;

export function RegisterForm() {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const onRegisterFormSubmit = async (values: RegisterFormData) => {
    try {
      await register(values).unwrap();
      navigate("/");
    } catch {
      // TODO: обработать ошибку
    }
  };

  const renderedFormFields = registerFormFields.map(({ name, type, placeholder }) => (
    <FormField
      key={name}
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          // NOTE: дизайн еще не готов, поэтому так
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
    // NOTE: дизайн формы еще не готов
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onRegisterFormSubmit)}>
        <header>
          <h1 className="text-2xl">Create an account</h1>
        </header>
        {renderedFormFields}
        <Separator orientation="horizontal" />
        {/* TODO: нужен будет спинер */}
        <Button type="submit" disabled={isLoading}>
          Create an account
        </Button>
      </form>
    </Form>
  );
}
