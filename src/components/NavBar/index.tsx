"use client";

import { useRouter } from "next/navigation";
import { ThemeToggler } from "../ThemeToggler";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className="flex flex-col h-screen w-52 p-4 gap-4 bg-base-200">
      <button className="btn btn-ghost" onClick={() => router.push("/")}>
        Home
      </button>
      <button
        className="btn btn-ghost"
        onClick={() => router.push("/dashboard")}
      >
        DashBoard
      </button>
      <button
        className="btn btn-ghost"
        onClick={() => router.push("/fetching")}
      >
        Data Fetching
      </button>
      <ThemeToggler />
      <button className="btn btn-ghost">settings</button>
    </nav>
  );
}
