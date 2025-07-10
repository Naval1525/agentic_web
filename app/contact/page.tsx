"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactNode, FormEvent, ChangeEvent, JSX } from "react";


interface FormProps {
  children: ReactNode;
  onSubmit?: (e: FormEvent<HTMLDivElement>) => void;
  [key: string]: any;
}

interface FormItemProps {
  children: ReactNode;
}

interface FormLabelProps {
  children: ReactNode;
}

interface FormControlProps {
  children: ReactNode;
}

interface FormMessageProps {
  children?: ReactNode;
}

interface CardProps {
  className?: string;
  children: ReactNode;
}

interface CardHeaderProps {
  children: ReactNode;
}

interface CardTitleProps {
  className?: string;
  children: ReactNode;
}

interface CardContentProps {
  className?: string;
  children: ReactNode;
}

interface ButtonProps {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: FormEvent<HTMLButtonElement>) => void;
  [key: string]: any;
}

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

interface InputProps {
  className?: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  [key: string]: any;
}

interface TextareaProps {
  className?: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  [key: string]: any;
}

interface SelectProps {
  className?: string;
  children: ReactNode;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  [key: string]: any;
}

interface ContactInfoProps {
  icon: string;
  label: string;
  value: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

// ---------- UI COMPONENTS ----------

const Form = ({ children, ...props }: FormProps) => (
  <div {...props}>{children}</div>
);

const FormItem = ({ children }: FormItemProps) => (
  <div className="space-y-2">{children}</div>
);

const FormLabel = ({ children }: FormLabelProps) => (
  <label className="block text-sm font-medium text-gray-200">{children}</label>
);

const FormControl = ({ children }: FormControlProps) => (
  <div>{children}</div>
);

const FormMessage = ({ children }: FormMessageProps) => 
  children ? <p className="text-sm text-red-400">{children}</p> : null;

const Card = ({ className = "", children }: CardProps) => (
  <div className={`p-6 rounded-lg ${className}`}>{children}</div>
);

const CardHeader = ({ children }: CardHeaderProps) => (
  <div className="mb-4">{children}</div>
);

const CardTitle = ({ className = "", children }: CardTitleProps) => (
  <h2 className={className}>{children}</h2>
);

const CardContent = ({ className = "", children }: CardContentProps) => (
  <div className={className}>{children}</div>
);

const Button = ({ className = "", children, disabled, ...props }: ButtonProps) => (
  <button
    className={`px-4 py-2 rounded-md font-medium transition-colors ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"} ${className}`}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

const Container = ({ className = "", children }: ContainerProps) => (
  <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl ${className}`}>
    {children}
  </div>
);

const Input = ({ className = "", ...props }: InputProps) => (
  <input
    className={`w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", ...props }: TextareaProps) => (
  <textarea
    className={`w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical ${className}`}
    {...props}
  />
);

const Select = ({ className = "", children, ...props }: SelectProps) => (
  <select
    className={`w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    {...props}
  >
    {children}
  </select>
);

// ---------- UTILS ----------

const serviceOptions: string[] = [
  "AI Automation", "AI Agents-as-a-Service", "AI Chatbots", "Web Design", "Web Development", "UI/UX Design",
  "App Development", "AWS Cloud Infrastructure", "AWS Database Solutions", "AWS Security & Compliance",
  "AWS DevOps & CI/CD", "AWS Serverless Solutions", "AWS AI/ML Services", "AWS Networking & CDN",
  "AWS Backup & Disaster Recovery", "Web Security", "Blockchain Development", "Other",
];

const validateEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validateForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};
  if (!formData.name || formData.name.trim().length < 2)
    errors.name = "Name is required and must be at least 2 characters";
  if (!formData.email || !validateEmail(formData.email))
    errors.email = "Valid email address is required";
  if (!formData.service || formData.service.trim().length < 2)
    errors.service = "Please select a service";
  if (!formData.message || formData.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters";
  return errors;
};

// ---------- CONTACT FORM ----------

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [emailJSLoaded, setEmailJSLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).emailjs) {
        (window as any).emailjs.init("7GpP_avUofQUsM1N-"); // Your public key
        setEmailJSLoaded(true);
        console.log("EmailJS loaded successfully");
      }
    };
    script.onerror = () => {
      console.error("Failed to load EmailJS");
      setError("Failed to load email service. Please try again.");
    };
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log("Form submitted!", formData);

    // Check if EmailJS is loaded
    if (!emailJSLoaded || !(window as any).emailjs) {
      setError("Email service is not ready. Please try again in a moment.");
      return;
    }

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log("Validation errors:", validationErrors);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      console.log("Sending email with EmailJS...");
      
      // Prepare email data
      const emailData = {
        name: formData.name,
        First: formData.name.split(" ")[0] || formData.name,
        Last: formData.name.split(" ").slice(1).join(" ") || "",
        email: formData.email,
        phone: formData.phone || "Not provided",
        service: formData.service,
        Message: formData.message,
        title: `New Contact Form Submission - ${formData.service}`,
      };

      console.log("Email data:", emailData);

      // Send email using EmailJS
      const result = await (window as any).emailjs.send(
        "default_service", // Your service ID
        "template_2etb3qe", // Your template ID
        emailData
      );

      console.log("EmailJS result:", result);

      if (result.status === 200) {
        console.log("Email sent successfully!");
        setSuccess(true);
        setFormData(initialFormData);
        setErrors({});
        
        // Hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
      
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setError(`Failed to send message: ${err.message || 'Unknown error'}. Please try again or contact us directly.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          </FormItem>
        </div>

        <FormItem>
          <FormLabel>Service Interested In</FormLabel>
          <FormControl>
            <Select name="service" value={formData.service} onChange={handleInputChange}>
              <option value="">Select a service</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
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
              placeholder="Tell us about your project" 
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
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg px-6 py-3 hover:from-blue-600 hover:to-indigo-700 transition-all duration-200"
          disabled={isSubmitting || !emailJSLoaded}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Message...
            </div>
          ) : !emailJSLoaded ? (
            "Loading Email Service..."
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
            <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>
          </motion.div>
        )}
      </div>
    </form>
  );
}

// ---------- PAGE ----------

export default function ContactPage() {
  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-slate-900/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl relative z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Contact
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help you.
          </p>
        </div>
      </motion.div>

      <Container className="relative z-10 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card className="bg-blue-500/5 border border-blue-500/20 rounded-lg order-1 lg:order-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white mb-2">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="pb-2 pt-0">
              <ContactForm />
            </CardContent>
          </Card>

          <Card className="bg-blue-500/5 border border-blue-500/20 rounded-lg order-2 lg:order-1">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white mb-2">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* <ContactInfo icon="phone" label="Phone" value="+91 9161055529" /> */}
              <ContactInfo icon="mail" label="Email" value="astrafloww@gmail.com" />
              <ContactInfo icon="location" label="Address" value="Greater Noida, India" />
            </CardContent>
          </Card>
        </div>
      </Container>
    </main>
  );
}

function ContactInfo({ icon, label, value }: ContactInfoProps) {
  const icons: { [key: string]: ReactNode } = {
    phone: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.69l1.38 4.14a1 1 0 01-.23.98l-2.2 2.2a11.05 11.05 0 005.17 5.17l2.2-2.2a1 1 0 01.98-.23l4.14 1.38a1 1 0 01.69.95V19a2 2 0 01-2 2h-1c-8.28 0-15-6.72-15-15V5z"
      />
    ),
    mail: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2m18 0v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8"
      />
    ),
    location: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
        />
      </>
    ),
  };

  return (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
        <svg
          className="w-5 h-5 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icons[icon]}
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-medium text-white">{label}</h3>
        <p className="text-gray-300">{value}</p>
      </div>
    </div>
  );
}
