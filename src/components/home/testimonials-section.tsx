"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    highlight: "2x leads in just 30 days.",
    content: "We tripled our lead flow in less than a month thanks to AstraFloww's automation setup. Their team nailed the website and built an AI bot that talks to our customers — and it actually works!",
    author: "Amit Roy",
    position: "Marketing Manager",
    company: "Lotus Wellness",
    
    profilePhoto: "/images/team/avatar.png", // placeholder
    services: ["Website", "AI Chatbot", "Meta Ads"]
  },
  {
    id: 2,
    highlight: "+80% more appointments booked.",
    content: "The AI agent they built for us is a game changer. Our website is faster, and our sales team is free to focus on closing, not chasing leads.",
    author: "Neha Kapoor",
    position: "Sales Consultant",
    company: "BrightPath",
    
    profilePhoto: "/images/team/avatar.png",
    services: ["AI Sales Agent", "Website Redesign"]
  },
  {
    id: 3,
    highlight: "Saved 10+ hours/week on support.",
    content: "AstraFloww automated our FAQs and support. Our customers get instant answers, and our team can focus on growth. Highly recommend!",
    author: "Rahul Deshmukh",
    position: "Account Executive",
    company: "Urban Realty",
    
    profilePhoto: "/images/team/avatar.png",
    services: ["AI Support Bot", "Automation"]
  },
  {
    id: 4,
    highlight: "+65 happy clients and counting.",
    content: "The team at AstraFloww is exceptional. They understood our requirements perfectly and delivered a product that exceeded our expectations.",
    author: "Aakash Verma",
    position: "Founder",
    company: "Verma Digital",
    
    profilePhoto: "/images/team/avatar.png",
    services: ["Custom CRM", "Web App"]
  }
]

const clientLogos = [
  "/images/company/lotus-wellness-logo.png",
  "/images/company/brightpath-logo.png",
  "/images/company/urban-realty-logo.png",
  "/images/company/verma-digital-logo.png"
]

export default function TestimonialsSection() {
  const [emblaApi, setEmblaApi] = React.useState<CarouselApi | null>(null);
  const autoplayRef = React.useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (!emblaApi) return;
    if (isHovered) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      return;
    }
    autoplayRef.current = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 6000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi, isHovered]);

  return (
    <section className="pt-2 pb-4 md:pt-3 md:pb-6 relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-0 p-0"
        >
          {/* Removed Clients Testimonials heading and extra spacing */}
        </motion.div>
        <Carousel
          className="w-full max-w-5xl mx-auto"
          setApi={setEmblaApi}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, idx) => (
              <CarouselItem key={testimonial.id}>
                <Card className="border-none bg-transparent">
                  <CardContent className="p-3 md:p-4">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, type: 'spring', delay: 0.1 * idx }}
                      className="flex flex-col items-center text-center space-y-3"
                    >
                      {/* Highlight line */}
                      <div className="text-blue-400 text-xs md:text-sm font-semibold mb-0.5">{testimonial.highlight}</div>
                      <div className="text-primary mb-0.5">
                        <Quote className="h-7 w-7 rotate-180" />
                      </div>
                      <p className="text-base md:text-lg italic font-semibold text-white text-center leading-snug mb-0.5 drop-shadow-md" style={{textShadow: '0 2px 8px rgba(0,0,0,0.25)'}}>
                        {`"${testimonial.content}"`}
                      </p>
                      <div className="w-10 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mx-auto mb-0.5" />
                      <div className="flex flex-col items-center">
                        {/* Profile photo or stylized avatar */}
                        
                        <div className="font-semibold text-white text-sm">{testimonial.author}</div>
                        <div className="text-xs text-blue-200 flex items-center gap-2">
                          {testimonial.position}, {testimonial.company}
                          
                        </div>
                        {/* Services used */}
                        {testimonial.services && (
                          <div className="text-xs text-blue-300 mt-0.5">Services: {testimonial.services.join(", ")}</div>
                        )}
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-2">
            <CarouselPrevious className="relative mr-2" />
            <CarouselNext className="relative ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
