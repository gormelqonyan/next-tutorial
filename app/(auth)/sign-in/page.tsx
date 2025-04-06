"use client";

import React from "react";

import AuthForm from "@/components/auth/AuthForm";
import { SignInSchema } from "@/validation/authValidation";

function SignIn() {
  return (
    <AuthForm
      formType={"SIGN_IN"}
      defaultValues={{
        email: "",
        password: "",
      }}
      schema={SignInSchema}
      onSubmit={(values) => console.log(values)}
    />
  );
}

export default SignIn;
