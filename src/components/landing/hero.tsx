import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/80 to-primary" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-primary-foreground px-4">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl drop-shadow-md font-headline">
          AMNexTech: Innovating Your Digital Future
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl text-primary-foreground/80 drop-shadow">
          We build cutting-edge software solutions that empower businesses to thrive in the digital age.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="#solutions">
              Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent hover:bg-primary-foreground/10 text-primary-foreground border-primary-foreground/50 hover:text-primary-foreground">
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
