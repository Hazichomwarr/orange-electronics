"use client";

import { Container } from "@/components/ui";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <Container>
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="font-semibold text-neutral-900 cursor-pointer">
              <a href="/">Orange Electronics</a>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="/#category"
                className="text-sm text-neutral-500 hover:text-black"
              >
                Products
              </a>

              <a
                href="https://orange-electronics-5815.myshopify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 hover:text-black"
              >
                🛒 Shop Online
              </a>

              <a href="tel:+11234567890">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer">
                  Call Now
                </button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </Container>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 visible bg-black/40" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <button onClick={() => setOpen(false)} className="text-xl mb-6">
          ✕
        </button>

        {/* Links */}
        <div className="flex flex-col gap-6">
          <a
            href="/#category"
            onClick={() => setOpen(false)}
            className="text-base"
          >
            Products
          </a>

          <a
            href="https://orange-electronics-5815.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base"
          >
            🛒 Shop Online
          </a>

          <a href="tel:+11234567890">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg text-base font-semibold w-full">
              📞 Call Now
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
