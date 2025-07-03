"use client"

import dynamic from "next/dynamic"

// Dynamically import the motion cursor to avoid SSR issues
const MotionCursor = dynamic(
  () => import("./motion-cursor"),
  { ssr: false }
)

export default function CursorWrapper() {
  return <MotionCursor />
}
