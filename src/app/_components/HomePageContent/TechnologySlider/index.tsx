'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import ArrowLeftIcon from '../../../_assets/icons/ArrowLeftIcon'
import ArrowRightIcon from '../../../_assets/icons/ArrowRightIcon'
import Container from '../../../_components/Container'
import ScrollAnimated from '../../../_components/ScrollAnimated'

import 'swiper/css'

import styles from './TechnologySlider.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function TechnologySlider() {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.header}>
          <ScrollAnimated>
            <h2 className={styles.title}>
              Technology For <br />
              The Sake Of Love
            </h2>
          </ScrollAnimated>
          <ScrollAnimated>
            <Link href="/" className={styles.link}>
              Get To Know Shazam!
            </Link>
          </ScrollAnimated>
        </div>
        <div className={styles.sliderWrapper}>
          <Swiper
            spaceBetween={16}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1.15,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={swiper => {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
              }
            }}
          >
            <SwiperSlide>
              <ScrollAnimated>
                <div className={styles.slide}>
                  <Image fill src="/images/technology/magic.png" alt="1" />
                </div>
              </ScrollAnimated>
            </SwiperSlide>
            <SwiperSlide>
              <ScrollAnimated delay={0.25}>
                <div className={styles.slide}>
                  <Image fill src="/images/technology/wellbeing.png" alt="1" />
                </div>
              </ScrollAnimated>
            </SwiperSlide>
            <SwiperSlide>
              <ScrollAnimated delay={0.5}>
                <div className={styles.slide}>
                  <Image fill src="/images/technology/personas.png" alt="1" />
                </div>
              </ScrollAnimated>
            </SwiperSlide>
            <SwiperSlide>
              <ScrollAnimated delay={0.75}>
                <div className={styles.slide}>
                  <Image fill src="/images/technology/science.png" alt="1" />
                </div>
              </ScrollAnimated>
            </SwiperSlide>
          </Swiper>
          <Container className={styles.sliderButtons}>
            <button ref={prevRef} className={styles.sliderButton}>
              <ArrowLeftIcon />
            </button>
            <button ref={nextRef} className={styles.sliderButton}>
              <ArrowRightIcon />
            </button>
          </Container>
        </div>
      </Container>
    </div>
  )
}
