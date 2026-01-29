"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  images: string[];
  initialIndex: number;
};

export function ImageGalleryDialog({
  open,
  onOpenChange,
  images,
  initialIndex,
}: Props) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          flex items-center justify-center
          w-screen h-[100dvh]
          md:h-[80vh] md:max-w-[800px]
          p-0 bg-black border-none
          [&>button]:hidden   /* 🔥 removes shadcn close icon */
        "
      >
        <DialogTitle className="sr-only">Image gallery</DialogTitle>

        <Swiper
          initialSlide={initialIndex}
          slidesPerView={1}
          className="h-full w-full"
          onSlideChange={() => setZoomed(false)} // reset zoom on slide
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="h-full">
              <div
                className="
                  relative h-full w-full
                  flex items-center justify-center
                  overflow-hidden
                "
              >
                <Image
                  src={img}
                  alt={`Image ${index + 1}`}
                  fill
                  sizes="100vw"
                  priority={index === initialIndex}
                  onClick={() => setZoomed(!zoomed)}
                  className={`
                    object-contain
                    transition-transform duration-300 ease-in-out
                    cursor-zoom-${zoomed ? "out" : "in"}
                    ${zoomed ? "scale-150" : "scale-100"}
                  `}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </DialogContent>
    </Dialog>
  );
}
