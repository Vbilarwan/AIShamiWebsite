import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    title: "AI Crypto Portfolio Manager",
    description: "An intelligent system that optimizes crypto portfolios using market trend analysis and risk assessment algorithms.",
    icon: "fas fa-coins",
    tags: ["Blockchain", "AI Analytics", "Prediction"],
    client: "Crypto Investment Firm"
  },
  {
    title: "Luxury Customer Sentiment Analyzer",
    description: "Real-time analysis of customer sentiment across social media and review platforms for luxury brands.",
    icon: "fas fa-gem",
    tags: ["NLP", "Sentiment Analysis", "Social Media"],
    client: "Premium Fashion Brand"
  },
  {
    title: "Financial Risk AI Dashboard",
    description: "Comprehensive risk assessment platform that predicts market volatility and generates mitigation strategies.",
    icon: "fas fa-chart-line",
    tags: ["Predictive Analytics", "Finance", "Risk Management"],
    client: "Investment Bank"
  }
];

export function PortfolioSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted dark:bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-primary dark:text-white">
            AI <span className="text-accent">Solutions</span> Portfolio
          </h2>
          <p className="text-lg text-primary/70 dark:text-white/70">
            Explore our innovative AI tools and solutions that have helped businesses transform their operations.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {portfolioItems.map((item, index) => (
            <PortfolioCard 
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              tags={item.tags}
              client={item.client}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="border-accent text-accent hover:bg-accent hover:text-white inline-flex items-center"
            asChild
          >
            <a href="#contact">
              View All Case Studies
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
