import { Card, CardContent, CardHeader, Container } from "@/components/ui";
import Image from "next/image";

export const CATEGORIES: {
  name: string;
  description: string;
  image?: string;
}[] = [
  {
    name: "📱 Phones",
    description: "New & used smartphones at great prices",
    image: "/categories/orange-phones.jpg",
  },
  {
    name: "📺 TVs",
    description: "Affordable TVs ready for pickup today",
    image: "/categories/orange-tvs.jpg",
  },
  {
    name: "🔊 Car Audio",
    description: "Speakers, subwoofers & full sound systems",
    image: "/categories/orange-car_audios.jpg",
  },
  {
    name: "🔌 Accessories",
    description: "Cases, chargers, cables & more",
    image: "/categories/orange-accessories.jpg",
  },
];

export default function Categories() {
  return (
    <section className="bg-neutral-50 py-16">
      <Container>
        <header className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            What Are You Looking For?
          </h2>
          <p className="mt-2 text-gray-600">
            Find what you need quickly and easily
          </p>
        </header>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {cat.image && (
                <div className="overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={900}
                    height={900}
                    className="h-40 w-full object-cover group-hover:scale-105 transition duration-300 bg-linear-to-t from-black/40 to-transparent"
                  />
                </div>
              )}

              {/* <Card> */}
              <CardHeader>{cat.name}</CardHeader>
              <CardContent>{cat.description}</CardContent>
              {/* </Card> */}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
