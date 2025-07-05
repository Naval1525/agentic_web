"use client"

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Rocket, Award } from 'lucide-react'
import './funfacts.css'

interface FunFactProps {
  icon: React.ReactNode
  count: number
  title: string
  suffix?: string
}

const FunFact = ({ icon, count, title, suffix = "+" }: FunFactProps) => {
  const [displayCount, setDisplayCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCount()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCount = () => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = count / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= count) {
        setDisplayCount(count)
        clearInterval(timer)
      } else {
        setDisplayCount(Math.floor(current))
      }
    }, duration / steps)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="fact__item"
    >
      <div className="icon__container">
        {icon}
      </div>
      <div className="count__container">
        <span className="odometer odometer-auto-theme">
          {displayCount}
        </span>
        <span className="text-lg ml-1">{suffix}</span>
      </div>
      <p className="text__muted">{title}</p>
    </motion.div>
  )
}

export default function FunFacts() {
  const facts = [
    {
      icon: <Users className="w-5 h-5" />,
      count: 65,
      title: "Happy Clients",
      suffix: "+"
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      count: 50,
      title: "Projects Completed",
      suffix: "+"
    },
    {
      icon: <Award className="w-5 h-5" />,
      count: 25,
      title: "AI Agents Deployed",
      suffix: "+"
    }
  ]

  return (
    <section className="py-8 relative">
      <div className="fun__facts">
        {facts.map((fact, index) => (
          <FunFact
            key={index}
            icon={fact.icon}
            count={fact.count}
            title={fact.title}
            suffix={fact.suffix}
          />
        ))}
      </div>
    </section>
  )
} 