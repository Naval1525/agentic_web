"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

const portfolioItems = [
  {
    id: 1,
    title: "Naveen's Chemistry Classes",
    description: "Unlock the secrets of chemistry with our expert guidance at Tripple point. Our comprehensive coaching centre offers personalized instruction and practice sessions tailored to your learning needs. ",
    image: "/images/portfolio/chem.png",
    url: "https://ignite-learning-hub-portal.vercel.app/"
  },
  {
    id: 2,
    title: "Virtual Venture",
    description: "A place to master stock without the hassle of using pen and paper",
    image: "/images/portfolio/vv.png",
    url: "https://virtual-ventures.netlify.app/"
  },
  {
    id: 3,
    title: "DevFlow",
    description: "Your go-to platform for coding questions, community-driven answers, and knowledge sharing. Join our community !",
    image: "/images/portfolio/df.png",
    url: "https://devflow-1.onrender.com/"
  }
]

export default function PortfolioSection() {
  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Recent Works</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects showcasing innovation and excellence
          </p>
        </motion.div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {portfolioItems.map((item) => (
              <CarouselItem key={item.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center p-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative aspect-video overflow-hidden rounded-lg bg-muted"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                    <div className="pt-3">
                      <Button asChild variant="outline" size="sm">
                        <Link href={item.url} target="_blank" rel="noopener noreferrer">
                          <span>Desktop Preview</span>
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative mr-2" />
            <CarouselNext className="relative ml-2" />
          </div>
        </Carousel>
        <div className="text-center mt-6">
          <Button asChild size="sm">
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
