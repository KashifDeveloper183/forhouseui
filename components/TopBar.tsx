export default function TopBar() {
  return (
    <div className="bg-black h-8 sm:h-9 lg:h-10 text-white text-xs">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8 lg:px-16 h-full flex items-center justify-between">

        {/* Left */}
        <span className="font-semibold text-xs sm:text-sm lg:text-base">
          For Business
        </span>

        {/* Right */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">

          {/* Language */}
          <div className="cursor-pointer hover:text-gray-300">
            <span className="font-semibold text-xs sm:text-sm lg:text-base"><i className="fas fa-globe pr-1 sm:pr-2"></i><span className="hidden sm:inline">English</span><i className="fas fa-chevron-down pl-1 sm:pl-1"></i></span>
          </div>

          {/* Settings */}
          <div className="cursor-pointer hover:text-gray-300 hidden sm:block">
            <span className="font-semibold text-xs sm:text-sm lg:text-base"><i className="fas fa-cog pr-1 sm:pr-2"></i><span className="hidden md:inline">Settings</span><i className="fas fa-chevron-down pl-1 sm:pl-1"></i></span>
          </div>

        </div>
      </div>
    </div>
  );
}
