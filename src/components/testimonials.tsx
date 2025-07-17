"use client";

import { Card, CardContent, CardFooter } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    initials: "AJ",
    title: "CS Student",
    quote: "Stewart's tutoring was a game-changer for my data structures class. Complex topics were broken down into understandable chunks. Highly recommended!",
    rating: 5,
  },
  {
    name: "Samantha Lee",
    initials: "SL",
    title: "Bootcamp Graduate",
    quote: "I wouldn't have landed my first developer job without Stewart's help. He was patient, knowledgeable, and gave me the confidence I needed to succeed.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    initials: "MC",
    title: "Hobbyist Coder",
    quote: "As someone learning to code for fun, Stewart made the process so enjoyable. He tailored sessions to my interests and helped me build my first real application.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">What My Tutees Say</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Feedback from students I've had the pleasure of teaching.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col justify-between h-full p-6">
                    <CardContent className="p-0">
                      <div className="flex mb-4">
                        {Array(testimonial.rating).fill(0).map((_, i) => (
                           <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                         {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                           <Star key={i} className="h-5 w-5 text-muted-foreground" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                    </CardContent>
                    <CardFooter className="p-0 mt-6">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={`https://placehold.co/40x40.png?text=${testimonial.initials}`} />
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
