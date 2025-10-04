import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Zap, ShieldCheck, Gem } from "lucide-react";

const teamMembers = [
    { name: "Arnold Sujan Katru", title: "CEO & Founder", imageId: "team1" },
    { name: "Myna Boora", title: "Business Administration and Finance", imageId: "team2" },
    { name: "Siddesh Vardhanapu", title: "CTO and Operations Head", imageId: "team3" },
];

const values = [
    { icon: Zap, title: "Innovation", description: "We push boundaries to create solutions that are not just current, but future-proof." },
    { icon: ShieldCheck, title: "Integrity", description: "Our commitment to transparency and ethical practices is the foundation of our client relationships." },
    { icon: Gem, title: "Excellence", description: "We strive for the highest quality in every line of code, every pixel, and every interaction." },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">About AMNexTech</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are a passionate team of innovators, creators, and problem-solvers dedicated to building software that makes a difference. Our mission is to transform complex challenges into elegant, intuitive, and powerful digital solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
                <Card key={value.title} className="text-center border-0 shadow-none">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                            <value.icon className="h-8 w-8" />
                        </div>
                        <CardTitle className="mt-4 font-headline">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>

        <div className="mt-24">
            <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Meet Our Team</h3>
                <p className="mt-4 text-lg text-muted-foreground">The brilliant minds behind our success.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member) => {
                    const image = PlaceHolderImages.find(p => p.id === member.imageId);
                    return (
                        <div key={member.name} className="flex flex-col items-center text-center">
                            <Avatar className="h-24 w-24 border-2 border-primary/50">
                                {image && <AvatarImage src={image?.imageUrl} alt={member.name} data-ai-hint={image?.imageHint} />}
                                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <h4 className="mt-4 font-semibold font-headline">{member.name}</h4>
                            <p className="text-sm text-muted-foreground">{member.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
}
