"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/constants";

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (values: T) => void;
  formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  formType,
}: AuthFormProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (
    values: z.infer<typeof schema>,
  ) => {
    console.log(values);
  };

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-10 space-y-6"
      >
        {Object.keys(defaultValues).map((name) => {
          const fieldLabel =
            name === "email"
              ? "Email address"
              : name.charAt(0).toUpperCase() + name.slice(1);
          return (
            <FormField
              key={name}
              control={form.control}
              name={name as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{fieldLabel}</FormLabel>
                  <FormControl>
                    <Input
                      type={field.name === "password" ? "password" : "text"}
                      className={
                        "dark:border-dark-400 border-light-700 background-light900_dark400 h-[50px] border"
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}

        {formType === "SIGN_IN" && (
          <div className={"flex justify-end"}>
            <Link
              href={"/forget_password"}
              className={"body-medium text-accent-100"}
            >
              Forget password?
            </Link>
          </div>
        )}

        {formType === "SIGN_UP" ? (
          <p className={"text-center"}>
            Don’t have an account?{" "}
            <Link
              href={ROUTES.SIGN_IN}
              className={"primary-text-gradient paragraph-semibold"}
            >
              Sign In
            </Link>
          </p>
        ) : (
          <p className={"text-center"}>
            Already have an account?{" "}
            <Link
              href={ROUTES.SIGN_UP}
              className={"primary-text-gradient paragraph-semibold"}
            >
              Sign Up
            </Link>
          </p>
        )}

        <Button
          disabled={form.formState.isSubmitting}
          className={
            "primary-gradient !text-light-900 paragraph-semibold h-[45px] w-full cursor-pointer"
          }
        >
          {form.formState.isSubmitting
            ? buttonText === "Sign In"
              ? "Sign In..."
              : "Sign Up..."
            : buttonText}
        </Button>
      </form>
    </Form>
  );
};

export default AuthForm;
