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
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type FormValues = z.infer<typeof formSchema>;

export function NewsletterSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [subscribed, setSubscribed] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const subscribeMutation = useMutation({
    mutationFn: (data: FormValues) => {
      return apiRequest("POST", "/api/subscribe", data);
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      form.reset();
      setSubscribed(true);
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
    subscribeMutation.mutate(data);
  }

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <section className="py-16 bg-white dark:bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div 
          className="relative"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary opacity-95 rounded-2xl"></div>
          <div className="relative p-10 md:p-16 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-4 text-white">Stay Updated on AI Trends</h2>
                <p className="text-white/80 mb-6">
                  Subscribe to our newsletter for the latest insights on AI innovation, industry trends, and exclusive resources.
                </p>
              </div>
              
              <div>
                {subscribed ? (
                  <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-4">
                      <i className="fas fa-check text-xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold font-montserrat mb-2 text-white">Thank You!</h3>
                    <p className="text-white/80 text-center mb-4">
                      You've been added to our newsletter.
                    </p>
                    <Button
                      className="bg-white text-primary hover:bg-white/90"
                      onClick={() => setSubscribed(false)}
                    >
                      Subscribe Another Email
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="flex-grow">
                            <FormControl>
                              <Input 
                                {...field} 
                                placeholder="Your email address" 
                                className="px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:ring-accent/50"
                              />
                            </FormControl>
                            <FormMessage className="text-white/80" />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="px-6 py-3 bg-accent text-white hover:bg-accent/80 whitespace-nowrap"
                        disabled={subscribeMutation.isPending}
                      >
                        {subscribeMutation.isPending ? (
                          <span className="flex items-center">
                            <i className="fas fa-spinner fa-spin mr-2"></i> Subscribing...
                          </span>
                        ) : (
                          "Subscribe"
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
                <p className="text-xs text-white/60 mt-3">
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
