"use client";
import { useAuthContext } from "../context/AuthStore";
import { useRouter } from "next/navigation";

export default function UserPage() {
  const authCtx = useAuthContext();
  const router = useRouter();

  const handleClick = () => {
    authCtx.logout();
    router.push("/login");
  };

  return (
    <main>
      <h1>UserPage</h1>
      <button onClick={handleClick}>Logout</button>
    </main>
  );
}
