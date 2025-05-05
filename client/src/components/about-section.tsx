import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-primary dark:text-white">
            Transforming Businesses With <span className="text-accent">AI Intelligence</span>
          </h2>
          <p className="text-lg text-primary/70 dark:text-white/70">
            Shamirael is an AI and automation consulting firm that helps companies across industries harness the power of artificial intelligence to drive growth, efficiency, and innovation.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="p-6 bg-muted dark:bg-primary/50 rounded-xl shadow-sm dark:shadow-accent/5">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-4">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-montserrat mb-2 text-primary dark:text-white">Strategic Vision</h3>
                    <p className="text-primary/70 dark:text-white/70">
                      We identify untapped AI opportunities that align with your business goals and market position.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-muted dark:bg-primary/50 rounded-xl shadow-sm dark:shadow-accent/5">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-4">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-montserrat mb-2 text-primary dark:text-white">Measurable Growth</h3>
                    <p className="text-primary/70 dark:text-white/70">
                      Our AI solutions deliver quantifiable results - increased revenue, reduced costs, and improved efficiency.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-muted dark:bg-primary/50 rounded-xl shadow-sm dark:shadow-accent/5">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-4">
                    <i className="fas fa-code-branch"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-montserrat mb-2 text-primary dark:text-white">Technical Excellence</h3>
                    <p className="text-primary/70 dark:text-white/70">
                      Our team brings cutting-edge AI expertise with practical implementation experience across industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-primary/70 dark:text-white/70 mb-6">
              At Shamirael, we don't just implement AI – we transform how businesses operate. Our approach combines strategic thinking with technical excellence to deliver solutions that create lasting competitive advantages.
            </p>
            
            <p className="text-lg text-primary/70 dark:text-white/70 mb-6">
              We help companies across industries (crypto, luxury, finance, healthcare, and more) use AI to increase profits, improve efficiency, and stay ahead of competition.
            </p>
            
            <div className="mt-8 p-6 bg-muted dark:bg-primary/50 rounded-xl border-l-4 border-accent shadow-sm dark:shadow-accent/5">
              <p className="text-lg italic text-primary/80 dark:text-white/80">
                "Led by Vivek Singh Bilarwan, an AI strategist with experience working at Revolut and handling multiple global clients. Vivek brings deep expertise in crypto, AI automation, and growth strategy."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
