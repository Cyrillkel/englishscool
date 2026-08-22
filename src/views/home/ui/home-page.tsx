import { About } from "@/widgets/about";
import { ContactCta } from "@/widgets/contact-cta";
import { Countries } from "@/widgets/countries";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Services } from "@/widgets/services";
import { Testimonials } from "@/widgets/testimonials";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Countries />
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
