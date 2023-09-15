"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

function DashboardPage() {
  const router = useRouter();
  const session = useSession();
  const handleSignOut = () => {
    const sOut = async function () {
      await signOut({
        callbackUrl: "/login",
      });
      // if (session?.status === "unauthenticated") {
      //   router.replace("/login");
      // }
    };
    sOut();
  };
  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default DashboardPage;
