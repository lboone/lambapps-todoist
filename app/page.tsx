import LoginForm from "@/components/lambapps-todoist/login-form";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-2 justify-between p-24">
      <h1>lambapps.todoist</h1>
      <LoginForm />
    </main>
  );
}
