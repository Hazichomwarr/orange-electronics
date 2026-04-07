import { Container } from "@/components/ui";

const testimonials = [
  {
    name: "James K.",
    text: "Great prices and they helped me choose the right phone. Highly recommend.",
  },
  {
    name: "Maria S.",
    text: "Got my car speakers installed the same day. Sounds amazing.",
  },
  {
    name: "David L.",
    text: "Fast service and very helpful staff.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-neutral-50 py-20">
      <Container>
        {/* header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-neutral-600">
            Real experiences from people in your community.
          </p>
        </div>

        {/* testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-neutral-200 p-6 shadow-sm"
            >
              <p className="text-sm text-neutral-700 leading-relaxed">
                “{t.text}”
              </p>

              <p className="mt-4 text-sm font-semibold text-neutral-900">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
