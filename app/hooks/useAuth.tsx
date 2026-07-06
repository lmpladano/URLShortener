"use client";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Auth } from "@/lib/types";

export default function useAuth() {
  const auth = useContext<Auth | null>(AuthContext);

  if (auth === null) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  console.log(auth);

  return auth;
}
