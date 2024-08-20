'use client'

import { useEffect, useState } from 'react'

import { Product } from '../../../payload/payload-types'
import ProductItem from '../../_components/ProductList/ProductItem'

import styles from './ProductList.module.scss'

type ProductListProps = {
  categoryId: string
}

export default function ProductList({ categoryId }: ProductListProps) {
  const [products, setProducts] = useState([])

  async function fetchProducts() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products?where[categories][in][0]=${categoryId}`,
    )
    const data = await res.json()
    setProducts(data.docs)
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className={styles.wrapper}>
      {products.map((product: Product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}
