"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { GitMerge, Database, Code, Component } from 'lucide-react';
import { motion } from "framer-motion";

const JavaScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5v-11l6 5.5-6 5.5z"/></svg>
);
const TypeScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.21 13.33h-2.32v-3.83h-1.8v3.83h-2.32V8.67h6.44v4.66zM8.5 12.5h-1v-1h1v1zm-2 2h-1v-1h1v1zm2 0h-1v-1h1v1z"/></svg>
);
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
);
const NextjsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.2 13.32L12 10.5l-3.2 4.82h-1.5L12 8l4.7 7.32h-1.5z"/></svg>
);
const NodejsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
);
const TailwindCssIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.23-2.106 2.354-5.897 2.429-8.249.228-2.353-2.199-2.428-5.88-.229-8.23zm-12 0c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.23-2.106 2.354-5.897 2.429-8.249.228-2.353-2.199-2.428-5.88-.229-8.23z"/></svg>
);
const FirebaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L3 4.86v13.28l9 3.86 9-3.86V4.86L12 2zm0 15.6l-5.3-2.27v-6.9l5.3 2.28v6.89z"/></svg>
);
const DockerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.25 9.17c-.36-1.55-1.7-2.67-3.28-2.67h-1.9v-.4c0-2.02-1.63-3.65-3.65-3.65H5.43c-2.02 0-3.65 1.63-3.65 3.65v9.88c0 2.02 1.63 3.65 3.65 3.65h11.95c2.02 0 3.65-1.63 3.65-3.65v-.4h.87c1.58 0 2.92-1.12 3.28-2.67.29-1.25-.19-2.52-1.28-3.14zM20 12.5h-1.5v-2H20v2zm-4.5 0h-2v-2h2v2zm-4 0h-2v-2h2v2zm-4 0H5v-2h2.5v2z"/></svg>
);

const skills = [
  { name: "JavaScript (ES6+)", icon: <JavaScriptIcon className="h-8 w-8 text-primary" /> },
  { name: "TypeScript", icon: <TypeScriptIcon className="h-8 w-8 text-primary" /> },
  { name: "React", icon: <ReactIcon className="h-8 w-8 text-primary" /> },
  { name: "Next.js", icon: <NextjsIcon className="h-8 w-8 text-primary" /> },
  { name: "Node.js", icon: <NodejsIcon className="h-8 w-8 text-primary" /> },
  { name: "Tailwind CSS", icon: <TailwindCssIcon className="h-8 w-8 text-primary" /> },
  { name: "Firebase", icon: <FirebaseIcon className="h-8 w-8 text-primary" /> },
  { name: "Docker", icon: <DockerIcon className="h-8 w-8 text-primary" /> },
  { name: "HTML5", icon: <Code className="h-8 w-8 text-primary" /> },
  { name: "CSS3", icon: <Component className="h-8 w-8 text-primary" /> },
  { name: "SQL Databases", icon: <Database className="h-8 w-8 text-primary" /> },
  { name: "Git", icon: <GitMerge className="h-8 w-8 text-primary" /> },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.07,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export function SkillsOverview() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Technical Skills</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            A snapshot of the technologies and tools I work with.
          </p>
        </motion.div>
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="flex flex-col items-center justify-center p-4 h-full transition-shadow duration-300 ease-in-out hover:shadow-lg hover:bg-accent/10">
                <CardContent className="flex flex-col items-center justify-center gap-3 p-0">
                  {skill.icon}
                  <p className="text-sm font-medium text-center">{skill.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
