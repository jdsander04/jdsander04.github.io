
import React from 'react';
import { Calendar, Tag, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React: A Beginner's Guide",
    excerpt: "Learn the basics of React and start building your first component-based application with this comprehensive guide.",
    date: "April 15, 2023",
    readTime: "8 min read",
    category: "React",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Understanding TypeScript's Advanced Types",
    excerpt: "Dive deep into TypeScript's type system and learn how to leverage advanced types for better code quality.",
    date: "March 22, 2023",
    readTime: "10 min read",
    category: "TypeScript",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "Learn the best practices for designing and implementing scalable RESTful APIs using Node.js and Express.",
    date: "February 10, 2023",
    readTime: "12 min read",
    category: "Backend",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt: "A comprehensive comparison of CSS Grid and Flexbox with practical examples to help you choose the right layout system.",
    date: "January 05, 2023",
    readTime: "7 min read",
    category: "CSS",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Optimizing React Applications for Performance",
    excerpt: "Learn effective strategies to optimize your React applications for better performance and user experience.",
    date: "December 12, 2022",
    readTime: "9 min read",
    category: "React",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Introduction to Docker for Web Developers",
    excerpt: "Learn how to use Docker to create consistent development environments and simplify your deployment process.",
    date: "November 28, 2022",
    readTime: "11 min read",
    category: "DevOps",
    image: "/placeholder.svg",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Blog & Articles</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sharing my knowledge and experiences in web development, programming, and technology.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="h-48 bg-muted">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                      
                      <Button variant="link" className="p-0 h-auto flex items-center text-primary group" asChild>
                        <a href={`/blog/${post.id}`}>
                          Read More 
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
