import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CounterAnimation } from "@/components/ui/counter-animation";

export function FounderSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <section id="founder" className="py-20 md:py-32 bg-white dark:bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-primary dark:text-white">
            Meet Our <span className="text-accent">Founder</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold font-montserrat mb-4 text-primary dark:text-white">Vivek Singh Bilarwan</h3>
            <p className="text-lg text-primary/70 dark:text-white/70 mb-6">
              AI Strategist & Founder
            </p>
            
            <p className="text-primary/70 dark:text-white/70 mb-4">
              Vivek is an accomplished AI strategist with extensive experience working with global clients across various industries. His time at Revolut has given him deep insights into fintech and digital transformation.
            </p>
            
            <p className="text-primary/70 dark:text-white/70 mb-6">
              With expertise in crypto, AI automation, and growth strategy, Vivek founded Shamirael to help businesses harness the transformative power of artificial intelligence.
            </p>
            
            <div className="flex items-center space-x-4 mt-8">
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              
              <a href="#contact" className="text-accent hover:text-accent/80 font-medium">
                <span>Contact Vivek</span>
                <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full"></div>
              <div className="absolute inset-4 bg-muted dark:bg-primary rounded-full flex items-center justify-center">
                <i className="fas fa-user-tie text-6xl text-accent/30"></i>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white text-xl">
                <i className="fas fa-brain"></i>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20 p-8 bg-muted dark:bg-primary/50 rounded-xl shadow-sm dark:shadow-accent/5"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-accent mb-2">
                10+
              </div>
              <p className="text-primary/70 dark:text-white/70">Years of Experience</p>
            </div>
            
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-accent mb-2">
                50+
              </div>
              <p className="text-primary/70 dark:text-white/70">Global Clients</p>
            </div>
            
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-accent mb-2">
                <CounterAnimation value={100} duration={2} />+
              </div>
              <p className="text-primary/70 dark:text-white/70">AI Projects Delivered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
