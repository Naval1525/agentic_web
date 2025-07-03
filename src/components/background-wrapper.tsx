"use client"

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"

// Dynamically import backgrounds to avoid SSR issues
const ThreeBackground = dynamic(
  () => import("./three-background"),
  { ssr: false }
)

const CSSBackground = dynamic(
  () => import("./css-background"),
  { ssr: false }
)

export default function BackgroundWrapper() {
  return (
    <div className="fixed inset-0 -z-10 bg-no-repeat" style={{ backgroundImage: 'url(/background.jpg)', backgroundSize: 'auto' }} />
  )
}
