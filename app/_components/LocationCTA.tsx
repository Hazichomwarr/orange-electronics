import { Container, Button } from "@/components/ui";

export default function LocationCTA() {
  return (
    <section className=" py-20">
      <Container>
        <div className="p-6 bg-black rounded-2xl border shadow-md text-white">
          {/* header */}
          <h2 className="text-3xl md:text-4xl font-bold">Visit Us Today</h2>

          <p className="mt-3">
            Stop by our store in Orange, NJ and get what you need today — no
            waiting.
          </p>

          {/* details */}
          <div className="mt-6 space-y-2 text-sm">
            <p>📍 Orange, New Jersey</p>
            <p>🕒 Open daily</p>
            <p>🚶 Walk-ins welcome</p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 text-base font-semibold">
                📍 Get Directions
              </Button>
            </a>

            <a href="tel:+11234567890">
              <Button
                variant="outline"
                className="px-6 py-3 text-base font-semibold"
              >
                📞 Call Now
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
