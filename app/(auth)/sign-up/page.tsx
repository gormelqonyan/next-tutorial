"use client";

import React from "react";

import AuthForm from "@/components/auth/AuthForm";
import { SignUpSchema } from "@/validation/authValidation";

function SignUp() {
  return (
    <AuthForm
      formType={"SIGN_UP"}
      defaultValues={{
        username: "",
        name: "",
        email: "",
        password: "",
      }}
      schema={SignUpSchema}
      onSubmit={(values) => console.log(values)}
    />
  );
}

export default SignUp;
