"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import LoveStore from "@/app/dashboard/store/[id]/components/LoveStore";

interface StoreCardProps {
  store: {
    id: string;
    title: string;
    bannerImageUrl?: string | null;
    priceInr: number;
  };
}

export default function StoreCard({ store }: StoreCardProps) {
  const { data: session } = useSession();

  return (
    <Link href={`/dashboard/store/${store.id}`} className="group block">
      {/* 🖼 Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl">
        <Image
          src={store.bannerImageUrl || "/placeholder-store.jpg"}
          alt={store.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* 🤍 Save button (Airbnb style) */}
      </div>

      {/* 📄 Text below image */}
      <div className="mt-2 space-y-1">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
          {store.title}
        </h3>

        <p className="text-sm text-gray-800 dark:text-gray-100">
          <span className="font-semibold">₹{store.priceInr}</span>
          <span className="text-gray-500"> / month</span>
        </p>
      </div>
    </Link>
  );
}
