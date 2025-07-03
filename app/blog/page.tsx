"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/src/components/ui/container";
import { Button } from "@/src/components/ui/button";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
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

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    category: 'Web Development',
    date: 'May 15, 2024',
    author: 'Alex Johnson',
    excerpt: 'Explore the emerging trends that are shaping the future of web development, from AI integration to serverless architecture.',
    image: '/placeholder.jpg',
    link: '/blog/future-web-development'
  },
  {
    id: 2,
    title: 'Designing for Accessibility: Best Practices for Inclusive UX',
    category: 'UI/UX Design',
    date: 'May 10, 2024',
    author: 'Sarah Chen',
    excerpt: 'Learn how to create digital experiences that are accessible to all users, regardless of their abilities or disabilities.',
    image: '/placeholder.jpg',
    link: '/blog/designing-accessibility'
  },
  {
    id: 3,
    title: 'How Blockchain is Revolutionizing Digital Security',
    category: 'Blockchain',
    date: 'May 5, 2024',
    author: 'Michael Rodriguez',
    excerpt: 'Discover how blockchain technology is transforming digital security and creating new opportunities for businesses.',
    image: '/placeholder.jpg',
    link: '/blog/blockchain-security'
  },
  {
    id: 4,
    title: 'Mobile App Development: Native vs. Cross-Platform',
    category: 'App Development',
    date: 'April 28, 2024',
    author: 'Priya Patel',
    excerpt: 'A comprehensive comparison of native and cross-platform app development approaches to help you choose the right strategy.',
    image: '/placeholder.jpg',
    link: '/blog/native-vs-cross-platform'
  },
  {
    id: 5,
    title: 'Leveraging AI for Business Growth: Practical Applications',
    category: 'AI & Machine Learning',
    date: 'April 20, 2024',
    author: 'David Kim',
    excerpt: 'Explore practical ways businesses can implement AI to drive growth, improve efficiency, and enhance customer experiences.',
    image: '/placeholder.jpg',
    link: '/blog/ai-business-growth'
  },
  {
    id: 6,
    title: 'SEO Strategies That Actually Work in 2024',
    category: 'Digital Marketing',
    date: 'April 15, 2024',
    author: 'Emma Wilson',
    excerpt: 'Discover effective SEO strategies that can help your business improve visibility and drive organic traffic in 2024.',
    image: '/placeholder.jpg',
    link: '/blog/seo-strategies'
  }
];

// Categories for filtering
const categories = ['All', 'Web Development', 'UI/UX Design', 'Blockchain', 'App Development', 'AI & Machine Learning', 'Digital Marketing'];

export default function BlogPage() {
  const [filter, setFilter] = useState('All');
  
  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

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
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-4xl relative z-10"
      >
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Blog</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Insights, tips, and industry trends from our team of experts to help you stay ahead in the digital world.
          </p>
        </div>
      </motion.div>

      {/* Blog Filter */}
      <Container className="relative z-10 mb-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              className="rounded-full px-4 py-2 text-xs sm:text-sm font-medium"
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </Container>

      {/* Blog Grid */}
      <Container className="relative z-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="bg-blue-500/5 border border-blue-500/20 shadow-lg hover:bg-blue-500/10 transition-colors duration-300 flex flex-col h-full">
              <CardHeader className="pb-2 flex-row items-center gap-2">
                <Badge variant="secondary" className="mb-0 mr-2">{post.category}</Badge>
                <span className="text-xs text-gray-400">{post.date}</span>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <Link href={post.link} className="hover:underline">
                  <CardTitle className="text-lg font-bold text-white mb-2 hover:text-blue-400 transition-colors">
                    {post.title}
                  </CardTitle>
                </Link>
                <p className="text-gray-300 text-sm mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-400">By {post.author}</span>
                  <Link href={post.link} className="text-blue-400 hover:text-blue-300 text-xs font-medium flex items-center gap-1">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <div className="text-center text-gray-400 py-12">No blog posts found for this category.</div>
        )}
      </Container>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-12 sm:mt-16 lg:mt-20 mb-12 relative z-10"
      >
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-white">Want more insights?</h2>
          <p className="text-base sm:text-lg text-gray-300 px-4">Subscribe to our newsletter for the latest updates, tips, and trends.</p>
        </div>
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-lg bg-blue-900/20 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            required
          />
          <Button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg px-6 py-3">
            Subscribe
          </Button>
        </form>
      </motion.div>
    </main>
  );
}
