import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "AI Business Consulting",
    description: "Strategic guidance on implementing AI to solve business challenges and create competitive advantages.",
    icon: "fas fa-brain",
    features: [
      "AI Readiness Assessment",
      "Opportunity Identification",
      "ROI Projections"
    ]
  },
  {
    title: "Automation Solutions",
    description: "Streamline operations through intelligent process and task automation systems.",
    icon: "fas fa-robot",
    features: [
      "Process Automation",
      "Workflow Optimization",
      "Task Automation"
    ]
  },
  {
    title: "AI Agent Development",
    description: "Create intelligent AI agents that can perform complex tasks and make decisions autonomously.",
    icon: "fas fa-microchip",
    features: [
      "Custom Agent Design",
      "Multi-agent Systems",
      "Task Automation"
    ]
  },
  {
    title: "Prompt Engineering & LLM Integration",
    description: "Optimize language model interactions for your specific business use cases.",
    icon: "fas fa-terminal",
    features: [
      "Expert Prompt Design",
      "LLM Fine-tuning",
      "System Integration"
    ]
  },
  {
    title: "Custom AI Tool Development",
    description: "Build bespoke AI applications tailored to your specific business requirements.",
    icon: "fas fa-tools",
    features: [
      "Tailored AI Solutions",
      "Full-cycle Development",
      "Integration Services"
    ]
  },
  {
    title: "AI Implementation Roadmapping",
    description: "Develop comprehensive plans for AI adoption that align with your business goals.",
    icon: "fas fa-map",
    features: [
      "Strategic Planning",
      "Resource Allocation",
      "Implementation Timeline"
    ]
  }
];

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <section id="services" className="py-20 md:py-32 bg-white dark:bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-primary dark:text-white">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-primary/70 dark:text-white/70">
            We offer comprehensive AI solutions tailored to your business needs, from strategy to implementation.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
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
            size="lg" 
            className="bg-accent hover:bg-accent/80 text-white shadow-lg shadow-accent/30 inline-flex items-center"
            asChild
          >
            <a href="#contact">
              Discuss Your Project
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
