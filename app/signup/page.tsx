"use client";

//
import React, { useState } from "react";
import { registerSchema } from "@/lib/utils";
import HidePasswordLogo from "@/app/icons/hidePassword";
import ShowPasswordLogo from "@/app/icons/showPassword";
import { useForm, zodResolver } from "@mantine/form";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Header from "@/components/header/header";
import { useRouter } from "next/navigation";

function SignupPage() {
  console.log("signup page");
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm({
    validate: zodResolver(registerSchema),
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    validateInputOnChange: false,
  });
  type FormValues = typeof form.values;
  type FormErrors = typeof form.errors;

  const handleSubmit = async (values: FormValues) => {
    // console.log(values);

    await axios.post("/api/register", values).then((res) => {
      console.log(res);
    });
    toast({
      title: "Account Created",
      description: "Your account has been created successfully",
      duration: 5000,
    });
    router.push("/dashboard");
  };
  const handleError = (errors: FormErrors) => {
    console.log(errors);
  };
  // console.log(form.values);
  return (
    <div className="flex flex-col min-h-screen">
      <Header variant="LOG IN" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center w-full h-full max-w-sm gap-12">
          <div>
            <h1 className="h1">Create Your Account</h1>
          </div>
          <form
            onSubmit={form.onSubmit(handleSubmit, handleError)}
            className="flex flex-col items-center w-full h-full max-w-sm gap-6"
          >
            <div className="flex flex-col w-full">
              <div className="flex flex-col">
                <label className="label" htmlFor="first_name">
                  First Name
                </label>
                <input
                  className="px-0 py-3 input placeholder"
                  placeholder="First Name"
                  {...form.getInputProps("first_name")}
                  id="first_name"
                />
                <div className="w-full h-[1px] bg-bordergray">
                  <div className=" w-0 h-[1px] transition-all duration-300 "></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col">
                <label className="label" htmlFor="last_name">
                  Last Name
                </label>
                <input
                  className="px-0 py-3 input placeholder"
                  placeholder="Last Name"
                  {...form.getInputProps("last_name")}
                  id="last_name"
                />
                <div className="w-full h-[1px] bg-bordergray">
                  <div className=" w-0 h-[1px] transition-all duration-300 "></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  className="px-0 py-3 input placeholder"
                  placeholder="name@example.com"
                  type="email"
                  id="email"
                  {...form.getInputProps("email")}
                />
                <div className="w-full h-[1px] bg-bordergray">
                  <div className=" w-0 h-[1px] transition-all duration-300 "></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <input
                  className="px-0 py-3 input placeholder"
                  placeholder="Password"
                  type="password"
                  {...form.getInputProps("password")}
                  id="password"
                />
                <div className="w-full h-[1px] bg-bordergray">
                  <div className=" w-0 h-[1px] transition-all duration-300 "></div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              // disabled={!form.isValid()}
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
