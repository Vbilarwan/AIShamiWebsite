import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  delay?: number;
}

export function ServiceCard({ title, description, icon, features, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className="service-card bg-muted dark:bg-primary/50 rounded-xl p-8 shadow-sm dark:shadow-accent/5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
        <i className={`${icon} text-xl`}></i>
      </div>
      <h3 className="text-xl font-semibold font-montserrat mb-3 text-primary dark:text-white">{title}</h3>
      <p className="text-primary/70 dark:text-white/70 mb-6">
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-primary/70 dark:text-white/70">
            <i className="fas fa-check text-accent mr-2"></i>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
