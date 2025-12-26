import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import Filter from "@/components/Filter";

const dummyProperties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=600&h=400",
    title: "Modern Apartment",
    location: "Downtown City",
    price: "$450,000",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400",
    title: "Luxury Villa",
    location: "Suburban Hills",
    price: "$850,000",
    bedrooms: 5,
    bathrooms: 3,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400",
    title: "Cozy House",
    location: "Residential Area",
    price: "$350,000",
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1576676626844-76f3b3d0ab60?w=600&h=400",
    title: "Penthouse Suite",
    location: "City Center",
    price: "$1,200,000",
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1512917774080-9b274b3001be?w=600&h=400",
    title: "Beach House",
    location: "Coastal Area",
    price: "$650,000",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400",
    title: "Garden Estate",
    location: "Countryside",
    price: "$550,000",
    bedrooms: 4,
    bathrooms: 2,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <Filter />

      <section className="py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {dummyProperties.map((property) => (
              <PropertyCard
                key={property.id}
                image={property.image}
                title={property.title}
                location={property.location}
                price={property.price}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
