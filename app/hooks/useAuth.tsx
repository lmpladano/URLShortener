import { useState, useEffect } from "react";
import { authHelper } from "@/lib/api/url";

export default function useAuth() {
  const [isAuthencticated, setIsAuthenticaded] = useState(false);

  useEffect(() => {
    async function loadAuthHelper() {
      const authenticated = await authHelper();
      if (authenticated.authenticated) {
        setIsAuthenticaded(authenticated);
      }
    }

    void loadAuthHelper();
  }, []);

  return isAuthencticated;
}
