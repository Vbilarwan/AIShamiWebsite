import { motion } from "framer-motion";
import { Hexagon } from "./hexagon";

interface IndustryCardProps {
  name: string;
  icon: string;
  delay?: number;
}

export function IndustryCard({ name, icon, delay = 0 }: IndustryCardProps) {
  return (
    <motion.div
      className="industry-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Hexagon className="bg-accent/10 dark:bg-accent/20 p-4 flex flex-col items-center justify-center">
        <div className="mb-3 text-3xl text-accent">
          <i className={icon}></i>
        </div>
        <div className="bg-white/80 dark:bg-primary-light/90 rounded-md py-1 px-2 -mx-2 w-full">
          <h3 className="text-primary dark:text-white text-center font-semibold font-montserrat text-sm md:text-base">
            {name}
          </h3>
        </div>
      </Hexagon>
    </motion.div>
  );
}
