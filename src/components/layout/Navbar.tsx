
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  // Check if user prefers dark mode
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
    
    toast({
      title: `${isDarkMode ? 'Light' : 'Dark'} mode activated`,
      description: `The website theme has been switched to ${isDarkMode ? 'light' : 'dark'} mode.`,
      duration: 2000,
    });
  };

  const MenuItems = () => (
    <>
      <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
      <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
      <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
      <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
      <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
      <Link to="/blog" className="text-foreground hover:text-primary transition-colors">Blog</Link>
      <Link to="/statistics" className="text-foreground hover:text-primary transition-colors">Statistics</Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">Dev<span className="text-secondary">Portfolio</span></span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <MenuItems />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container px-4 pt-2 pb-3 space-y-4 flex flex-col">
            <MenuItems />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
