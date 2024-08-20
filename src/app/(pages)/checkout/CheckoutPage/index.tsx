'use client'

import React, { Fragment, useEffect } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Settings } from '../../../../payload/payload-types'
import { Button } from '../../../_components/Button'
import { LoadingShimmer } from '../../../_components/LoadingShimmer'
import { Price } from '../../../_components/Price'
import { useCart } from '../../../_providers/Cart'
import { useTheme } from '../../../_providers/Theme'
import cssVariables from '../../../cssVariables'
import { CheckoutForm } from '../CheckoutForm'

import classes from './index.module.scss'

const apiKey = `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
const stripe = loadStripe(apiKey)

export const CheckoutPage: React.FC<{
  settings: Settings
}> = props => {
  const {
    settings: { productsPage },
  } = props

  const router = useRouter()
  const [error, setError] = React.useState<string | null>(null)
  const [clientSecret, setClientSecret] = React.useState()
  const hasMadePaymentIntent = React.useRef(false)
  const { theme } = useTheme()

  const { cart, cartIsEmpty, cartTotal } = useCart()

  useEffect(() => {
    if (cartIsEmpty) {
      router.push('/cart')
    }
  }, [router, cartIsEmpty])

  useEffect(() => {
    if (cart && hasMadePaymentIntent.current === false) {
      hasMadePaymentIntent.current = true
    }
  }, [cart])

  if (!stripe) return null

  return (
    <div className={classes.wrapper}>
      <div className={classes.left}>
        {cartIsEmpty && (
          <div>
            {'Your '}
            <Link href="/cart">cart</Link>
            {' is empty.'}
            {typeof productsPage === 'object' && productsPage?.slug && (
              <Fragment>
                {' '}
                <Link href={`/${productsPage.slug}`}>Continue shopping?</Link>
              </Fragment>
            )}
          </div>
        )}
        {!cartIsEmpty && (
          <div className={classes.items}>
            {cart?.items?.map((item, index) => {
              if (typeof item.product === 'object') {
                const { quantity, product } = item

                if (!quantity) return null

                return (
                  <Fragment key={index}>
                    <Button label="Back to cart" href="/cart" appearance="secondary" />
                    <Price product={product} button={false} quantity={quantity} />
                  </Fragment>
                )
              }
              return null
            })}
            <div className={classes.orderTotal}>{`Order total: ${cartTotal.formatted}`}</div>
          </div>
        )}
        {!clientSecret && !error && (
          <div className={classes.loading}>
            <LoadingShimmer number={2} />
          </div>
        )}
        {!clientSecret && error && (
          <div className={classes.error}>
            <p>{`Error: ${error}`}</p>
            <Button label="Back to cart" href="/cart" appearance="secondary" />
          </div>
        )}
      </div>
      {clientSecret && (
        <div className={classes.right}>
          {error && <p>{`Error: ${error}`}</p>}
          <Elements
            stripe={stripe}
            options={{
              clientSecret,
              appearance: {
                theme: 'stripe',
                variables: {
                  colorText:
                    theme === 'dark' ? cssVariables.colors.base0 : cssVariables.colors.base1000,
                  fontSizeBase: '16px',
                  fontWeightNormal: '500',
                  fontWeightBold: '600',
                  colorBackground:
                    theme === 'dark' ? cssVariables.colors.base850 : cssVariables.colors.base0,
                  fontFamily: 'Inter, sans-serif',
                  colorTextPlaceholder: cssVariables.colors.base500,
                  colorIcon:
                    theme === 'dark' ? cssVariables.colors.base0 : cssVariables.colors.base1000,
                  borderRadius: '0px',
                  colorDanger: cssVariables.colors.error500,
                  colorDangerText: cssVariables.colors.error500,
                },
              },
            }}
          >
            <CheckoutForm />
          </Elements>
        </div>
      )}
    </div>
  )
}
