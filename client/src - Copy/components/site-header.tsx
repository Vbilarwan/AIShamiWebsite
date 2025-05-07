import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Industries", href: "#industries" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Founder", href: "#founder" },
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 bg-white/80 dark:bg-primary/90 backdrop-blur-md z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-bold font-montserrat tracking-tight">
            <span className="text-primary dark:text-white">Shamir</span><span className="text-accent">ael</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium text-primary dark:text-white/80 hover:text-accent dark:hover:text-accent transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Button
              className="bg-accent hover:bg-accent/80 text-white shadow-lg shadow-accent/20"
              asChild
            >
              <a href="#contact">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
        
        <button 
          className="md:hidden text-primary dark:text-white" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden px-6 py-4 bg-white dark:bg-primary shadow-lg dark:shadow-accent/5 border-t border-border dark:border-primary"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-sm font-medium text-primary dark:text-white/80 hover:text-accent dark:hover:text-accent transition-all"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="text-sm font-medium text-primary dark:text-white/80 hover:text-accent dark:hover:text-accent transition-all"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
