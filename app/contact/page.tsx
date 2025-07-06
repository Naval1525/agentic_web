"use client"

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Mock UI components for demonstration
const Form = ({ children, ...props }) => <div {...props}>{children}</div>;
const FormItem = ({ children }) => <div className="space-y-2">{children}</div>;
const FormLabel = ({ children }) => <label className="block text-sm font-medium text-gray-200">{children}</label>;
const FormControl = ({ children }) => <div>{children}</div>;
const FormMessage = ({ children }) => children && <p className="text-sm text-red-400">{children}</p>;
const Card = ({ className, children }) => <div className={`p-6 rounded-lg ${className}`}>{children}</div>;
const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;
const CardTitle = ({ className, children }) => <h2 className={className}>{children}</h2>;
const CardContent = ({ className, children }) => <div className={className}>{children}</div>;
const Button = ({ className, children, disabled, ...props }) => (
  <button 
    className={`px-4 py-2 rounded-md font-medium transition-colors ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'} ${className}`}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);
const Container = ({ className, children }) => <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl ${className}`}>{children}</div>;
const Input = ({ className, ...props }) => (
  <input 
    className={`w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    {...props}
  />
);
const Textarea = ({ className, ...props }) => (
  <textarea 
    className={`w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical ${className}`}
    {...props}
  />
);
const Select = ({ value, onChange, children, ...props }) => {
  return (
    <select 
      value={value} 
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      {...props}
    >
      {children}
    </select>
  );
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

// Validation functions
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = "Name is required and must be at least 2 characters";
  }
  
  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = "Valid email address is required";
  }
  
  if (!formData.service || formData.service.trim().length < 2) {
    errors.service = "Please select a service";
  }
  
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }
  
  return errors;
};

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [emailJSLoaded, setEmailJSLoaded] = useState(false);

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      // Initialize EmailJS with your public key
      if (window.emailjs) {
        window.emailjs.init('7GpP_avUofQUsM1N-');
        setEmailJSLoaded(true);
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!emailJSLoaded) {
      setError('EmailJS is not loaded yet. Please try again.');
      return;
    }

    // Validate form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setError(null);
    
    try {
      // Prepare the email data in the format expected by your EmailJS template
      const emailData = {
        name: formData.name,
        First: formData.name.split(' ')[0] || formData.name, // First name
        Last: formData.name.split(' ').slice(1).join(' ') || '', // Last name
        email: formData.email,
        phone: formData.phone || '',
        service: formData.service,
        Message: formData.message,
        title: `New Contact Form Submission - ${formData.service}`, // Auto-generated title
      };

      // Send email using EmailJS
      const result = await window.emailjs.send(
        'default_service', // Your service ID
        'template_2etb3qe', // Your template ID
        emailData
      );

      if (result.status === 200) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setErrors({});
        setTimeout(() => setSuccess(false), 4000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form>
      <div className="space-y-6">
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name" 
            />
          </FormControl>
          <FormMessage>{errors.name}</FormMessage>
        </FormItem>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com" 
              />
            </FormControl>
            <FormMessage>{errors.email}</FormMessage>
          </FormItem>
          
          <FormItem>
            <FormLabel>Phone (Optional)</FormLabel>
            <FormControl>
              <Input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your phone number" 
              />
            </FormControl>
            <FormMessage>{errors.phone}</FormMessage>
          </FormItem>
        </div>
        
        <FormItem>
          <FormLabel>Service Interested In</FormLabel>
          <FormControl>
            <Select 
              name="service"
              value={formData.service} 
              onChange={handleInputChange}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Select>
          </FormControl>
          <FormMessage>{errors.service}</FormMessage>
        </FormItem>
        
        <FormItem>
          <FormLabel>Message</FormLabel>
          <FormControl>
            <Textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5} 
              placeholder="Tell us about your project and requirements" 
            />
          </FormControl>
          <FormMessage>{errors.message}</FormMessage>
        </FormItem>
        
        {error && (
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-400">
            {error}
          </div>
        )}
        
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg px-6 py-3" 
          disabled={isSubmitting || !emailJSLoaded}
          onClick={handleSubmit}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : !emailJSLoaded ? (
            "Loading..."
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
      </div>
    </Form>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen relative">
      {/* Background with overlays */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Contact
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </motion.div>

      {/* Contact Info & Form Section */}
      <Container className="relative z-10 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form Card */}
          <Card className="bg-blue-500/5 border border-blue-500/20 rounded-lg order-1 lg:order-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white mb-2">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="pb-2 pt-0">
              <ContactForm />
            </CardContent>
          </Card>
          
          {/* Contact Info Card */}
          <Card className="bg-blue-500/5 border border-blue-500/20 rounded-lg order-2 lg:order-1">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white mb-2">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="text-gray-300">+91 9161055529</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-gray-300">astrafloww@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Address</h3>
                  <p className="text-gray-300">Greater Noida, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </main>
  );
}