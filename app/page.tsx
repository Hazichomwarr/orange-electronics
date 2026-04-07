import Categories2 from "./_components/Categories2";
import Hero2 from "./_components/Hero2";
import Footer from "./_components/layout/Footer";
import LocationCTA from "./_components/LocationCTA";
import Service2 from "./_components/Service2";
import Testimonials from "./_components/Testimonials";
import Trust2 from "./_components/Trust2";

export default function page() {
  return (
    <main>
      <Hero2 />
      <Categories2 />
      <Service2 />
      <Trust2 />
      {/* last 3 bellow empty */}
      <Testimonials />
      <LocationCTA />
      <Footer />
    </main>
  );
}
