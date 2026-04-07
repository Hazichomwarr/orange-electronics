import { Button, Container } from "@/components/ui";
import ImageCard from "./ImageCard";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white py-24">
      <Container>
        <div className="grid grid-cols items-center gap-12 md:grid-cols-2">
          <header className="max-w-xl">
            <p className="text-xs font-semibold text-orange-600">
              Same-Day Service Available
            </p>
            <h1 className="mt-2 text-4xl font-bold text-neutral-900">
              Phones, TVs, Sound Systems & Accessories — Ready Today
            </h1>
            <p className="mt-4 text-neutral-700">
              Fast, affordable electronics in Orange, NJ. Walk in and get what
              you need—no waiting.
            </p>

            <div className="mt-10 flex gap-4">
              <a href="tel:+1">
                <Button>📞 Call Now</Button>
              </a>
              <a href="https://google.com" target="_blank">
                <Button variant="secondary">📍 Get Directions</Button>
              </a>
            </div>
            <div className="mt-4 max-w-lg text-xs flex gap-2 text-neutral-500">
              <span>Same-day service available |</span>
              <span>Walk-ins welcome |</span>
              <span>Installation available</span>
            </div>
          </header>
          <ImageCard src="/images/orange-hero.jpg" />
        </div>
      </Container>
    </section>
  );
}
