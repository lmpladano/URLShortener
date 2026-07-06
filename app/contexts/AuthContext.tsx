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
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadAuthHelper() {
      const authenticated = await authHelper();
      if (authenticated.authenticated) {
        console.log("This keeps being true");
        console.log(authenticated.authenticated);
        setIsAuthenticaded(authenticated.authenticated);
        setUser(authenticated.user);
      }
    }

    void loadAuthHelper();
  }, []);
  const authValue = {
    isAuthencticated,
    user,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
