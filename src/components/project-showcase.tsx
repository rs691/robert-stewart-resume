"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with product management, shopping cart, and secure checkout, built with a modern tech stack.",
    image: "https://placehold.co/600x400.png",
    hint: "web application",
    tags: ["Next.js", "React", "Stripe", "Firebase"],
    liveUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative tool for teams to organize tasks, track progress, and improve productivity with an intuitive drag-and-drop interface.",
    image: "https://placehold.co/600x400.png",
    hint: "task management",
    tags: ["React", "Node.js", "GraphQL", "MongoDB"],
    liveUrl: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for analyzing complex datasets, featuring dynamic charts and filters to uncover insights.",
    image: "https://placehold.co/600x400.png",
    hint: "dashboard chart",
    tags: ["D3.js", "TypeScript", "Python", "Flask"],
    liveUrl: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function ProjectShowcase() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">My Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I've worked on, showcasing my skills in web development and problem-solving.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
             <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="flex flex-col overflow-hidden h-full transition-shadow duration-300 ease-in-out hover:shadow-xl">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                   <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="rounded-md object-cover"
                    data-ai-hint={project.hint}
                  />
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={project.liveUrl}>
                      View Project <ArrowRight className="ml-2 h-4 w-4"/>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
