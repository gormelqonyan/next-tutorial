import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";

export default async function Home() {
  return (
    <>
      <div className={"text-dark-100 pt-12 dark:text-white"}>Home Page</div>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type={"submit"}>Logout</Button>
      </form>
    </>
  );
}
