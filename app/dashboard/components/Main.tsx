"use client";

import { useState, useRef } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { Search } from "lucide-react";

const libraries = ["places"];

export default function SearchBox() {
  const [place, setPlace] = useState("");
  const autocompleteRef = useRef(null);

  const onLoad = (autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    const placeObj = autocompleteRef.current.getPlace();
    if (!placeObj.geometry) return;

    setPlace(placeObj.formatted_address);

    console.log({
      name: placeObj.name,
      lat: placeObj.geometry.location.lat(),
      lng: placeObj.geometry.location.lng(),
    });
  };

  const NEW_DELHI_BOUNDS = {
    north: 28.88,
    south: 28.4,
    east: 77.35,
    west: 76.84,
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Search Container */}
        <div className="flex items-center rounded-full border border-gray-300 bg-white shadow-lg ">
          {/* Input */}
          <div className="flex flex-1 items-center gap-3 px-6 lg:py-4 md:py-3 sm:py-2 py-2">
            <Search className="h-5 w-5 text-gray-500" />
            <Autocomplete
              onLoad={onLoad}
              onPlaceChanged={onPlaceChanged}
              options={{
                componentRestrictions: { country: "in" },
                bounds: NEW_DELHI_BOUNDS,
                strictBounds: true,
                types: ["geocode"],
              }}
            >
              <input
                type="text"
                placeholder="Search area in New Delhi"
                className="w-full border-none bg-transparent text-sm outline-none placeholder:text-gray-500"
              />
            </Autocomplete>
          </div>

          {/* Search Button */}
          <button
            onClick={() => console.log("Searching for:", place)}
            className="mr-2 rounded-full bg-blue-500 px-3 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 cursor-pointer"
          >
            <Search />
          </button>
        </div>
      </div>
    </LoadScript>
  );
}
