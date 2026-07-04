import { createContext, useState, useEffect } from "react";
import { authHelper } from "@/lib/api/url";

const AuthContext = createContext(null);

export default function AuthContextProvider() {
  const [isAuthencticated, setIsAuthenticaded] = useState(false);

  useEffect(() => {
    async function loadAuthHelper() {
      const authenticated = await authHelper();
      if (authenticated.authenticated) {
        console.log("This keeps being true");
        console.log(authenticated.authenticated);
        setIsAuthenticaded(authenticated);
      }
    }

    void loadAuthHelper();
  }, []);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
