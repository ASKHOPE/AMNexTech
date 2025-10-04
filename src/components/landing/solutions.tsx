import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cloud, Bot, Smartphone } from "lucide-react";

const solutions = [
    { icon: Smartphone, title: "iOS & Android Apps", description: "Engaging and responsive mobile applications that offer a seamless user experience on all devices." },
    { icon: Code, title: "Web Applications", description: "Tailored web solutions designed to meet your unique business requirements and drive growth." },
    { icon: Cloud, title: "Cloud & DevOps (Coming Soon)", description: "Optimize your infrastructure with our cloud migration, management, and DevOps automation services." },
    { icon: Bot, title: "AI & Machine Learning (Coming Soon)", description: "Integrate intelligent automation and predictive capabilities into your business processes with our AI/ML expertise." },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-headline">Our Solutions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a comprehensive suite of services to power your digital transformation from start to finish.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <Card key={solution.title} className="hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 bg-card">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-3 bg-primary/10 rounded-md">
                    <solution.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-base">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
