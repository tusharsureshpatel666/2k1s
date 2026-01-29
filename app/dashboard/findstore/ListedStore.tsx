"use client";

import { getAllStores } from "@/lib/query/allstore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ListedStore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getall = async () => {
      const store = await getAllStores();
      setData(store);
    };
    getall();
  }, []);

  return (
    <div className="mx-auto max-w-7xl lg:px-4 px-0 py-8">
      {/* Grid */}
      <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <Link
            href={`/dashboard/store/${item.id}`}
            key={item.id}
            className="group cursor-pointer overflow-hidden  mb-4"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                width={400}
                height={400}
                src={item.bannerImageUrl || "/placeholder.jpg"}
                alt={item.title}
                className="h-full w-full object-cover transition-transform rounded-2xl duration-300 group-hover:scale-105"
              />

              {/* Rating */}
              {/* {item.rating && (
                <div className="absolute right-3 top-3 rounded-full bg-white px-2 py-1 text-xs font-semibold shadow">
                  ⭐ {item.rating}
                </div>
              )} */}
            </div>

            {/* Content */}
            <div className="mt-3 space-y-1">
              <h3 className="md:text-sm text-xs  font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-xs text-gray-500">{item.location}</p>

              <p className="md:text-sm text-xs font-medium text-gray-900">
                ₹{item.priceInr}
                <span className="text-gray-500"> / month</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListedStore;
