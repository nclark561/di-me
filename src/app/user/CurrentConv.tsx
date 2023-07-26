import { useState } from "react";

export default function CurrentConv() {
  const [currConv, setCurrConv] = useState<Partial<Conversation>>({});

  return currConv.user2Name ? (
    <div>
      <h1>No conversation selected</h1>
    </div>
  ) : (
    <div>
      <h1>{currConv.user2Name}</h1>
      <div>
        <p>{currConv.recentMessage}</p>
      </div>
    </div>
  );
}
