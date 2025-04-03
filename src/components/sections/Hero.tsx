
import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-primary highlight-underline">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Full Stack Developer
            </h2>
            <p className="text-lg">
              I build exceptional and accessible digital experiences for the web.
              Specialized in creating modern, responsive web applications with a focus on performance and user experience.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact" className="gap-2">
                  Let's Talk
                </a>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center items-center animate-fade-in animate-delay-300">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-secondary/20 blur-3xl transform scale-110 -z-10"></div>
              <div className="h-80 w-80 rounded-full overflow-hidden border-4 border-primary">
                <div className="h-full w-full bg-muted flex items-center justify-center text-2xl text-muted-foreground">
                  Your Photo
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center animate-fade-in animate-delay-700">
          <a 
            href="#about" 
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to About section"
          >
            <span className="mb-2">Scroll Down</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
