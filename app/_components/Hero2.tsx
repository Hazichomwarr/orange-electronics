import { Container, Button } from "@/components/ui";
import {
  BUSINESS_LOCATION,
  BUSINESS_PHONE,
  BUSINESS_SHOPIFY_LINK,
} from "@/lib/businessInfo";
import Image from "next/image";

export default function Hero2() {
  return (
    <section id="hero" className="relative bg-orange-50 py-20 md:py-28">
      {/* subtle overlay
      <div className="absolute inset-0 bg-black/10 transition" /> */}
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
              <a href={BUSINESS_PHONE}>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-7 py-3.5 text-base font-semibold shadow-md">
                  📞 Call Now
                </Button>
              </a>

              <a
                href={BUSINESS_LOCATION}
                target="_blank"
                rel="noopener noreferrer"
              >
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

            <a
              href={BUSINESS_SHOPIFY_LINK}
              target="_blank"
              className="text-sm text-neutral-600 underline hover:text-neutral-900"
            >
              shop our speakers online? Browse our store →
            </a>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <Image
              src="/images/orange-hero3.jpg"
              alt="Orange Electronics store"
              width={800}
              height={600}
              className="rounded-xl object-cover shadow-sm"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
