
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    content: "John is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills make him a valuable asset to any team.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "TechInnovate",
    avatar: undefined,
  },
  {
    content: "Working with John was a fantastic experience. He not only delivered the project on time but also suggested improvements that we hadn't considered. His communication skills are excellent.",
    author: "Michael Chen",
    position: "Product Manager",
    company: "DigitalSolutions",
    avatar: undefined,
  },
  {
    content: "John's expertise in React and Node.js significantly improved our application's performance. He's proactive, detail-oriented, and always willing to go the extra mile.",
    author: "Emily Rodriguez",
    position: "Lead Developer",
    company: "WebCraft",
    avatar: undefined,
  },
  {
    content: "We hired John to revamp our outdated website, and the results exceeded our expectations. He transformed our vision into reality while ensuring the site was fast, responsive, and user-friendly.",
    author: "David Kim",
    position: "Marketing Director",
    company: "GrowthMarketing",
    avatar: undefined,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <section id="testimonials">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Here's what some of my clients and colleagues have to say about working with me.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <Card className="border border-border bg-card shadow-sm">
            <CardContent className="p-8 md:p-12">
              <div className="absolute -top-6 left-8 text-primary">
                <Quote className="h-12 w-12 opacity-20" />
              </div>
              
              <div className="space-y-6">
                <p className="text-lg italic relative z-10">
                  {currentTestimonial.content}
                </p>
                
                <div className="flex items-center pt-4">
                  <Avatar className="h-12 w-12 mr-4">
                    {currentTestimonial.avatar ? (
                      <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.author} />
                    ) : null}
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {currentTestimonial.author.split(' ').map(name => name[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h4 className="font-semibold">{currentTestimonial.author}</h4>
                    <p className="text-muted-foreground text-sm">
                      {currentTestimonial.position}, {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <div 
                  key={index} 
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                ></div>
              ))}
            </div>
            
            <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
