'use client'
import { useState } from "react";
import Header from "./Header";
import Conversations from "./Conversations";
import Footer from "./Footer";
import CurrentConv from "./CurrentConv";

export default function UserPage() {
  const [currConv, setCurrConv] = useState<Partial<Conversation>>({});

  return (
    <main className="flex flex-col">
      <Header/>
      <div className="flex h-[75vh]">
        <Conversations currConv={currConv} setCurrConv={setCurrConv}/>
        <CurrentConv currConv={currConv} setCurrConv={setCurrConv}/>
      </div>
      <Footer/>
    </main>
  );
}
