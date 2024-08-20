'use client'

import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useRouter } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { Input } from '../../../_components/Input'
import { useCart } from '../../../_providers/Cart'

type FormValues = {
  email: string
  cardholderName: string
  zipCode: string
}

const cardElementOptions = {
  style: {
    base: {
      display: 'block',
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
}

export const CheckoutForm: React.FC<{}> = () => {
  const stripe = useStripe()
  const router = useRouter()
  const elements = useElements()

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()
  const { cart, cartTotal, clearCart } = useCart()

  const onSubmit = useCallback(
    async data => {
      try {
        const { error: stripeError, paymentIntent } = await stripe?.confirmPayment({
          elements: elements!,
          redirect: 'if_required',
          confirmParams: {
            return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/order-confirmation`,
            payment_method_data: {
              billing_details: {
                name: data.cardholderName,
                email: data.email,
                address: {
                  postal_code: data.zipCode,
                },
              },
            },
          },
        })

        if (stripeError) {
          setError('root', { message: stripeError.message })
        }

        if (paymentIntent) {
          clearCart()
          router.push('/')
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Something went wrong.'
        setError('root', { message: `Error while submitting payment: ${msg}` })
      }
    },
    [stripe, elements, router, cart, cartTotal],
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        type="email"
        label="Email"
        variant="outlined"
        register={register}
        error={errors.email?.message}
      />
      <Input
        name="cardholderName"
        type="text"
        label="cardholderName"
        variant="outlined"
        register={register}
        error={errors.cardholderName?.message}
      />
      <label>
        <PaymentElement
          options={{
            fields: {
              billingDetails: {
                email: 'auto',
              },
            },
          }}
        />
        {/*<CardElement options={cardElementOptions} />*/}
      </label>
      <Button appearance="primary" label="Pay" type="submit" disabled={!stripe || isSubmitting} />
    </form>
  )
}

export default CheckoutForm
