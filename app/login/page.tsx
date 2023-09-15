"use client";

import Header from "@/components/header/header";
import React, { useEffect, useState } from "react";
import GoogleLogo from "@/app/icons/google";
import FacebookLogo from "@/app/icons/facebook";
import GithubLogo from "@/app/icons/github";
import Link from "next/link";
import { useForm, zodResolver } from "@mantine/form";
import { loginSchema } from "@/lib/utils";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  console.log('login page');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  // if (session?.status === "authenticated") {
  //   return router.replace("/dashboard");
  // }
  // const session = getServerSession();
  const form = useForm({
    validate: zodResolver(loginSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });
  type FormValues = typeof form.values;
  type ErrorValues = typeof form.errors;

  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace("/dashboard");
    }

    return () => {};
  }, [session?.status]);

  const handleSubmit = (values: FormValues) => {
    // console.log(values);
    setIsLoading(true);
    toast({
      title: "Logged In",
      description: "You have been logged in successfully",
      duration: 2000,
    });
    signIn("credentials", {
      ...values,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          toast({
            title: "Error",
            description: "Invalid Credentials!",
          });
        }
        if (callback?.ok) {
          router.replace("/dashboard");
        }
      })
      .finally(() => {
        form.reset();
        setIsLoading(false);
      });
  };
  const handleError = (errors: ErrorValues) => {
    console.log(errors);
  };
  return (
    <>
      {session?.status === "unauthenticated" && session?.data === null ? (
        <div className="w-screen h-screen">
          <Header variant="SIGN UP" />
          <div className="flex flex-col items-center w-full h-full">
            <div className="flex flex-col items-center gap-12 ">
              <div>
                <h1 className="h1">Log into ChatFlow</h1>
              </div>
              <div className="flex flex-col items-center gap-8">
                <div className="flex items-center w-full gap-8">
                  {/* left side */}
                  <div className="flex flex-col">
                    <form
                      className="flex flex-col max-w-sm gap-6 w-80"
                      onSubmit={form.onSubmit(handleSubmit, handleError)}
                    >
                      <div className="flex flex-col">
                        <label htmlFor="email" className="label">
                          Email Address
                        </label>
                        <input
                          className="px-0 py-3 input placeholder"
                          {...form.getInputProps("email")}
                          placeholder="name@example.com"
                          type="email"
                          id="email"
                        />
                        <div className="w-full h-[1px] bg-bordergray">
                          <div className=" w-0 h-[1px] transition-all duration-300 "></div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="password" className="label">
                          Password
                        </label>
                        <input
                          className="px-0 py-3 input placeholder"
                          {...form.getInputProps("password")}
                          placeholder="Password"
                          type="password"
                          id="password"
                        />
                        <div className="w-full h-[1px] bg-bordergray">
                          <div className=" w-0 h-[1px] transition-all duration-300 "></div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        // disabled={!form.isValid()}
                        className="signUpButton"
                      >
                        LOG IN
                      </button>
                    </form>
                  </div>
                  {/* vertical divider */}
                  <div className="flex flex-col items-center h-56">
                    {/* divider*/}
                    <div className="w-[1px] h-full bg-bordergray"></div>
                    <span className="p-3 text-xs text-disabledTextGray">
                      OR
                    </span>
                    <div className="w-[1px] h-full bg-bordergray"></div>
                  </div>
                  {/* right side */}
                  <div className="flex flex-col gap-3">
                    <button className="relative h-14 min-w-[320px] signInButton">
                      <div className="flex items-center h-full">
                        <GoogleLogo />
                      </div>
                      <span className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                        Continue with Google
                      </span>
                    </button>
                    <button className="relative h-14 min-w-[320px] signInButton">
                      <div className="flex items-center h-full max-w-min">
                        <GithubLogo />
                      </div>
                      <span className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                        Continue with Github
                      </span>
                    </button>
                    <button
                      className="relative h-14 min-w-[320px] signInButton"
                      disabled={isLoading}
                    >
                      <div className="flex items-center h-full max-w-min">
                        <FacebookLogo />
                      </div>
                      <span className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                        Continue with Facebook
                      </span>
                    </button>
                  </div>
                </div>
                <Link
                  href="/"
                  className="text-xs font-medium uppercase text-primary"
                >
                  Cant Log In?
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
