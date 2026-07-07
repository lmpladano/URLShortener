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
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    image: "",
  });

  useEffect(() => {
    async function loadAuthHelper() {
      try {
        const authenticated = await authHelper();

        if (authenticated.authenticated) {
          setIsAuthenticaded(true);
          setUser(authenticated.user);
        } else {
          setIsAuthenticaded(false);
        }
      } finally {
        setIsLoading(false);
      }
    }

    void loadAuthHelper();
  }, []);
  const authValue = {
    isLoading,
    isAuthenticated,
    user,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
