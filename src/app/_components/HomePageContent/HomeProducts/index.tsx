'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import ArrowLeftIcon from '../../../_assets/icons/ArrowLeftIcon'
import ArrowRightIcon from '../../../_assets/icons/ArrowRightIcon'
import Container from '../../../_components/Container'
import ProductItem from '../../../_components/ProductList/ProductItem'
import ScrollAnimated from '../../../_components/ScrollAnimated'

import 'swiper/css'

import styles from './HomeProducts.module.scss'

export default function HomeProducts() {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const [products, setProducts] = useState([])

  async function fetchProducts() {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products?where[categories][in][0]=1`,
    )
    const json = await req.json()
    setProducts(json.docs)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.header}>
          <ScrollAnimated>
            <h2 className={styles.title}>Buy the Best Band</h2>
          </ScrollAnimated>
          <ScrollAnimated>
            <Link href="/" className={styles.link}>
              Explore the Lineup
            </Link>
          </ScrollAnimated>
        </div>
        <div className={styles.sliderWrapper}>
          <Swiper
            spaceBetween={40}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1.15,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 40,
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
            {products.map(
              product =>
                product && (
                  <SwiperSlide key={product.id}>
                    <ScrollAnimated>
                      <ProductItem isExtendedInfo={true} product={product} />
                    </ScrollAnimated>
                  </SwiperSlide>
                ),
            )}
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
