"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full flex justify-center mt-6">
      <nav className="flex items-center justify-between w-full max-w-4xl px-6 py-2 bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full" style={{ WebkitBackdropFilter: 'blur(24px)', backdropFilter: 'blur(24px)' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 font-bold text-lg text-[#E0E0E0]">
          <Image src="/AstraFlow.png" alt="WebNexaAI Logo" width={32} height={32} className="rounded-full" />
          <span className="font-extrabold">AstraFlow</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 mx-8">
          <Link href="/" className="text-[#B0B0B0] hover:text-[#E0E0E0] transition-colors font-medium">Home</Link>
          <Link href="/about" className="text-[#B0B0B0] hover:text-[#E0E0E0] transition-colors font-medium">About</Link>
          <Link href="/services" className="text-[#B0B0B0] hover:text-[#E0E0E0] transition-colors font-medium">Services</Link>
          <Link href="/portfolio" className="text-[#B0B0B0] hover:text-[#E0E0E0] transition-colors font-medium">Portfolio</Link>
          <Link href="/projects" className="text-[#B0B0B0] hover:text-[#E0E0E0] transition-colors font-medium">Projects</Link>
          <Link href="/contact" className="text-[#B0B0B0] hover:text-[#E0E0E0] transition-colors font-medium">Contact</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#E0E0E0] hover:bg-[#333] rounded-full">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[#181818]/95 backdrop-blur-md border-l border-[#444] p-6">
              <div className="flex flex-col h-full">
                {/* Header with close button */}
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center space-x-2 font-bold text-lg text-[#E0E0E0]">
                    <Image src="/AstraFlow.png" alt="AstraFlow Logo" width={28} height={28} className="rounded-full" />
                    <span className="font-extrabold">AstraFlow</span>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-[#E0E0E0] hover:bg-[#333] rounded-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                {/* Navigation Links */}
                <div className="flex-1 flex flex-col space-y-1">
                  <Link 
                    href="/" 
                    className="flex items-center px-4 py-3 text-[#E0E0E0] hover:text-white hover:bg-[#333] rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about" 
                    className="flex items-center px-4 py-3 text-[#E0E0E0] hover:text-white hover:bg-[#333] rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/services" 
                    className="flex items-center px-4 py-3 text-[#E0E0E0] hover:text-white hover:bg-[#333] rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <Link 
                    href="/portfolio" 
                    className="flex items-center px-4 py-3 text-[#E0E0E0] hover:text-white hover:bg-[#333] rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Portfolio
                  </Link>
                  {/* <Link 
                    href="/blog" 
                    className="flex items-center px-4 py-3 text-[#E0E0E0] hover:text-white hover:bg-[#333] rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link> */}
                  <Link 
                    href="/contact" 
                    className="flex items-center px-4 py-3 text-[#E0E0E0] hover:text-white hover:bg-[#333] rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
                
                {/* Bottom CTA */}
                <div className="pt-4 border-t border-[#444]">
                  <a
                    href="https://cal.com/devanshi-jaiswal-gjcdhl/discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-[#232323] hover:bg-[#333] text-[#E0E0E0] rounded-md font-medium transition-colors border border-[#444] w-full justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Let&apos;s Talk
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Desktop Let's Talk Button */}
        <div className="hidden md:block">
          <a
            href="https://cal.com/devanshi-jaiswal-gjcdhl/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-[#232323] hover:bg-[#333] text-[#E0E0E0] rounded-md font-medium transition-colors border border-[#444]"
          >
            Let&apos;s Talk
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  )
}
