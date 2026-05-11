// app/_components/Categories.tsx

import { Container } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

const featuredCategories = [
  {
    name: "Phones & Tablets",
    desc: "New & used smartphones",
    image: "/categories/orange-phones.jpg",
    slug: "phones",
  },
  {
    name: "Bluetooth Speakers",
    desc: "Portable speakers & premium sound",
    image: "/categories/orange-speakers.jpg",
    slug: "bluetooth-speakers",
  },
  {
    name: "TVs",
    desc: "Affordable TVs ready today",
    image: "/categories/orange-tvs.jpg",
    slug: "tvs",
  },
  {
    name: "Gaming",
    desc: "PS5, Xbox & gaming gear",
    image: "/categories/orange-gaming.jpg",
    slug: "gaming",
  },
  {
    name: "Car Audio",
    desc: "Speakers & sound systems",
    image: "/categories/orange-car-audio.jpg",
    slug: "car-audio",
  },
  {
    name: "Accessories",
    desc: "Chargers, cases & more",
    image: "/categories/orange-accessories.jpg",
    slug: "accessories",
  },
];

const secondaryCategories = [
  "headphones",
  "laptops",
  "car-alarms",
  "dj-stuff",
  "ebikes",
  "scooters",
];

export default function Categories() {
  return (
    <section id="category" className="bg-neutral-50 py-20">
      <Container>
        {/* HEADER */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              What Are You Looking For?
            </h2>

            <p className="mt-3 text-neutral-600">
              Browse categories and find what you need fast.
            </p>
          </div>

          {/* Shopify link */}
          <a
            href="https://orange-electronics-5815.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-orange-600 hover:text-orange-700"
          >
            🛒 Prefer shopping online?
          </a>
        </div>

        {/* FEATURED GRID */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* image */}
              <div className="overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={800}
                  height={500}
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {cat.name}
                </h3>

                <p className="mt-1 text-sm text-neutral-600">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* SECONDARY CATEGORIES */}
        <div className="mt-10">
          <p className="text-sm font-medium text-neutral-500">
            More Categories
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {secondaryCategories.map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat}`}
                className="rounded-full bg-white px-4 py-2 text-sm text-neutral-700 shadow-sm hover:bg-neutral-100 transition"
              >
                {cat.replaceAll("-", " ")}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
