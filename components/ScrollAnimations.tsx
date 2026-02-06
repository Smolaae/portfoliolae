"use client"

import type React from "react"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function useScrollAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return { ref, isInView }
}

export function FadeInUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export function FadeInLeft({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export function FadeInRight({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export function RotateIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotate: -10 }}
      animate={isInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -10 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const { ref, isInView } = useScrollAnimation()
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    if (isInView) {
      let i = 0
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(timer)
        }
      }, 50)

      return () => clearInterval(timer)
    }
  }, [isInView, text])

  return (
    <span ref={ref} className="inline-block">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="inline-block w-0.5 h-6 bg-current ml-1"
      />
    </span>
  )
}

// Animation de parallax
export function ParallaxSection({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  )
}

export function CounterAnimation({ target, duration = 2 }: { target: number; duration?: number }) {
  const { ref, isInView } = useScrollAnimation()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = target / (duration * 60) // 60 FPS

      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [isInView, target, duration])

  return <span ref={ref}>{count}</span>
}
