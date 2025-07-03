"use client"

import { motion } from "framer-motion"
import { MessageSquare, FileText, DollarSign, Users, Star, Briefcase } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const processSteps = [
  {
    number: "01",
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Contact Us",
    description: "Reach out to us with your project idea."
  },
  {
    number: "02",
    icon: <FileText className="h-8 w-8" />,
    title: "Explain Requirements",
    description: "Discuss your needs in detail with our team."
  },
  {
    number: "03",
    icon: <DollarSign className="h-8 w-8" />,
    title: "Get Quotes",
    description: "Receive a detailed quote and project proposal."
  }
]

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "6+",
    label: "Year's Experience"
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    value: "100+",
    label: "Projects"
  },
  {
    icon: <Star className="h-8 w-8" />,
    value: "95+",
    label: "Reviews"
  }
]

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary mb-2">Our Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures efficient delivery of your projects with maximum transparency and collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-t-4 border-t-primary">
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-primary">{step.icon}</div>
                    <div className="text-3xl font-bold text-muted-foreground/50">{step.number}</div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl" aria-hidden="true">
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-accent opacity-20"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center text-primary mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
