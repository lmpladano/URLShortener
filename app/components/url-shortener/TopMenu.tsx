import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAuth from "@/app/hooks/useAuth";
export default function TopMenu() {
  const auth = useAuth();
  return !auth.isauthenticated ? (
    <div className="flex w-full justify-between my-3">
      <div className="flex items-center gap-3">
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>{auth.user.name}</p>
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
