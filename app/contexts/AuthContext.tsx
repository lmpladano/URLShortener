"use client";

import { createContext, useState, useEffect } from "react";
import { authHelper } from "@/lib/api/url";

export const AuthContext = createContext<boolean | null>(null);

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthencticated, setIsAuthenticaded] = useState(false);

  useEffect(() => {
    async function loadAuthHelper() {
      const authenticated = await authHelper();
      if (authenticated.authenticated) {
        console.log("This keeps being true");
        console.log(authenticated.authenticated);
        setIsAuthenticaded(authenticated.authenticated);
      }
    }

    void loadAuthHelper();
  }, []);

  return (
    <AuthContext.Provider value={isAuthencticated}>
      {children}
    </AuthContext.Provider>
  );
}
