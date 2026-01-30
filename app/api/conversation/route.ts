import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { storeId, ownerId } = await req.json();
  const userId = session.user.id;

  if (userId === ownerId) {
    return NextResponse.json({ error: "Invalid Chat" }, { status: 401 });
  }
  let conversation = await prisma.conversation.findFirst({
    where: {
      storeId,
      ownerId,
      userId,
    },
  });

  if (!conversation) {
    conversation = await prisma.conversation.create({
      data: {
        storeId,
        ownerId,
        userId,
      },
    });
  }
  return NextResponse.json(conversation);
}
