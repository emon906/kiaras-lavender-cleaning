import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { Hero } from "@/components/site/Hero";
import { Navigation } from "@/components/site/Navigation";
import { Payments } from "@/components/site/Payments";
import { Reels } from "@/components/site/Reels";
import { ServiceArea } from "@/components/site/ServiceArea";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { WelcomeOffer } from "@/components/site/WelcomeOffer";
import { WhyChoose } from "@/components/site/WhyChoose";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Kiara's Quality Cleaning Service | Luxury Cleaning — Georgia & Chattanooga",
      },
      {
        name: "description",
        content:
          "Ultra-detail cleaning for homes, salons, garages and private gyms across Georgia and the Chattanooga area. Deep cleans, weekly & bi-weekly plans, carpet cleaning and a free first week for new clients. Call (423) 287-7090.",
      },
      { property: "og:title", content: "Kiara's Quality Cleaning Service" },
      {
        property: "og:description",
        content:
          "A spotless home, a more beautiful life. Luxury detail cleaning across Georgia & Chattanooga — first week free for new clients.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kiara's Quality Cleaning Service" },
      {
        name: "twitter:description",
        content: "Luxury detail cleaning across Georgia & Chattanooga. Call (423) 287-7090.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <WelcomeOffer />
        <Gallery />
        <BeforeAfter />
        <Testimonials />
        <Reels />
        <ServiceArea />
        <Payments />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
