import Image from "next/image";
import { Heart, Share, Star, Trash } from "lucide-react";

import { getStoreById } from "@/lib/query/getstore";
import { auth } from "@/lib/auth";
import DeleteStoreButton from "./components/DeleteStore";
import ShareStore from "./components/ShareStore";
import { findUserById } from "@/lib/findUser";
import LoveStore from "./components/LoveStore";
import { MobileImageSlider } from "./components/MobileNav";
import { DesktopImageGrid } from "./components/Desktopgrid";
import VideoPlay from "./components/videoplay";
import OwnerButton from "./components/OwerButton";
import Heading from "../../components/heading";
import ReserveCard from "./components/priceCard";
import PeopleDesc from "./components/peopleDesc";

interface StorePageProps {
  params: {
    id: string;
  };
}

export default async function StorePage({ params }: StorePageProps) {
  const storeId = await params;
  console.log(storeId.id);

  const userId = await auth();
  console.log(userId?.user?.id);

  if (!storeId) {
    return <div className="p-6">Store not found</div>;
  }

  const fetchStores = async () => {
    const store = await getStoreById(storeId.id);

    console.log(store);
    return store;
  };

  const store = await fetchStores();
  console.log("store", store);
  const OwerDetail = await findUserById(store?.ownerId);
  console.log(OwerDetail);
  const isOwner = (await userId?.user?.id) === (await store?.ownerId);
  console.log(storeId.id, store?.ownerId);

  const allImages = [
    store?.bannerImageUrl,
    ...(store?.images?.map((img) => img.url) || []),
  ].filter(Boolean);

  return (
    <div className="max-w-7xl w-full space-y-6 px-4 sm:px-6 lg:px-0">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold break-words">{store?.title}</h1>

        <div className="flex gap-4 items-center text-sm">
          <ShareStore paramsId={storeId} />
          <LoveStore storeId={storeId.id} initialLiked={userId?.user?.id} />
          {isOwner && <DeleteStoreButton storeId={store?.id} />}
        </div>
      </div>

      {/* ================= IMAGES ================= */}
      <MobileImageSlider images={allImages} />

      <div className="hidden md:block">
        <DesktopImageGrid
          banner={store?.bannerImageUrl || ""}
          images={store?.images.map((img) => img.url) || []}
        />
      </div>

      {/* ================= LOCATION ================= */}
      <Heading
        title={`Rental Store on ${store?.city}`}
        description={`At ${store?.fullAddress}`}
      />

      {/* ================= MAIN CONTENT ================= */}
      <div className="grid grid-cols-1  gap-6 lg:grid-cols-3">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-4">
          <OwnerButton
            image={OwerDetail.image || "/avatar.avif"}
            name={OwerDetail.name || ""}
            createAt={String(store?.createdAt)}
          />

          <PeopleDesc peopleDesc={store?.desc} />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:sticky lg:top-24 w-full h-fit">
          <ReserveCard
            price={store?.priceInr}
            sharetype={store?.shareMode}
            partnerBussiness={store?.businessType}
            days={store?.days}
            startTime={store?.startTime ?? ""}
            endTime={store?.endTime ?? ""}
            dayOrNight={store?.dayOrNight}
          />
        </div>
      </div>
    </div>
  );
}
