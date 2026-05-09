import { Container } from "@/components/ui";
import {
  BUSINESS_LOCATION,
  BUSINESS_PHONE,
  BUSINESS_SHOPIFY_LINK,
} from "@/lib/businessInfo";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {/* brand */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Orange Electronics
            </h3>
            <p className="mt-2 text-sm text-neutral-400">
              Your local source for phones, TVs, and more.
            </p>
          </div>

          {/* links */}
          <div>
            <h4 className="text-sm font-semibold text-white">Categories</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#category">Phones</a>
              </li>
              <li>
                <a href="#category">TVs</a>
              </li>
              <li>
                <a href="#category">Car Audio</a>
              </li>
              <li>
                <a href="#category">Accessories</a>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={BUSINESS_SHOPIFY_LINK} target="_blank">
                  🛒 Shop Online
                </a>
              </li>
              <li>
                <a href={BUSINESS_PHONE}>📞 Call</a>
              </li>
              <li>
                <a
                  href={BUSINESS_LOCATION}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📍 Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom */}

        <div className="mt-10 border-t border-neutral-800 pt-6 text-sm text-neutral-500 text-center">
          ©{new Date().getFullYear()} Orange Electronics. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
