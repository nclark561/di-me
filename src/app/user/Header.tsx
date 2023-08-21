"use client";
import { useAuthContext } from "../context/AuthStore";
import { useRouter } from "next/navigation";

export default function Header() {
  const authCtx = useAuthContext();
  const router = useRouter();

  const eight = 8

  const handleClick = () => {
    authCtx.logout();
    router.push("/");
  };

  return (
    <header className="flex justify-between items-center border-b border-white">
      <h1 className="text-[30pt] m-[2vh]">Di Me</h1>
      <button onClick={handleClick} className="anime mr-[2vw]">
        Logout
      </button>
    </header>
  );
}
