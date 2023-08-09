import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import { clearCart } from '../store/slices/cartSlice'

const CheckoutButton = total => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const tokenReciever = token => {
    dispatch(clearCart())
    navigate(`/success/${token?.created}`)
  }
  return (
    <StripeCheckout
      name="Payment Details"
      ComponentClass="div"
      panelLabel="Pay"
      amount={total}
      currency="INR"
      token={tokenReciever}
      stripeKey="pk_test_51NdDRISE0ZW2bBJh0xg7EGqjNmlQ8dVzh79SurEQ3EhXbufqDEs3s4LqvmsMeJ6v3LklpqIFITAg7ZgvYpzOt1W500cxNStZBS"
    />
  )
}

export default CheckoutButton
