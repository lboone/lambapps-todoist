import { signInActionGoogle, signInActionGithub } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-2 justify-between p-24">
      <h1>lambapps.todoist</h1>
      <form action={signInActionGoogle}>
        <Button>Login in Google</Button>
      </form>
      <form action={signInActionGithub}>
        <Button>Login in with GitHub</Button>
      </form>
    </main>
  );
}
