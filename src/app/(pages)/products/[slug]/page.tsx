import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Product, Product as ProductType } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import { fetchDocs } from '../../../_api/fetchDocs'
import { AddToCartButton } from '../../../_components/AddToCartButton'
import BorderedBlock from '../../../_components/BorderedBlock'
import Container from '../../../_components/Container'
import Divider from '../../../_components/Divider'
import { PaywallBlocks } from '../../../_components/PaywallBlocks'
import { Price } from '../../../_components/Price'
import { ProductHero } from '../../../_heros/Product'
import { generateMeta } from '../../../_utilities/generateMeta'

import styles from './index.module.scss'

export const dynamic = 'force-dynamic'

export default async function Product({ params: { slug } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let product: Product | null = null

  try {
    product = await fetchDoc<Product>({
      collection: 'products',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
  }

  if (!product) {
    notFound()
  }

  return (
    <React.Fragment>
      <Container className={styles.wrap}>
        <div>
          <h1>Ordering</h1>
          <Divider space={5} />
          <div className={styles.inner}>
            <h4>Shazam Band</h4>
            <div className={styles.list}>
              <BorderedBlock leftLabel="Ultra Plus" rightLabel="$595" />
              <BorderedBlock leftLabel="Ultra" rightLabel="$395" />
              <BorderedBlock
                leftLabel="Size 2"
                leftLabelFootnote="(XtraSmallOnly)"
                rightLabel="$395"
              />
            </div>
          </div>
          <Divider space={5} />
        </div>
        <div>
          <Divider space={2} />
          <h5>Order Summary</h5>
          <Divider space={2} />
          <div className="priceWrapper">
            <div>
              Total one-time payment:
              <span>Including tax</span>
            </div>
            <Price product={product} />
          </div>
          <AddToCartButton product={product} />
        </div>
      </Container>
      <ProductHero product={product} />
      {product?.enablePaywall && <PaywallBlocks productSlug={slug as string} disableTopPadding />}
    </React.Fragment>
  )
}

export async function generateStaticParams() {
  try {
    const products = await fetchDocs<ProductType>('products')
    return products?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let product: Product | null = null

  try {
    product = await fetchDoc<Product>({
      collection: 'products',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {}

  return generateMeta({ doc: product })
}
