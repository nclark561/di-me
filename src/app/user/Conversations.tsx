"use client";
import { useState, useEffect } from "react";

export default function Conversations() {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    setConversations([
      {
        user1Id: 1,
        user2Id: 2,
        user1Name: 'Noah',
        user2Name: 'Weenie Man',
        recentMessage: 'what u tryna do today'
      },
      {
        user1Id: 1,
        user2Id: 3,
        user1Name: 'Noah',
        user2Name: 'Frosty',
        recentMessage: 'Happy Birthday'
      },
      {
        user1Id: 1,
        user2Id: 4,
        user1Name: 'Noah',
        user2Name: 'Jack',
        recentMessage: 'This is Halloween'
      }
    ])
  }, [])  
  return (
    <section className="flex flex-col border-r border-white h-[100%]">
      {conversations.map((conv) => {
        return (
          <div className="px-[2vw] border-b border-white cursor-pointer hover:bg-gray-800">
            <h1 className="mt-[1vh]">{conv.user2Name}</h1>
            <p className="mb-[1vh] text-gray-500">{conv.recentMessage}</p>
          </div>
        );
      })}
    </section>
  );
}
