"use client";
import { useAuthContext } from "../context/AuthStore";
import { useRouter } from "next/navigation";

export default function Header() {
  const authCtx = useAuthContext();
  const router = useRouter();

  const handleClick = () => {
    authCtx.logout();
    router.push("/");
  };

  return (
    <header className="flex justify-between items-center">
      <h1>Di Me</h1>
      <button onClick={handleClick} className="anime">
        Logout
      </button>
    </header>
  );
}
