interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
}

export default function PropertyCard({
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
}: PropertyCardProps) {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover" />
      <div className="p-3 sm:p-4 md:p-5 lg:p-6">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black mb-1 sm:mb-2">{title}</h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3">{location}</p>
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">{price}</span>
        </div>
        <div className="flex justify-between text-gray-700 text-xs sm:text-sm md:text-base">
          <span>{bedrooms} Bedrooms</span>
          <span>{bathrooms} Bathrooms</span>
        </div>
      </div>
    </div>
  );
}
