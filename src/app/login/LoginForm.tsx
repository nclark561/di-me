"use client";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../context/AuthStore";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const authCtx = useAuthContext();
  const router = useRouter()

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    let body = { username, password };

    axios
      .post(`/api/${register ? "register" : "login"}`, body)
      .then(res => {
        //@ts-ignore
        authCtx.login(res.data.token, res.data.exp, res.data.id)
        router.push('/user')
      })
      .catch(err => {
        console.error(err)
        alert(err.message)
      });
  };

  const handleClick = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    setRegister((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-md flex flex-col justify-center items-center p-2">
      <div className="user-box">
        <input
          className="mt-4 mb-4 bg-black focus:outline-none text-white border-b w-[18vw]"
          type="text"
          name="username"
          required={true}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="username">Username</label>
      </div>
      <div className="user-box">
        <input
          className="mt-4 mb-4 bg-black focus:outline-none text-white border-b w-[18vw]"
          type="password"
          name="password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">Password</label>
      </div>
      <button type="submit" className="my-2 border btn text-white p-1 rounded-md w-[8vw]">{register ? "register" : "login"}</button>
      <button onClick={handleClick} className="text-white m-2 anime">
        {register
          ? "already have an account? login here"
          : "don't have an account? register here"}
      </button>
    </form>
  );
}