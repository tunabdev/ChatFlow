import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, first_name, last_name, password } = body;
    console.log({ email, first_name, password, last_name });
    if (!email || !first_name || !last_name || !password) {
      return NextResponse.json({ error: "Missing fields", status: 400 });
      // return new NextResponse("Missing fields", { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        first_name,
        last_name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error, "Register error");
    // return new NextResponse("Something went wrong", { status: 500 });
    return NextResponse.json({ error, status: 500 });
  }
}
