"use client";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [countryOpen, setCountryOpen] = useState(false);
  const [country, setCountry] = useState("UAE");

  const countryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!countryRef.current?.contains(e.target as Node)) {
        setCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const countries = [
    { name: "UAE", flag: "🇦🇪" },
    { name: "Turkey", flag: "🇹🇷" },
    { name: "Thailand", flag: "🇹🇭" },
    { name: "Indonesia", flag: "🇮🇩" },
  ];

  return (
    <header className="bg-white  relative z-40">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8 lg:px-16 h-14 sm:h-16 lg:h-20 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4 lg:gap-8">

          {/* LOGO */}
          <span className="font-extrabold text-lg lg:text-xl">
            HOUSEARCH
          </span>

          {/* COUNTRY */}
          <div ref={countryRef} className="relative hidden sm:block">
            <button
              onClick={() => setCountryOpen(!countryOpen)}
              className="flex items-center gap-2 font-semibold text-sm lg:text-base cursor-pointer"
            >
              <span className="hidden md:inline">Country</span>
              <span className="text-xl">
                {countries.find(c => c.name === country)?.flag}
              </span>
              <span className="hidden md:inline">{country}</span>
              <i
                className={`fas fa-chevron-${countryOpen ? "up" : "down"} text-xs`}
              />
            </button>

            {/* DROPDOWN */}
            {countryOpen && (
              <div className="absolute left-0 mt-3 w-56 bg-white rounded-2xl shadow-xl py-2">
                {countries.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => {
                      setCountry(c.name);
                      setCountryOpen(false);
                    }}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-100 text-sm cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{c.flag}</span>
                      <span className="font-medium">{c.name}</span>
                    </div>

                    {country === c.name && (
                      <i className="fas fa-check text-black text-sm"></i>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* RIGHT NAV */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-7 font-semibold text-sm lg:text-base">
          <a className="hover:text-gray-500 cursor-pointer">New buildings</a>
          <a className="hover:text-gray-500 cursor-pointer">Buy</a>
          <a className="hover:text-gray-500 cursor-pointer">Rent</a>
          <a className="hover:text-gray-500 hidden lg:block cursor-pointer">Blog</a>
          <a className="hover:text-gray-500 hidden lg:block cursor-pointer">Markets</a>
        </nav>

        {/* MOBILE ICON */}
        <button className="md:hidden cursor-pointer">
          <i className="fas fa-bars text-lg"></i>
        </button>

      </div>
    </header>
  );
}
