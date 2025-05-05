import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema, subscribeSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body against the schema
      const validatedData = contactSchema.parse(req.body);
      
      // Store the contact submission
      const contact = await storage.createContact(validatedData);
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: "Contact message received successfully",
        contactId: contact.id
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Newsletter subscription
  app.post("/api/subscribe", async (req, res) => {
    try {
      // Validate the request body against the schema
      const validatedData = subscribeSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscriber = await storage.getSubscriberByEmail(validatedData.email);
      
      if (existingSubscriber) {
        return res.status(200).json({ 
          success: true, 
          message: "Email already subscribed" 
        });
      }
      
      // Store the new subscriber
      const subscriber = await storage.createSubscriber(validatedData);
      
      // Return success response
      return res.status(201).json({ 
        success: true, 
        message: "Subscribed successfully",
        subscriberId: subscriber.id
      });
    } catch (error) {
      console.error("Error processing subscription:", error);
      
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
