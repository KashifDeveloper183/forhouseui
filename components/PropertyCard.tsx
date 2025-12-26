export default function NewBuildingsUAE() {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      price: "from AED 3M",
      title: "DAMAC Islands",
      location: "Dubai, Dubailand",
      desc:
        "The new DAMAC Islands community presents a refined selection of 4 and 5-bedroom townhouses...",
      developer: "DAMAC",
    },
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      price: "Available by request",
      title: "Damac Riverside",
      location: "Dubai, Dubai Investment Park, Dubailand",
      desc:
        "Riverside, a project developed by Damac Properties is a premium collection...",
      developer: "DAMAC",
    },
    {
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      price: "AED 2M–11M",
      title: "Sobha One",
      location: "Dubai, MBR City, Ras Al Khor",
      desc:
        "Sobha One is located within Sobha Hartland, in Mohammed Bin Rashid Al Maktoum City...",
      developer: "Sobha Realty",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">

      {/* ===== Breadcrumb (ONCE) ===== */}
      <div className="flex gap-2 text-sm text-gray-500 mb-4">
        <span className="bg-gray-100 px-2 py-1 rounded">Find properties</span>
        <span>›</span>
        <span className="bg-gray-100 px-2 py-1 rounded">UAE</span>
        <span>›</span>
        <span className="bg-gray-100 px-2 py-1 rounded font-medium text-black">
          New buildings
        </span>
      </div>

      {/* ===== Title (ONCE) ===== */}
      <h1 className="text-2xl font-bold mb-6">
        929 buildings - UAE
      </h1>

      {/* ===== City Cards (ONCE) ===== */}
      <div className="flex flex-wrap gap-4 mb-8">
        {[
          ["Dubai", "from AED 435,000", "751 new buildings"],
          ["Abu Dhabi", "from AED 730,106", "52 new buildings"],
          ["Ras al-Khaimah", "from AED 691,000", "36 new buildings"],
          ["Sharjah", "from AED 800,000", "16 new buildings"],
          ["Ajman", "from AED 896,000", "3 new buildings"],
        ].map(([city, price, count]) => (
          <div key={city} className="bg-gray-100 rounded-xl px-5 py-4 min-w-[200px]">
            <p className="font-semibold">{city}</p>
            <p className="font-semibold text-sm">{price}</p>
            <p className="text-sm text-gray-500">{count}</p>
          </div>
        ))}
      </div>

      {/* ===== Sort (ONCE) ===== */}
      <div className="flex gap-4 text-sm mb-6">
        <span className="font-medium">Sort by:</span>
        <span className="font-bold cursor-pointer">Recommendations</span>
        <span className="cursor-pointer">Price</span>
      </div>

      {/* ===== Property Cards (REPEAT ONLY THIS) ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              className="w-full h-[280px] object-cover rounded-xl"
            />

            <div className="mt-3">
              <p className="font-semibold">{item.price}</p>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.location}</p>
              <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                {item.desc}
              </p>
              <p className="text-xs font-semibold text-gray-500 mt-2">
                {item.developer}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
