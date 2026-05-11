import { Container, Button } from "@/components/ui";
import {
  BUSINESS_LOCATION,
  BUSINESS_PHONE,
  BUSINESS_SHOPIFY_LINK,
} from "@/lib/businessInfo";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-orange-50 py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.15fr]">
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
              🛒 Shop speakers, accessories & more online →
            </a>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <Image
              src="/images/orange-hero3.jpg"
              alt="Orange Electronics store"
              width={800}
              height={600}
              className="rounded-2xl object-cover shadow-2xl ring-1 ring-black/5"
              priority
            />
            <div className="absolute top-10 left-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl pointer-events-none" />
            {/* Floating card */}
            <div className="absolute bottom-1 -left-1 bg-white shadow-xl rounded-xl p-4">
              <p className="text-sm font-semibold">⚡ We Buy Gold</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
