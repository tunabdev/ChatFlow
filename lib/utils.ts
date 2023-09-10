import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Must be 2 or more characters long" })
    .max(10, { message: "Must be 10 or fewer characters long" }),
  lastName: z
    .string()
    .min(2, { message: "Must be 2 or more characters long" })
    .max(15, { message: "Must be 15 or fewer characters long" }),
  email: z.string().email({ message: "Must be a valid email" }),
  password: z
    .string()
    .min(6, { message: "Must be 6 or more characters long" })
    .max(15, { message: "Must be 15 or fewer characters long" }),
});
/**  formSchema is a zod schema that validates the form data */
export const requiredFormSchema = formSchema.required();

//
export type IconProps = {
  height?: number;
  width?: number;
  fill?: number;
  stroke?: number;
  strokeWidth?: number;
  className?: string;
};
