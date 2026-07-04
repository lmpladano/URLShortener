"use client";

import { Button } from "@/components/ui/button";
import useAuth from "@/app/hooks/useAuth";

export default function NavBar() {
  return (
    <>
      <div className="flex items-center px-7 justify-between">
        <div className="py-7">
          <h1 className="text-xl font-semibold">UrlShort</h1>
        </div>
        <div className="flex gap-2.5">
          {useAuth() ? (
            <a href="http://localhost:3000/auth/signout">
              <Button>Sign Out</Button>
            </a>
          ) : (
            <a href="http://localhost:3000/auth/signin">
              <Button>Sign In</Button>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
