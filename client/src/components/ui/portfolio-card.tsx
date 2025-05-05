import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  client: string;
  image?: string;
  delay?: number;
}

export function PortfolioCard({ title, description, icon, tags, client, image, delay = 0 }: PortfolioCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-primary-light rounded-xl overflow-hidden shadow-sm dark:shadow-accent/5 hover:shadow-lg dark:hover:shadow-accent/10 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="h-48 bg-primary-light dark:bg-primary relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
              <i className={`${icon} text-2xl text-accent`}></i>
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-20"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold font-montserrat mb-3 text-primary dark:text-white">{title}</h3>
        <p className="text-primary/70 dark:text-white/70 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md">{tag}</span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-primary/60 dark:text-white/60">For: {client}</span>
          <a href="#" className="text-accent hover:text-accent-light">
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
