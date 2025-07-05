"use client"

import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Container } from "@/src/components/ui/container";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Service options for the dropdown
const serviceOptions = [
  'AI Automation',
  'AI Agents-as-a-Service',
  'AI Chatbots',
  'Web Design',
  'Web Development',
  'UI/UX Design',
  'App Development',
  'AWS Cloud Infrastructure',
  'AWS Database Solutions',
  'AWS Security & Compliance',
  'AWS DevOps & CI/CD',
  'AWS Serverless Solutions',
  'AWS AI/ML Services',
  'AWS Networking & CDN',
  'AWS Backup & Disaster Recovery',
  'Web Security',
  'Blockchain Development',
  'Other'
];

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(2, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactForm() {
  const [success, setSuccess] = useState(false);
  const methods = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = methods;

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((res) => setTimeout(res, 1200));
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormField name="name" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Your name" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField name="email" control={methods.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} placeholder="Your email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField name="phone" control={methods.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Phone (Optional)</FormLabel>
              <FormControl>
                <Input type="tel" {...field} placeholder="Your phone number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>
        <FormField name="service" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Service Interested In</FormLabel>
            <FormControl>
              <Select value={field.value} onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <FormField name="message" control={methods.control} render={({ field }) => (
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea {...field} rows={5} placeholder="Tell us about your project" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg px-6 py-3" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
        {success && (
          <motion.div
            className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-300">Thank you for contacting us. We'll get back to you as soon as possible.</p>
          </motion.div>
        )}
      </form>
    </Form>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen relative">
      {/* Background image with overlays */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/background.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center"
          style={{ minHeight: "100%", minWidth: "100%" }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-blue-500/10 via-transparent to-slate-900/60"></div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl relative z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Contact</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </motion.div>

      {/* Contact Info & Form Section */}
      <Container className="relative z-10 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form Card - moved above on mobile */}
          <Card className="bg-blue-500/5 border border-blue-500/20 rounded-lg order-1 lg:order-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white mb-2">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="pb-2 pt-0">
              <ContactForm />
            </CardContent>
          </Card>
          {/* Contact Info Card - below form on mobile */}
          <Card className="bg-blue-500/5 border border-blue-500/20 rounded-lg order-2 lg:order-1">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white mb-2">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                  {/* Phone Icon */}
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="text-gray-300">+91 9006552373</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                  {/* Email Icon */}
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-gray-300">webnexaai@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                  {/* Address Icon */}
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Address</h3>
                  <p className="text-gray-300">India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </main>
  );
}
