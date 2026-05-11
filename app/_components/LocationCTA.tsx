import { Container, Button } from "@/components/ui";
import { BUSINESS_LOCATION, BUSINESS_PHONE } from "@/lib/businessInfo";
import Image from "next/image";

export default function LocationCTA() {
  return (
    <section className="py-16">
      <Container className="flex flex-col-reverse justify-between rounded-2xl border bg-black p-8 text-white shadow-2xl md:flex-row">
        <div className="p-6 bg-black rounded-2xl  shadow-md text-white">
          {/* header */}
          <h2 className="text-3xl md:text-4xl font-bold">Visit Us Today</h2>

          <p className="mt-3">
            Stop by our store in Orange, NJ and get what you need today — no
            waiting.
          </p>

          {/* details */}
          <div className="flex flex-wrap mt-6 space-y-2 text-sm">
            <p>📍 207 Main Street, City of Orange, NJ 07050</p>
            <p>🕒 Open daily</p>
            <p>🚶 Walk-ins welcome</p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={BUSINESS_LOCATION} target="_blank">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 text-base font-semibold">
                📍 Get Directions
              </Button>
            </a>

            <a href={BUSINESS_PHONE}>
              <Button
                variant="outline"
                className="px-6 py-3 text-base font-semibold hover:text-black"
              >
                📞 Call Now
              </Button>
            </a>
          </div>

          {/* payments */}
          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-sm text-white/70 mb-4">
              We accept all major payment methods
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {[
                "💳 Visa",
                "💳 Mastercard",
                "💳 Discover",
                "💳 Amex",
                "🅿️ PayPal",
                " Apple Pay",
                "📱 Cash App",
                "💵 Zelle",
              ].map((payment) => (
                <div
                  key={payment}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 backdrop-blur shadow-2xl"
                >
                  {payment}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Image
          src="/images/logo.png"
          alt="Orange Electronics"
          width={420}
          height={420}
          className="object-cover rounded-2xl p-2"
        />
      </Container>
    </section>
  );
}
