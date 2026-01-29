"use client";

import { useEffect, useRef, useState } from "react";
import { Search, MapPin } from "lucide-react";

export default function SearchBox() {
  const inputRef = useRef(null);
  const serviceRef = useRef(null);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // New Delhi bounds
  const NEW_DELHI_BOUNDS = {
    north: 28.88,
    south: 28.4,
    east: 77.35,
    west: 76.84,
  };

  // Load Google Places service
  useEffect(() => {
    if (window.google) {
      serviceRef.current = new window.google.maps.places.AutocompleteService();
    }
  }, []);

  // Search places
  const searchPlaces = (value) => {
    if (!value || !serviceRef.current) {
      setResults([]);
      return;
    }

    setLoading(true);

    serviceRef.current.getPlacePredictions(
      {
        input: value,
        componentRestrictions: { country: "in" },
        bounds: NEW_DELHI_BOUNDS,
        strictBounds: true,
        types: ["geocode"],
      },
      (predictions) => {
        setResults(predictions || []);
        setLoading(false);
      },
    );
  };

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Search Container */}
      <div className="flex h-16 items-center rounded-full dark:border-gray-900 dark:bg-gray-900 border border-gray-300 bg-white shadow-md focus-within:ring-2 focus-within:ring-blue-500">
        {/* Input */}
        <div className="flex flex-1 items-center gap-3 px-6">
          <Search className="h-5 w-5 text-gray-500" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              searchPlaces(e.target.value);
            }}
            placeholder="Search area in New Delhi"
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={() => console.log("Searching for:", query)}
          className="mr-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue-500 text-white transition hover:bg-blue-600"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>

      {/* Dropdown */}
      {results.length > 0 && (
        <div className="absolute z-50 mt-2 w-full max-h-80 overflow-y-auto rounded-xl dark:bg-gray-900 bg-white shadow-lg">
          {results.map((item) => (
            <button
              key={item.place_id}
              onClick={() => {
                setQuery(item.description);
                setResults([]);
              }}
              className="flex w-full  items-start gap-4 px-4 py-3 text-left dark:hover:bg-gray-800 cursor-pointer hover:bg-gray-100"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
                <MapPin className="h-4 w-4 text-gray-600" />
              </div>

              <div>
                <p className="text-sm font-medium">
                  {item.structured_formatting.main_text}
                </p>
                <p className="text-xs text-gray-500">
                  {item.structured_formatting.secondary_text}
                </p>
              </div>
            </button>
          ))}

          {loading && (
            <div className="px-4 py-3 text-sm text-gray-500">Searching...</div>
          )}
        </div>
      )}
    </div>
  );
}
