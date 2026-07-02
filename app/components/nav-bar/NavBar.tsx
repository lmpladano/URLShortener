import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <>
      <div className="flex items-center px-7 justify-between">
        <div className="py-7">
          <h1 className="text-xl font-semibold">UrlShort</h1>
        </div>
        <div className="flex gap-2.5">
          <a href="http://localhost:3000/auth/signin">
            <Button>Sign In</Button>
          </a>
          <Button>Sign Up</Button>
        </div>
      </div>
    </>
  );
}
