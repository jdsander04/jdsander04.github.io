
import React from 'react';
import { ArrowRight, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="bg-accent/30">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <p className="text-lg">
              I'm a passionate Full Stack Developer with over 5 years of experience building 
              web applications using modern technologies. My journey in tech started when I 
              was in college, where I discovered my love for turning ideas into reality through code.
            </p>
            <p className="text-lg">
              I specialize in JavaScript/TypeScript ecosystems including React, Node.js, and Next.js.
              I'm dedicated to creating clean, efficient, and user-friendly applications that 
              solve real-world problems.
            </p>
            <p className="text-lg">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or writing articles to share my knowledge with the community.
            </p>
            
            <Button variant="link" className="pl-0 pt-4 gap-2 group" asChild>
              <a href="#projects">
                See My Work 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <Card className="border border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Work Experience
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Senior Frontend Developer</h4>
                    <p className="text-sm text-muted-foreground">TechCorp Inc. • 2021 - Present</p>
                    <p className="mt-1">Led the development of the company's flagship web application, resulting in a 40% increase in user engagement.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Full Stack Developer</h4>
                    <p className="text-sm text-muted-foreground">Innovate Solutions • 2018 - 2021</p>
                    <p className="mt-1">Built and maintained multiple client projects using React, Node.js, and MongoDB.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">M.S. in Computer Science</h4>
                    <p className="text-sm text-muted-foreground">Tech University • 2016 - 2018</p>
                    <p className="mt-1">Specialized in Web Technologies and Distributed Systems</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">B.S. in Computer Science</h4>
                    <p className="text-sm text-muted-foreground">State University • 2012 - 2016</p>
                    <p className="mt-1">Dean's List, Senior Project: Real-time Collaborative Code Editor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
