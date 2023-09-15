import React from "react";
import Link from "next/link";
import Logo from "@/app/icons/logo";
interface HeaderProps {
  variant?: "LOG IN" | "SIGN UP";
}
function Header({ variant }: HeaderProps): JSX.Element {
  return (
    <div className="flex justify-between p-8">
      <div className="">
        <Link
          href="/"
          className="flex items-center justify-center w-full h-full"
        >
          <Logo height={48} width={48} />
        </Link>
      </div>
      <Link
        href={variant === "SIGN UP" ? "/signup" : "/login"}
        className="flex items-center justify-center text-sm font-medium"
      >
        {variant === "SIGN UP" ? "SIGN UP" : "LOG IN"}
      </Link>
    </div>
  );
}

export default Header;
