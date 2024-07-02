import { signInActionGoogle } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

const LoginGoogle = () => {
  return (
    <form action={signInActionGoogle}>
      <Button variant="outline" size="icon" className="rounded-full p-1">
        <FcGoogle size={35} />
      </Button>
    </form>
  );
};

export default LoginGoogle;
