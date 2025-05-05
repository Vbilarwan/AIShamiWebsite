import { db } from "@db";
import { eq } from "drizzle-orm";
import { contacts, subscribers, type Contact, type ContactInsert, type Subscriber, type SubscriberInsert } from "@shared/schema";

/**
 * Storage interface for application data
 */
export const storage = {
  /**
   * Create a new contact form submission
   */
  async createContact(data: ContactInsert): Promise<Contact> {
    const [contact] = await db.insert(contacts).values(data).returning();
    return contact;
  },

  /**
   * Get all contact form submissions
   */
  async getAllContacts(): Promise<Contact[]> {
    return await db.query.contacts.findMany({
      orderBy: (contacts, { desc }) => [desc(contacts.createdAt)]
    });
  },

  /**
   * Create a new newsletter subscriber
   */
  async createSubscriber(data: SubscriberInsert): Promise<Subscriber> {
    const [subscriber] = await db.insert(subscribers).values(data).returning();
    return subscriber;
  },

  /**
   * Get a subscriber by email
   */
  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return await db.query.subscribers.findFirst({
      where: eq(subscribers.email, email)
    });
  },

  /**
   * Get all subscribers
   */
  async getAllSubscribers(): Promise<Subscriber[]> {
    return await db.query.subscribers.findMany({
      orderBy: (subscribers, { desc }) => [desc(subscribers.createdAt)]
    });
  }
};
