'use client'
import { useState } from "react";

export default function CurrentConv() {
  const [currConv, setCurrConv] = useState<Partial<Conversation>>({});

  return (
    <div className="w-[100%] flex items-center justify-center text-center">
      <h1 className="text-[22pt] text-gray-500">No conversation selected</h1>
    </div>
  );
}
