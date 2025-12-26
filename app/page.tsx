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
      <PropertyCard/>

    </main>
  );
}
