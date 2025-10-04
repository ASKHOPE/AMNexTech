import { About } from "@/components/landing/about";
import { Contact } from "@/components/landing/contact";
import { Hero } from "@/components/landing/hero";
import { Solutions } from "@/components/landing/solutions";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <Contact />
    </>
  );
}
