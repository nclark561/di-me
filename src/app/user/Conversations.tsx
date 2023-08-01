"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface ConversationsProps {
  currConv: Partial<Conversation>;
  setCurrConv: Dispatch<SetStateAction<Partial<Conversation>>>;
}

export default function Conversations(props: ConversationsProps) {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  const handleClick = (conv: Conversation) => {
    props.setCurrConv(conv)
  }

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
          <div key={conv.user2Id} className="px-[2vw] border-b border-white cursor-pointer hover:bg-gray-800" onClick={() => handleClick(conv)}>
            <h1 className="mt-[1vh]">{conv.user2Name}</h1>
            <p className="mb-[1vh] text-gray-500 max-w-[12vw] overflow">{conv.recentMessage}</p>
          </div>
        );
      })}
    </section>
  );
}
