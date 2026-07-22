import Link from 'next/link';
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Portfolio</h3>
            <p className="text-sm text-muted-foreground">
              A showcase of my work, skills, and professional journey.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="mailto:contact@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Blog</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">All Posts</Link></li>
              <li><Link href="/blog/category/tech" className="text-muted-foreground hover:text-foreground transition-colors">Technology</Link></li>
              <li><Link href="/blog/category/design" className="text-muted-foreground hover:text-foreground transition-colors">Design</Link></li>
              <li><Link href="/blog/category/career" className="text-muted-foreground hover:text-foreground transition-colors">Career</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>Email: <Link href="mailto:contact@example.com" className="hover:text-foreground transition-colors">contact@example.com</Link></p>
              <p>Location: New York, USA</p>
            </address>
            <div className="mt-4">
              <Link 
                href="/contact" 
                className="text-sm inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Get in touch <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}