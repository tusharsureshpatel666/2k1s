"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

export default function ChatPage() {
  const { conversationId } = useParams<{ conversationId: string }>();
  const { data: session } = useSession();

  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!conversationId) return;

    fetch(`/api/message/${conversationId}`)
      .then((res) => res.json())
      .then(setMessages);
  }, [conversationId]);

  const sendMessage = async () => {
    if (!text.trim() || !conversationId) return;

    const res = await fetch("/api/message/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        conversationId,
        text,
      }),
    });

    const newMsg = await res.json();
    setMessages((prev) => [...prev, newMsg]);
    setText("");
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
              msg.senderId === session?.user?.id
                ? "ml-auto bg-black text-white"
                : "bg-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t p-3 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border rounded-md px-3 py-2 text-sm"
        />
        <button
          onClick={sendMessage}
          className="bg-black text-white px-4 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}
