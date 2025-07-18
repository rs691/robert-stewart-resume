import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowDown, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center items-center">
             <Image
              src="/stewart.png"
              alt="Stewart's Portrait"
              width={400}
              height={400}
              className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              priority
              data-ai-hint="portrait"
            />
          </div>
          <div className="flex flex-col items-center text-center justify-center space-y-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary font-headline">
                Stewart's Portfolio
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                A passionate developer and dedicated tutor showcasing a journey through code and collaboration.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#projects">
                  View My Work <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
