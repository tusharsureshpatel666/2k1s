import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { conversationId, text } = await req.json();

  const message = await prisma.messages.create({
    data: {
      conversationId,
      senderId: session.user.id,
      text,
    },
    include: {
      sender: {
        select: { id: true, name: true, image: true },
      },
    },
  });

  // 🔔 Create notification for other user
  const conversation = await prisma.conversation.findUnique({
    where: { id: conversationId },
  });

  const receiverId =
    conversation?.ownerId === session.user.id
      ? conversation?.userId
      : conversation?.ownerId;

  if (receiverId) {
    await prisma.notification.create({
      data: {
        userId: receiverId,
        type: "MESSAGE",
        message: "New message received",
      },
    });
  }

  return NextResponse.json(message);
}
