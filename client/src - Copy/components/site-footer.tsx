import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function SiteFooter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <footer className="bg-primary dark:bg-primary py-16 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold font-montserrat tracking-tight">
                <span className="text-white">Shamir</span><span className="text-accent">ael</span>
              </span>
            </a>
            <p className="text-white/70 mb-6 max-w-md">
              Shamirael is a premier AI consulting firm that helps businesses across industries leverage artificial intelligence to drive growth and innovation.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/80 hover:bg-accent hover:text-white transition-all duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-montserrat mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/70 hover:text-accent transition-all">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-all">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-accent transition-all">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-accent transition-all">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-montserrat mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-all">AI Business Consulting</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-all">Automation Solutions</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-all">AI Agent Development</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-all">Custom AI Tool Development</a>
              </li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Shamirael. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
