"use client";
import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import useAuth from "@/app/hooks/useAuth";

export default function NavBar() {
  const auth = useAuth();
  console.log(auth.isAuthencticated);
  return (
    <>
      <div className="flex items-center px-7 justify-between">
        <div className="py-7 flex items-center">
          <Button variant="link" className="p-0">
            <Link />
          </Button>

          <h1 className="text-xl font-semibold">Yourl</h1>
        </div>
        <div className="flex gap-2.5">
          {auth.isAuthencticated ? (
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
