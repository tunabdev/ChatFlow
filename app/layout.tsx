import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Instrument_Sans } from "next/font/google";
import { NextAuthProvider } from "@/app/providers/NextAuthProvider";

//
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const InstrumentSans = Instrument_Sans({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log('layout');
  return (
    <html lang="en" className={InstrumentSans.className}>
      <body>
        <NextAuthProvider>
          <main> {children}</main>
          <Toaster />
        </NextAuthProvider>
      </body>
    </html>
  );
}
