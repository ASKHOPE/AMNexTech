import Link from 'next/link';
import { Logo } from '@/components/landing/logo';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Separator } from '../ui/separator';

export function Footer() {
    return (
        <footer className="bg-secondary">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid gap-8 lg:grid-cols-4">
                    <div className="space-y-4">
                        <Logo />
                        <p className="text-sm text-muted-foreground">Innovating your digital future with cutting-edge software solutions.</p>
                        <div className="flex gap-4">
                            <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" /></Link>
                            <Link href="#" aria-label="GitHub"><Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" /></Link>
                            <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" /></Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 font-headline">Solutions</h4>
                        <ul className="space-y-2">
                            <li><Link href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Web Applications</Link></li>
                            <li><Link href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">iOS & Android Apps</Link></li>
                            <li><Link href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cloud & DevOps</Link></li>
                            <li><Link href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI & ML</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 font-headline">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
                            <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 font-headline">Legal</h4>
                        <ul className="space-y-2">
                            <li><span className="text-sm text-muted-foreground">Privacy Policy (Coming Soon)</span></li>
                            <li><span className="text-sm text-muted-foreground">Terms of Service (Coming Soon)</span></li>
                        </ul>
                    </div>
                </div>
                <Separator className="my-8" />
                <div className="text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} AMNexTech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
