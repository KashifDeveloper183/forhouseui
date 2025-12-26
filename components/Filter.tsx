"use client";

import { useState, useRef, useEffect } from "react";

type OpenType = "bedrooms" | "price" | "more" | null;

export default function Filters() {
  const [open, setOpen] = useState<OpenType>(null);

  const bedroomsRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        bedroomsRef.current &&
        !bedroomsRef.current.contains(e.target as Node) &&
        priceRef.current &&
        !priceRef.current.contains(e.target as Node) &&
        moreRef.current &&
        !moreRef.current.contains(e.target as Node)
      ) {
        setOpen(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const bedrooms = ["Studio", "1", "2", "3", "4+"];

  const Arrow = ({ active }: { active: boolean }) => (
    <svg
      className={`w-3 h-3 transition-transform ${
        active ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-16 py-4">
          <div className="flex items-center gap-3">

            {/* SEARCH */}
            <div className="flex items-center bg-gray-100 py-7 px-4 h-10 flex-1 rounded-[12px]">
              <svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              <input
                placeholder="Region, district, or project"
                className="bg-transparent outline-none w-full text-sm py-7"
              />
            </div>

            {/* BEDROOMS */}
            <div className="relative" ref={bedroomsRef}>
              <button
                onClick={() =>
                  setOpen(open === "bedrooms" ? null : "bedrooms")
                }
                className="bg-gray-100 px-4 h-10 py-7 rounded-[12px] text-sm font-semibold flex items-center gap-2 hover:bg-gray-200"
              >
                Bedrooms
                <Arrow active={open === "bedrooms"} />
              </button>

              {open === "bedrooms" && (
                <div className="absolute top-12 left-0 w-[340px] bg-white rounded-[20px] shadow-2xl border p-5 z-50">
                  <h4 className="font-semibold mb-4">Bedrooms</h4>

                  <div className="flex flex-wrap gap-2">
                    {bedrooms.map(b => (
                      <button
                        key={b}
                        className="px-4 py-2 rounded-full text-sm border border-gray-300 hover:border-black cursor-pointer flex items-center justify-center"
                      >
                        {b}
                      </button>
                    ))}
                  </div>

                  <button className="mt-5 w-full bg-black text-white py-3 rounded-[14px] font-semibold flex items-center justify-center">
                    Show 929 new buildings
                  </button>
                </div>
              )}
            </div>

            {/* PRICE */}
            <div className="relative" ref={priceRef}>
              <button
                onClick={() => setOpen(open === "price" ? null : "price")}
                className="bg-gray-100 px-4 h-10 py-7 rounded-[12px] text-sm font-semibold flex items-center gap-2 hover:bg-gray-200"
              >
                Price, AED
                <Arrow active={open === "price"} />
              </button>

              {open === "price" && (
                <div className="absolute top-12 left-0 w-[320px] bg-white rounded-[20px] shadow-2xl border p-5 z-50">
                  <h4 className="font-semibold mb-4">Price, AED</h4>

                  <div className="space-y-3">
                    <input
                      placeholder="Min"
                      className="w-full bg-gray-100 rounded-[12px] px-4 py-3 text-sm outline-none"
                    />
                    <input
                      placeholder="Max"
                      className="w-full bg-gray-100 rounded-[12px] px-4 py-3 text-sm outline-none"
                    />
                  </div>

                  <button className="mt-5 w-full bg-black text-white py-3 rounded-[14px] font-semibold flex items-center justify-center">
                    Show 929 new buildings
                  </button>
                </div>
              )}
            </div>

            {/* MORE FILTERS */}
            <button
              onClick={() => setOpen("more")}
              className="bg-gray-100 px-4 h-10 py-7 rounded-[12px] text-sm font-semibold flex items-center gap-2 hover:bg-gray-200"
            >
              More filters
              <Arrow active={open === "more"} />
            </button>

            {/* MAP */}
            <div className="ml-auto flex items-center gap-2 cursor-pointer">
              <span className="text-sm font-semibold">Map</span>
              <div className="w-10 h-6 bg-gray-200 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MORE FILTERS MODAL */}
      {open === "more" && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40"></div>

          <div
            ref={moreRef}
            className="relative bg-white w-[420px] rounded-[20px] shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setOpen(null)}
                className="text-2xl leading-none flex items-center justify-center w-8 h-8"
              >
                ×
              </button>
            </div>

            {/* BODY */}
            <div className="p-6 space-y-6">
              <div>
                <p className="text-sm font-semibold mb-3">
                  Types of properties
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Any",
                    "Apartment",
                    "Duplex",
                    "Townhouse",
                    "Villa",
                    "Houses",
                  ].map(i => (
                    <button
                      key={i}
                      className={`px-3 py-1.5 rounded-full text-sm border flex items-center justify-center ${
                        i === "Any"
                          ? "bg-black text-white border-black"
                          : "border-gray-300 hover:border-black"
                      }`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="p-6 border-t">
              <button className="w-full bg-black text-white py-3 rounded-[14px] font-semibold flex items-center justify-center">
                Show 929 new buildings
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
