import { Container, Button } from "@/components/ui";
import Image from "next/image";

export default function Hero2() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT */}
          <div className="max-w-xl">
            {/* urgency tag */}
            <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
              Same-Day Service Available
            </p>

            {/* headline */}
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight text-neutral-900">
              Phones, TVs & Sound Systems — Ready Today
            </h1>

            {/* subtext */}
            <p className="mt-5 text-lg text-neutral-600">
              Fast, affordable electronics in Orange, NJ. Walk in and get what
              you need — no waiting.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:+11234567890">
                <Button className="px-6 py-3 text-base font-semibold">
                  📞 Call Now
                </Button>
              </a>

              <a href="#">
                <Button
                  variant="secondary"
                  className="px-6 py-3 text-base font-semibold"
                >
                  📍 Get Directions
                </Button>
              </a>
            </div>

            {/* micro trust */}
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-neutral-500">
              <span>Walk-ins welcome</span>
              <span>•</span>
              <span>Installation available</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <Image
              src="/images/orange-hero3.jpg"
              alt="Orange Electronics store"
              width={800}
              height={600}
              className="rounded-xl object-cover shadow-sm"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
