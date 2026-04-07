import { Container } from "@/components/ui";
import Image from "next/image";

export default function Trust2() {
  return (
    <section className="bg-orange-50 py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* header */}
          <header>
            <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
              Trusted by the Orange Community
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">
              Why Customers Choose Us
            </h2>

            {/* list */}
            <ul className="mt-8 space-y-4 text-neutral-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                Same-day solutions — no waiting
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                Better prices than big stores
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                Huge selection in-store
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                Installation available on-site
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                Friendly, real customer service
              </li>
            </ul>
          </header>
          <div className=" overflow-hidden rounded-2xl">
            <Image
              src="/images/orange-customers.jpg"
              alt="customer service"
              width={600}
              height={600}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
