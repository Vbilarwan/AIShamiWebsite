import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CounterAnimation } from "@/components/ui/counter-animation";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary dark:opacity-60 z-0"></div>
      
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat text-white leading-tight">
              Elevating Businesses Through <span className="text-accent">AI Innovation</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-lg">
              Shamirael helps forward-thinking companies harness the power of artificial intelligence to increase profits, improve efficiency, and stay ahead of competition.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg" 
                className="bg-accent hover:bg-accent/80 text-white shadow-lg shadow-accent/30"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white hover:bg-white/20 border-transparent"
                asChild
              >
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-blue-600 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 bg-white/5 p-4 rounded-lg">
                    <div className="h-2 w-1/3 bg-accent/30 rounded-full mb-2"></div>
                    <div className="h-8 w-2/3 bg-white/10 rounded-lg"></div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="h-2 w-1/3 bg-accent/30 rounded-full mb-2"></div>
                    <div className="h-20 bg-white/10 rounded-lg"></div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="h-2 w-1/3 bg-accent/30 rounded-full mb-2"></div>
                    <div className="h-20 bg-white/10 rounded-lg"></div>
                  </div>
                  <div className="col-span-2 bg-accent/10 p-4 rounded-lg flex items-center justify-between">
                    <div>
                      <div className="h-2 w-16 bg-accent/30 rounded-full mb-2"></div>
                      <div className="h-4 w-32 bg-white/10 rounded-lg"></div>
                    </div>
                    <div className="h-8 w-8 bg-accent/30 rounded-full"></div>
                  </div>
                </div>
                
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-accent/10 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">
              <CounterAnimation value={150} duration={2} />+
            </div>
            <p className="text-white/70 mt-2">AI Solutions Delivered</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">
              <CounterAnimation value={97} duration={2} />%
            </div>
            <p className="text-white/70 mt-2">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">
              <CounterAnimation value={12} duration={2} />
            </div>
            <p className="text-white/70 mt-2">Industries Transformed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">
              <CounterAnimation value={35} duration={2} />%
            </div>
            <p className="text-white/70 mt-2">Avg. Efficiency Gain</p>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}
