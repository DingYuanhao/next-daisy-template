"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className="flex flex-col h-screen w-40 p-4 gap-4 bg-base-200">
      <button className="btn btn-ghost" onClick={() => router.push("/")}>
        Home
      </button>
      <button className="btn btn-ghost" onClick={() => router.push("/dashboard")}>
        DashBoard
      </button>
      {/* <button className="btn mt-auto">
        light / dark
      </button> */}
      <button className="btn btn-ghost mt-auto">
        settings
      </button>
    </nav>
  );
}
