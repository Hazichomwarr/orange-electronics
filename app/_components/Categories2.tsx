import { Container } from "@/components/ui";
import Image from "next/image";

const categories = [
  {
    name: "Phones",
    desc: "New & used smartphones",
    image: "/categories/orange-phones.jpg",
  },
  {
    name: "TVs",
    desc: "Affordable TVs ready today",
    image: "/categories/orange-tvs.jpg",
  },
  {
    name: "Car Audio",
    desc: "Speakers & sound systems",
    image: "/categories/orange-car_audios.jpg",
  },
  {
    name: "Accessories",
    desc: "Chargers, cases & more",
    image: "/categories/orange-accessories.jpg",
  },
];

export default function Categories2() {
  return (
    <section className="bg-neutral-50 py-20">
      <Container>
        {/* header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            What Are You Looking For?
          </h2>
          <p className="mt-3 text-neutral-600">
            Browse categories and find what you need fast.
          </p>
        </div>

        {/* grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={800}
                  height={500}
                  className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
