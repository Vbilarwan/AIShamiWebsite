import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: FormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent",
        description: "Thank you for contacting us! We'll get back to you soon.",
      });
      form.reset();
      setFormSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: FormValues) {
    contactMutation.mutate(data);
  }

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted dark:bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-primary dark:text-white">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-lg text-primary/70 dark:text-white/70">
            Ready to transform your business with AI? Contact us to discuss your project or schedule a free consultation.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center p-8 bg-white dark:bg-primary-light rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                  <i className="fas fa-check text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold font-montserrat mb-4 text-primary dark:text-white">Message Sent!</h3>
                <p className="text-center text-primary/70 dark:text-white/70 mb-6">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <Button
                  className="bg-accent hover:bg-accent/80 text-white"
                  onClick={() => setFormSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary/80 dark:text-white/80">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-white dark:bg-primary-light border-border dark:border-primary text-primary dark:text-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary/80 dark:text-white/80">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            className="bg-white dark:bg-primary-light border-border dark:border-primary text-primary dark:text-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary/80 dark:text-white/80">Company Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-white dark:bg-primary-light border-border dark:border-primary text-primary dark:text-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary/80 dark:text-white/80">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4} 
                            className="bg-white dark:bg-primary-light border-border dark:border-primary text-primary dark:text-white" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/80 text-white shadow-lg shadow-accent/30"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      <span className="flex items-center">
                        <i className="fas fa-spinner fa-spin mr-2"></i> Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white dark:bg-primary-light rounded-xl p-8 shadow-sm dark:shadow-accent/5 h-full">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold font-montserrat mb-4 text-primary dark:text-white">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-4">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <p className="text-sm text-primary/60 dark:text-white/60 mb-1">Email</p>
                        <p className="text-primary dark:text-white">info@shamirael.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent mr-4">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <p className="text-sm text-primary/60 dark:text-white/60 mb-1">Location</p>
                        <p className="text-primary dark:text-white">Indore, India</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold font-montserrat mb-4 text-primary dark:text-white">Schedule a Call</h3>
                  <p className="text-primary/70 dark:text-white/70 mb-6">
                    Book a free 30-minute consultation to discuss how AI can transform your business.
                  </p>
                  <a 
                    href="https://calendly.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-accent/10 text-accent text-base font-medium rounded-md hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <i className="far fa-calendar-alt mr-2"></i>
                    <span>Schedule on Calendly</span>
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold font-montserrat mb-4 text-primary dark:text-white">Connect With Us</h3>
                  <div className="flex items-center space-x-4">
                    <a 
                      href="https://www.linkedin.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
