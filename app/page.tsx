import Categories from "./_components/Categories";
import Hero2 from "./_components/Hero";
import Footer from "./_components/layout/Footer";
import LocationCTA from "./_components/LocationCTA";
import Service from "./_components/Service";
import Testimonials from "./_components/Testimonials";
import Trust2 from "./_components/Trust2";

export default function page() {
  return (
    <main>
      <Hero2 />
      <Categories />
      <Service />
      <Trust2 />
      <Testimonials />
      <LocationCTA />
      <Footer />
    </main>
  );
}
