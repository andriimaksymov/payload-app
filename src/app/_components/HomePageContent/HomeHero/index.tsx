'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import LogoIcon from '../../../_assets/icons/LogoIcon'
import Container from '../../../_components/Container'
import ScrollAnimated from '../../../_components/ScrollAnimated'

import styles from './HomeHero.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function HomeHero() {
  const videoContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.innerWidth > 768) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: videoContainerRef.current,
            start: 'center center',
            end: 'bottom center',
            scrub: true,
          },
        })
        .fromTo(
          videoContainerRef.current,
          { clipPath: 'inset(0%)' },
          { clipPath: 'inset(5.25% round 44px)' },
        )
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <Container className={styles.top}>
        <ScrollAnimated>
          <LogoIcon className={styles.logo} />
        </ScrollAnimated>
        <ScrollAnimated>
          <h2 className={styles.title}>Unleash Your Pet’s Inner Human</h2>
        </ScrollAnimated>
      </Container>
      <div ref={videoContainerRef} className={styles.videoContainer}>
        <video muted autoPlay loop className={styles.video} src="/shazam_hero_video.mp4" />
      </div>
    </div>
  )
}
