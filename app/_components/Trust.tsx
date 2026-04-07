import { Button, Card, Container } from "@/components/ui";

export default function Trust() {
  return (
    <section className="bg-neutral-50 py-16">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm text-neutral-500">
            We make it simple, fast, and stress-free.
          </p>
          <h2 className="text-3xl text-neutral-900 font-bold tracking-tight">
            Why Customers Choose Us
          </h2>
          <ul className="mt-6 pl-5 list-disc marker:text-neutral-300">
            <li className="mt-2 text-sm text-neutral-600">
              Same-day solutions — no waiting
            </li>
            <li className="mt-2 text-sm text-neutral-600">
              Better prices than big stores
            </li>
            <li className="mt-2 text-sm text-neutral-600">
              Huge selection in-store
            </li>
            <li className="mt-2 text-sm text-neutral-600">
              Installation available on-site
            </li>
            <li className="mt-2 text-sm text-neutral-600">
              Friendly, real customer service
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
