"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/app/icons/logo";
import { IconProps, formSchema, requiredFormSchema } from "@/lib/utils";
import HidePasswordLogo from "@/app/icons/hidePassword";
import ShowPasswordLogo from "@/app/icons/showPassword";
import { useForm, zodResolver } from "@mantine/form";
function SignupPage() {
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const form = useForm({
    validate: zodResolver(formSchema),
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  type FormValues = typeof form.values;
  type ErrorValues = typeof form.errors
  const handleSubmit = (values: FormValues) => console.log(values);
  const handleError = (errors: ErrorValues) => {
    console.log(errors);
  };
  // console.log(form.values);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between p-8">
        <div className="">
          <Link href="/" className="flex items-center justify-center h-9 w-9">
            <Logo height={36} width={36} />
          </Link>
        </div>
        <Link
          href="/login"
          className="flex items-center justify-center text-sm font-medium"
        >
          LOG IN
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center w-full h-screen max-w-sm gap-8">
          <div>
            <h1 className="h1">Create Your Account</h1>
          </div>
          <form
            onSubmit={form.onSubmit(handleSubmit, handleError)}
            className="flex flex-col items-center w-full h-screen max-w-sm gap-8 "
          >
            <div className="flex flex-col w-full">
              <div className="flex flex-col">
                <label className="label" htmlFor="First Name">
                  First Name
                </label>
                <input
                  className="px-0 py-3 input placeholder"
                  placeholder="First Name"
                  {...form.getInputProps("firstName")}
                />
                <div className="w-full h-[1px] bg-bordergray">
                  <div className=" w-0 h-[1px] transition-all duration-300 "></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col">
                <label className="label" htmlFor="Last Name">
                  Last Name
                </label>
                <input
                  className="px-0 py-3 input placeholder"
                  placeholder="Last Name"
                  {...form.getInputProps("lastName")}
                />
                <div className="w-full h-[1px] bg-bordergray">
                  <div className=" w-0 h-[1px] transition-all duration-300 "></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col">
                <label className="label" htmlFor="Email">
                  Email
                </label>
                <input
                  className="px-0 py-3 input placeholder"
                  placeholder="name@example.com"
                  type="email"
                  {...form.getInputProps("email")}
                />
                <div className="w-full h-[1px] bg-bordergray">
                  <div className=" w-0 h-[1px] transition-all duration-300 "></div>
                </div>{" "}
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col">
                <label className="label" htmlFor="Password">
                  Password
                </label>
                <input
                  className="px-0 py-3 input placeholder"
                  placeholder="Password"
                  type="password"
                  {...form.getInputProps("password")}
                />
                <div className="w-full h-[1px] bg-bordergray">
                  <div className=" w-0 h-[1px] transition-all duration-300 "></div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={!form.isValid()}
              className="signUpButton"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
