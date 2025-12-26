"use client";
import { useState, useRef, useEffect } from "react";

export default function TopBar() {
  /* ---------- STATES ---------- */
  const [langOpen, setLangOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("AED");
  const [unit, setUnit] = useState("sqm");

  const langRef = useRef<HTMLDivElement | null>(null);
  const settingsRef = useRef<HTMLDivElement | null>(null);

  /* ---------- OUTSIDE CLICK ---------- */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !langRef.current?.contains(target) &&
        !settingsRef.current?.contains(target)
      ) {
        setLangOpen(false);
        setSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="bg-black h-8 sm:h-9 text-white">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8 lg:px-16 h-full flex items-center justify-between">

        {/* LEFT */}
        <span className="font-semibold text-xs sm:text-sm">
          For Business
        </span>

        {/* RIGHT */}
        <div className="flex items-center gap-3 sm:gap-6 relative">

          {/* ================= LANGUAGE ================= */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => {
                setLangOpen(!langOpen);
                setSettingsOpen(false);
              }}
              className="flex items-center gap-1 text-xs sm:text-sm font-semibold cursor-pointer"
            >
              <i className="fas fa-globe text-xs sm:text-sm" />
              <span className="hidden sm:inline">{language}</span>
              <i
                className={`fas fa-chevron-${langOpen ? "up" : "down"} text-[9px]`}
              />
            </button>

            {langOpen && (
              <div className="
                absolute right-0 mt-2 sm:mt-3
                w-[180px] sm:w-[200px]
                bg-white text-black
                rounded-xl sm:rounded-2xl
                shadow-xl py-2 z-50
              ">
                {[
                  "English",
                  "Español",
                  "Français",
                  "Deutsch",
                  "Русский",
                  "Türkçe",
                ].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setLangOpen(false);
                    }}
                    className="w-full px-3 sm:px-4 py-2 flex items-center justify-between text-xs sm:text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    <span>{lang}</span>
                    {language === lang && (
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ================= SETTINGS ================= */}
          <div ref={settingsRef} className="relative">
            <button
              onClick={() => {
                setSettingsOpen(!settingsOpen);
                setLangOpen(false);
              }}
              className="flex items-center gap-1 text-xs sm:text-sm font-semibold cursor-pointer"
            >
              <i className="fas fa-cog text-xs sm:text-sm" />
              <span className="hidden sm:inline">Settings</span>
              <i
                className={`fas fa-chevron-${settingsOpen ? "up" : "down"} text-[9px]`}
              />
            </button>

            {settingsOpen && (
              <div className="
                absolute right-0 mt-2 sm:mt-3
                w-[260px] sm:w-[320px]
                bg-white text-black
                rounded-xl sm:rounded-2xl
                shadow-xl p-4 sm:p-5 z-50
              ">
                {/* Currency */}
                <div className="mb-4 sm:mb-5">
                  <p className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3">
                    Currency
                  </p>

                  {["AED", "EUR", "USD", "RUB"].map((cur) => (
                    <div
                      key={cur}
                      onClick={() => setCurrency(cur)}
                      className="flex items-center gap-3 py-1.5 sm:py-2 text-xs sm:text-sm cursor-pointer"
                    >
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center
                          ${
                            currency === cur
                              ? "border-[#C9A24D]"
                              : "border-gray-300"
                          }`}
                      >
                        {currency === cur && (
                          <span className="w-2 h-2 rounded-full bg-[#C9A24D]" />
                        )}
                      </span>
                      {cur}
                    </div>
                  ))}
                </div>

                {/* Units */}
                <div className="mb-5 sm:mb-6">
                  <p className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3">
                    Units
                  </p>

                  <div
                    onClick={() => setUnit("sqm")}
                    className="flex items-center gap-3 py-1.5 sm:py-2 text-xs sm:text-sm cursor-pointer"
                  >
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center
                        ${
                          unit === "sqm"
                            ? "border-[#C9A24D]"
                            : "border-gray-300"
                        }`}
                    >
                      {unit === "sqm" && (
                        <span className="w-2 h-2 rounded-full bg-[#C9A24D]" />
                      )}
                    </span>
                    Square meters
                  </div>

                  <div
                    onClick={() => setUnit("sqft")}
                    className="flex items-center gap-3 py-1.5 sm:py-2 text-xs sm:text-sm cursor-pointer"
                  >
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center
                        ${
                          unit === "sqft"
                            ? "border-[#C9A24D]"
                            : "border-gray-300"
                        }`}
                    />
                    Square feet
                  </div>
                </div>

                {/* Save */}
                <button
                  className="w-full h-10 sm:h-11 bg-[#2A2A2A] text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold cursor-pointer"
                >
                  Save settings
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
