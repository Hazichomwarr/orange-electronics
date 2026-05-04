import { notFound } from "next/navigation";
import Link from "next/link";
import { productCatalog } from "@/lib/products";
import SelectedCatgory from "@/app/_components/SelectedCategory";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filtered = productCatalog.filter((p) => p.category === slug);

  if (filtered.length === 0) return notFound();

  return (
    <section className="py-12">
      <SelectedCatgory slug={slug} cat={filtered} />
    </section>
  );
}
