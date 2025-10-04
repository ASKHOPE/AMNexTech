"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/landing/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"


export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#solutions', label: 'Solutions' },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" aria-label="AMNexTech Home Page">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
           <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground">
             <Link href="#contact">Contact Us</Link>
           </Button>
           <Sheet>
             <SheetTrigger asChild className="md:hidden">
               <Button variant="ghost" size="icon">
                 <Menu className="h-6 w-6" />
                 <span className="sr-only">Open menu</span>
               </Button>
             </SheetTrigger>
             <SheetContent side="right">
                <div className="p-6">
                  <Link href="/" className="mb-8 block">
                      <Logo />
                  </Link>
                  <nav className="flex flex-col gap-6">
                      {navLinks.map((link) => (
                          <SheetClose asChild key={link.href}>
                            <Link href={link.href} className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors">
                                {link.label}
                            </Link>
                          </SheetClose>
                      ))}
                  </nav>
                  <SheetClose asChild>
                    <Button asChild className="mt-8 w-full">
                        <Link href="#contact">Contact Us</Link>
                    </Button>
                  </SheetClose>
                </div>
             </SheetContent>
           </Sheet>
        </div>
      </div>
    </header>
  );
}
