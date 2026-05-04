import { Container } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Phones",
    desc: "New & used smartphones",
    image: "/categories/orange-phones.jpg",
    slug: "phones",
  },
  {
    name: "TVs",
    desc: "Affordable TVs ready today",
    image: "/categories/orange-tvs.jpg",
    slug: "tvs",
  },
  {
    name: "Car Audio",
    desc: "Speakers & sound systems",
    image: "/categories/orange-car_audios.jpg",
    slug: "audios",
  },
  {
    name: "Accessories",
    desc: "Chargers, cases & more",
    image: "/categories/orange-accessories.jpg",
    slug: "accessories",
  },
  {
    name: "Computers",
    desc: "Assorted range of premium TVs",
    image: "/categories/orange-tvs.jpg",
    slug: "computers",
  },
];

export default function Categories2() {
  return (
    <section id="category" className="bg-neutral-50 py-20">
      <Container>
        {/* header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            What Are You Looking For?
          </h2>
          <div className="w-full flex justify-between items-center">
            <p className="mt-3 text-neutral-600">
              Browse categories and find what you need fast.
            </p>
            <a
              href="https://orange-electronics-5815.myshopify.com"
              target="_blank"
              className="text-neutral-600 underline hover:text-neutral-900"
            >
              shop online →
            </a>
          </div>
        </div>

        {/* grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
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
            </Link>
          ))}
          <Link
            href="https://orange-electronics-5815.myshopify.com"
            className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="overflow-hidden">
              <Image
                src="/categories/orange-car_audios.jpg"
                alt="Speakers"
                width={800}
                height={500}
                className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-neutral-900">
                Speakers & Gears
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                Speakers description here
              </p>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
