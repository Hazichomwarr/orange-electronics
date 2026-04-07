import { Container, Button } from "@/components/ui";

const services = [
  {
    title: "Phone Repair",
    desc: "Cracked screen? We fix it fast.",
  },
  {
    title: "Phone Unlocking",
    desc: "Switch carriers easily.",
  },
  {
    title: "Car Audio Installation",
    desc: "Professional setup for your sound system.",
  },
  {
    title: "Setup & Support",
    desc: "We help you get everything working.",
  },
];

export default function Service2() {
  return (
    <section className="bg-white py-20">
      <Container>
        {/* header */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            We Don’t Just Sell — We Help
          </h2>
          <p className="mt-3 text-neutral-600">
            Fast solutions when you need them most.
          </p>
        </div>

        {/* services */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-neutral-200 p-6 transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-neutral-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a href="tel:+11234567890">
            <Button className="px-6 py-3 text-base font-semibold">
              📞 Call Now for Fast Service
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
