"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Briefcase, BrainCircuit, MessageSquareQuote, Send, X, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { href: "#projects", label: "Projects", icon: <Briefcase className="h-5 w-5" /> },
  { href: "#skills", label: "Skills", icon: <BrainCircuit className="h-5 w-5" /> },
  { href: "#testimonials", label: "Testimonials", icon: <MessageSquareQuote className="h-5 w-5" /> },
  { href: "/resume.pdf", label: "Resume", icon: <FileText className="h-5 w-5" />, target: "_blank" },
  { href: "#contact", label: "Contact", icon: <Send className="h-5 w-5" /> },
];

export function Header() {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavContent = () => (
    <nav className={isMobile ? "flex flex-col space-y-4 p-4" : "flex items-center gap-6 text-sm font-medium"}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target={link.target}
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2 transition-colors hover:text-primary"
        >
          {isMobile && link.icon}
          <span>{link.label}</span>
        </Link>
      ))}
    </nav>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "border-b bg-background/80 backdrop-blur-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Stewart</span>
        </Link>
        {isMobile ? (
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex justify-between items-center p-4 border-b">
                 <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <Briefcase className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg">Stewart</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <NavContent />
            </SheetContent>
          </Sheet>
        ) : (
          <NavContent />
        )}
      </div>
    </header>
  );
}
