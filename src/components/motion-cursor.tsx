"use client"

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MotionCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  // Create motion values for cursor position
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Create springs for smooth cursor movement
  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = 'none'

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Check if cursor is over an interactive element
    const handleElementChange = () => {
      const hoveredElement = document.elementFromPoint(
        cursorX.get(),
        cursorY.get()
      )

      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement)
        const isInteractive =
          computedStyle.cursor === 'pointer' ||
          hoveredElement.tagName === 'A' ||
          hoveredElement.tagName === 'BUTTON' ||
          hoveredElement.closest('a') !== null ||
          hoveredElement.closest('button') !== null

        setIsHovering(isInteractive)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousemove', handleElementChange)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.body.style.cursor = 'auto'
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousemove', handleElementChange)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#E0E0E0] z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.5 : 1,
          opacity: 0.8
        }}
        transition={{
          scale: { type: 'spring', stiffness: 500, damping: 30 }
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border border-[#E0E0E0] z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
          opacity: isHovering ? 0.5 : 0.3,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 300, damping: 25 },
          opacity: { duration: 0.2 }
        }}
      />

      {/* Subtle trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#E0E0E0]/20 z-[9998] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 1.3 : 1,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 300, damping: 20 },
          default: { duration: 0.3 }
        }}
      />
    </>
  )
}
