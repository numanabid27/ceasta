"use client";

import Dashboard from "@/components/dashboard/dashboard.component";
import { useRouter } from "next/navigation";
import "./globals.css"
export default function Home() {
  const router = useRouter();

  if (typeof window === "object") {
    router.push("/");
  }

  return (
    <Dashboard/>
  )
}
