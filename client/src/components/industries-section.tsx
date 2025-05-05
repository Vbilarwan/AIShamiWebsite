import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IndustryCard } from "@/components/ui/industry-card";
import { CounterAnimation } from "@/components/ui/counter-animation";

const industries = [
  {
    name: "Crypto & Blockchain",
    icon: "fas fa-coins"
  },
  {
    name: "Luxury Goods & Retail",
    icon: "fas fa-gem"
  },
  {
    name: "Financial Services",
    icon: "fas fa-landmark"
  },
  {
    name: "Healthcare & Pharma",
    icon: "fas fa-heartbeat"
  },
  {
    name: "Manufacturing & Supply Chain",
    icon: "fas fa-industry"
  },
  {
    name: "Emerging Startups & Tech",
    icon: "fas fa-rocket"
  }
];

export function IndustriesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <section id="industries" className="py-20 md:py-32 bg-muted dark:bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-primary dark:text-white">
            Industries We <span className="text-accent">Serve</span>
          </h2>
          <p className="text-lg text-primary/70 dark:text-white/70">
            Our AI consulting and solutions span across diverse industries, delivering tailored strategies that address unique sector challenges.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {industries.map((industry, index) => (
            <IndustryCard 
              key={index}
              name={industry.name}
              icon={industry.icon}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-20 max-w-4xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-primary-light rounded-xl shadow-sm dark:shadow-accent/5">
              <div className="text-4xl font-bold text-accent mb-2">
                <CounterAnimation value={38} duration={2} />%
              </div>
              <p className="text-primary/70 dark:text-white/70">Average Cost Reduction with AI Automation</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-primary-light rounded-xl shadow-sm dark:shadow-accent/5">
              <div className="text-4xl font-bold text-accent mb-2">
                <CounterAnimation value={45} duration={2} />%
              </div>
              <p className="text-primary/70 dark:text-white/70">Increased Decision-Making Speed</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-primary-light rounded-xl shadow-sm dark:shadow-accent/5">
              <div className="text-4xl font-bold text-accent mb-2">
                <CounterAnimation value={3} duration={2} />x
              </div>
              <p className="text-primary/70 dark:text-white/70">ROI on AI Investments (Average)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
