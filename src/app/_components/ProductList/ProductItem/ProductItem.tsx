'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Product } from '../../../../payload/payload-types'
import BatteryIcon from '../../../_assets/icons/BatteryIcon'
import BoxIcon from '../../../_assets/icons/BoxIcon'
import GoTimeIcon from '../../../_assets/icons/GoTimeIcon'
import MagicIcon from '../../../_assets/icons/MagicIcon'
import MessageIcon from '../../../_assets/icons/MessageIcon'
import SizesIcon from '../../../_assets/icons/SizesIcon'
import WellbeingIcon from '../../../_assets/icons/WellbeingIcon'
import { Button } from '../../../_components/Button'
import { Price } from '../../../_components/Price'
import ProductColor from '../../../_components/ProductColor'
import SizeGuideButton from '../../../_components/SizeGuideButton'

import 'swiper/css/pagination'

import styles from './ProductItem.module.scss'

type ProductItemProps = {
  isExtendedInfo?: boolean
  product: Product
}

export default function ProductItem({ isExtendedInfo, product }: ProductItemProps) {
  return (
    <div className={clsx(styles.root, isExtendedInfo && styles.rootExtended)}>
      <div>
        <Swiper slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination]}>
          {product.gallery.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={styles.images}>
                <Image fill src={image.image.url} alt="1" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.inner}>
        <div className={styles.list}>
          {product.colors.map((color, index) => (
            <ProductColor key={index} color={color} />
          ))}
        </div>
      </div>
      <div className={styles.inner}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{product.title}</h3>
          <Price className={styles.price} product={product} button={false} />
        </div>
        <Button
          href={`/products/${product.slug}`}
          appearance={isExtendedInfo ? 'primary' : 'secondary'}
          label="BUY"
        />
      </div>
      {isExtendedInfo && (
        <>
          <div className={styles.inner}>
            <div className={styles.list}>
              {product.features.map(feature => (
                <div key={feature} className={styles.badge}>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className={clsx(styles.inner, styles.innerRow)}>
            <SizesIcon />
            <div className={styles.innerContent}>
              <div className={styles.label}>Sizes:</div>
              <div>{product.sizes.join(',')}</div>
            </div>
            <SizeGuideButton />
          </div>
          <div className={clsx(styles.inner, styles.innerRow)}>
            <MagicIcon />
            <div className={styles.innerContent}>
              <div className={styles.label}>Magic:</div>
              <div className={styles.list}>
                {product.magic.map(i => (
                  <span key={i}>{i}</span>
                ))}
              </div>
            </div>
          </div>
          <div className={clsx(styles.inner, styles.innerRow)}>
            <WellbeingIcon />
            <div className={styles.innerContent}>
              <div className={styles.label}>Wellbeing:</div>
              <div className={styles.list}>
                {product.wellbeing.map(i => (
                  <span key={i}>{i}</span>
                ))}
              </div>
            </div>
          </div>
          <div className={clsx(styles.inner, styles.innerRow)}>
            <BoxIcon />
            <div className={styles.innerContent}>
              <div className={styles.label}>Out-of-box Experience:</div>
              <div className={styles.list}>
                {product.outOfBoxExperience.map(i => (
                  <span key={i}>{i}</span>
                ))}
              </div>
            </div>
          </div>
          <div className={clsx(styles.inner, styles.innerRow)}>
            <GoTimeIcon />
            <div className={styles.innerContent}>
              <div className={styles.label}>Go Time:</div>
              <div className={styles.list}>
                {product.goTime.map(i => (
                  <span key={i}>{i}</span>
                ))}
              </div>
            </div>
          </div>
          <div className={clsx(styles.inner, styles.innerRow)}>
            <BatteryIcon />
            <div className={styles.innerContent}>
              <div className={styles.label}>Battery Life/Charger:</div>
              <div className={styles.list}>
                {product.batteryLife.map(i => (
                  <span key={i}>{i}</span>
                ))}{' '}
                /{' '}
                {product.charger.map(i => (
                  <span key={i}>{i}</span>
                ))}
              </div>
            </div>
          </div>
          <div className={clsx(styles.inner, styles.innerRow)}>
            <MessageIcon />
            <div className={styles.innerContent}>
              <div className={styles.label}>Virtual Leash:</div>
              SMS Messaging
              <div className={styles.list}>
                {product.virtualLeash.map(i => (
                  <span key={i} className={styles.badge}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
