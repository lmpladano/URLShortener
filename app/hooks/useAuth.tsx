"use client";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function useAuth() {
  const auth = useContext(AuthContext);

  if (auth === null) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  console.log(auth);

  return auth;
}
