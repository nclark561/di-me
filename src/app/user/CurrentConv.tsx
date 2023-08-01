"use client";
import { useState, Dispatch, SetStateAction } from "react";

interface CurrentConvProps {
  currConv: Partial<Conversation>;
  setCurrConv: Dispatch<SetStateAction<Partial<Conversation>>>;
}

export default function CurrentConv(props: CurrentConvProps) {
  return props.currConv.user2Name ? (
    <div className="w-[100%] flex flex-col items-center">
      <h1 className="text-[24pt] m-[2vh]">{props.currConv.user2Name}</h1>
      <p>{props.currConv.recentMessage}</p>
    </div>
  ) : (
    <div className="w-[100%] flex items-center justify-center text-center">
      <h1 className="text-[22pt] text-gray-500">No conversation selected</h1>
    </div>
  );
}
