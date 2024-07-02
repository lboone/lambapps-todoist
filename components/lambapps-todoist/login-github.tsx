import { signInActionGithub } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

const LoginGithub = () => {
  return (
    <form action={signInActionGithub}>
      <Button variant="outline" size="icon" className="rounded-full p-1">
        <FaGithub size={35} />
      </Button>
    </form>
  );
};

export default LoginGithub;
