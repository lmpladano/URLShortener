"use client";

import { createContext, useState, useEffect } from "react";
import { authHelper } from "@/lib/api/url";
import { Auth, User } from "@/lib/types";

export const AuthContext = createContext<Auth | null>(null);

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticaded] = useState(false);
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    image: "",
  });

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
    isAuthenticated,
    user,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
