export default function Filters() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4">
        {/* Mobile: Stack layout, Desktop: Flex layout */}
        <div className="flex flex-col lg:flex-row lg:items-center w-full gap-2 sm:gap-3">

          {/* SEARCH */}
          <div className="flex items-center gap-2 bg-gray-100 px-3 sm:px-4 py-2 sm:py-3 h-10 sm:h-11 flex-1 min-w-0 sm:min-w-[280px] rounded-[12px]">
            {/* Search Icon (BLACK) */}
            <svg
              className="w-4 h-4 text-black flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>

            {/* Input */}
            <input
              type="text"
              placeholder="Region, district, or project"
              className="
                bg-transparent outline-none w-full py-2 sm:py-3
                text-sm sm:text-base font-normal text-black
                placeholder:text-gray-400
              "
            />
          </div>

          {/* FILTER PILLS - Responsive Grid on Mobile */}
          <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3">
            <FilterPill label="Bedrooms" />
            <FilterPill label="Price, AED" />
            <FilterPill label="More filters" />
          </div>

          {/* MAP TOGGLE - Hidden on small screens, visible on larger */}
          <div className="hidden md:flex items-center gap-2 lg:ml-auto mt-2 md:mt-0">
            <span className="text-sm sm:text-base font-semibold text-black">
              Map
            </span>

            <div className="w-10 h-6 bg-gray-200 rounded-full relative cursor-pointer">
              <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function FilterPill({ label }: { label: string }) {
  return (
    <button
      className="
        flex items-center gap-2
        bg-gray-100 px-3 sm:px-4 py-2 sm:py-3 h-10 sm:h-11
        text-sm sm:text-base font-semibold text-black
        whitespace-nowrap rounded-[12px]
        hover:bg-gray-200 transition-colors
        flex-shrink-0
      "
    >
      {label}

      {/* Dropdown Arrow */}
      <svg
        className="w-3 h-3 text-black flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}
