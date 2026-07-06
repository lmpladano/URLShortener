import { Button } from "@/components/ui/button";
import useAuth from "@/app/hooks/useAuth";
export default function TopMenu() {
  const auth = useAuth();
  return auth.isAuthenticated ? (
    <div className="flex w-full justify-between my-3">
      <div className="flex items-center gap-1">
        <p>Your Links</p>
      </div>
      <div>
        <Button>add link +</Button>
      </div>
    </div>
  ) : (
    <div className="flex w-full justify-between my-3">
      <div></div>
      <div>
        <Button>add link +</Button>
      </div>
    </div>
  );
}
