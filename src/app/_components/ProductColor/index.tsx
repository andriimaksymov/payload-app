import { Product } from '../../../payload/payload-types'

import styles from './ProductColor.module.scss'

type ProductColorProps = {
  size?: number
  color: Product['colors'][number]
}

export default function ProductColor({ size = 16, color }: ProductColorProps) {
  const { color1, color2 } = color

  return (
    <div
      className={styles.root}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${color1} 50%, ${color2} 50%)`,
      }}
    />
  )
}
