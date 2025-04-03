
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { CodepenIcon, DatabaseIcon, ServerIcon, LayoutIcon, Terminal } from 'lucide-react';

const SkillCategory = ({ title, skills, icon }: { title: string; skills: { name: string; level: number; }[]; icon: React.ReactNode }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" style={{ "--progress-width": `${skill.level}%` } as React.CSSProperties} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  
  const frontendSkills = [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript", level: 92 },
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 80 },
  ];
  
  const backendSkills = [
    { name: "Node.js", level: 88 },
    { name: "Express", level: 85 },
    { name: "Python", level: 75 },
    { name: "Django", level: 70 },
    { name: "GraphQL", level: 78 },
  ];
  
  const databaseSkills = [
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "Redis", level: 70 },
    { name: "Firebase", level: 82 },
  ];
  
  const toolsSkills = [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "Webpack", level: 80 },
    { name: "CI/CD", level: 78 },
    { name: "AWS", level: 72 },
  ];
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  
  return (
    <section id="skills" className="bg-muted/30">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I've acquired a diverse set of skills over the years, from frontend and backend development
            to databases and DevOps tools.
          </p>
        </div>
        
        <Card className="border border-border">
          <CardContent className="pt-6">
            <Tabs defaultValue="frontend" onValueChange={handleTabChange}>
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger 
                  value="frontend" 
                  className={`data-[state=active]:bg-primary data-[state=active]:text-primary-foreground`}
                >
                  Frontend
                </TabsTrigger>
                <TabsTrigger 
                  value="backend"
                  className={`data-[state=active]:bg-primary data-[state=active]:text-primary-foreground`}
                >
                  Backend
                </TabsTrigger>
                <TabsTrigger 
                  value="database"
                  className={`data-[state=active]:bg-primary data-[state=active]:text-primary-foreground`}
                >
                  Database
                </TabsTrigger>
                <TabsTrigger 
                  value="tools"
                  className={`data-[state=active]:bg-primary data-[state=active]:text-primary-foreground`}
                >
                  Tools
                </TabsTrigger>
              </TabsList>
              
              <div className="mt-6">
                <TabsContent value="frontend" className={`animate-${activeTab === "frontend" ? "fade-in" : "none"}`}>
                  <SkillCategory 
                    title="Frontend Development" 
                    skills={frontendSkills} 
                    icon={<LayoutIcon className="h-5 w-5 text-primary" />}
                  />
                </TabsContent>
                
                <TabsContent value="backend" className={`animate-${activeTab === "backend" ? "fade-in" : "none"}`}>
                  <SkillCategory 
                    title="Backend Development" 
                    skills={backendSkills} 
                    icon={<ServerIcon className="h-5 w-5 text-primary" />}
                  />
                </TabsContent>
                
                <TabsContent value="database" className={`animate-${activeTab === "database" ? "fade-in" : "none"}`}>
                  <SkillCategory 
                    title="Database Systems" 
                    skills={databaseSkills} 
                    icon={<DatabaseIcon className="h-5 w-5 text-primary" />}
                  />
                </TabsContent>
                
                <TabsContent value="tools" className={`animate-${activeTab === "tools" ? "fade-in" : "none"}`}>
                  <SkillCategory 
                    title="Tools & DevOps" 
                    skills={toolsSkills} 
                    icon={<Terminal className="h-5 w-5 text-primary" />}
                  />
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">5+</div>
            <div className="text-muted-foreground mt-2">Years Experience</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">50+</div>
            <div className="text-muted-foreground mt-2">Projects Completed</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">30+</div>
            <div className="text-muted-foreground mt-2">Happy Clients</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">15+</div>
            <div className="text-muted-foreground mt-2">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
