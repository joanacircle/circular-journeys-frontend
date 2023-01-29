import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { PaymentForm } from './PaymentForm'


export const StripeContainer = () => {

  const PUBLIC_KEY = 'pk_test_51MVV2XL9vOMbHljwYxDpUN8irGCzLHgUXSxQamceHfPCY7BdMKVaNLkzubYd2kKozQGY5Lh3EVPp6LYcrmVNy4ft00KqpV0vfV'

  const stripeTestPromise = loadStripe(PUBLIC_KEY)

  return (
    <Elements stripe={stripeTestPromise} >
      <PaymentForm />
    </Elements>
  )
}
