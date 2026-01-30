"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MessagePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const storeId = searchParams.get("storeId");
  const ownerId = searchParams.get("ownerId");

  useEffect(() => {
    if (!storeId || !ownerId) return;

    const initChat = async () => {
      const res = await fetch("/api/conversation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ storeId, ownerId }),
      });

      const conversation = await res.json();
      router.push(`/dashboard/message/${conversation.id}`);
    };

    initChat();
  }, [storeId, ownerId, router]);

  return <p className="p-4">Opening chat…</p>;
}
