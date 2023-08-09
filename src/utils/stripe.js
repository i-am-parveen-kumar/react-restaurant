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
    navigate(`/`)
  }
  return (
    <>
      <StripeCheckout
        name="Payment Details"
        ComponentClass="div"
        panelLabel="Pay"
        amount={total}
        currency="INR"
        token={tokenReciever}
        stripeKey="pk_test_51NdDRISE0ZW2bBJh0xg7EGqjNmlQ8dVzh79SurEQ3EhXbufqDEs3s4LqvmsMeJ6v3LklpqIFITAg7ZgvYpzOt1W500cxNStZBS"
      />
      <div className="text-xs mt-2 text-slate-400">Use 4242 4242 4242 4242 card number</div>
    </>
  )
}

export default CheckoutButton
