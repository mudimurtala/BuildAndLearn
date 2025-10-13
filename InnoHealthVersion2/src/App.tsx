import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Telemedicine } from "./components/Telemedicine";
import { Gallery } from "./components/Gallery";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { CallToAction } from "./components/CallToAction";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Telemedicine />
      <Gallery />
      <WhyChooseUs />
      <Team />
      <CallToAction />
      <Footer />
      <Toaster />
    </div>
  );
}
