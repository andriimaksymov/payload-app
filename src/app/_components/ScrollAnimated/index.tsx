'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type ScrollAnimatedProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

const ScrollAnimated: React.FC<ScrollAnimatedProps> = ({ children, className, delay = 0 }) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (elementRef.current) {
      if (window.innerWidth > 768) {
        gsap.fromTo(
          elementRef.current,
          {
            opacity: 0,
            y: 150,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power3.out',
            delay: delay,
            scrollTrigger: {
              trigger: elementRef.current,
              once: true,
              start: 'top 80%',
              end: 'bottom 50%',
            },
          },
        )
      }
    }
  }, [delay])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

export default ScrollAnimated
