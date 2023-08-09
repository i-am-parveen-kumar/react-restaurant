import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import CheckoutButton from '../utils/stripe'
import { clearCart } from '../store/slices/cartSlice'
import EmptyCart from './EmptyCart'
const Cart = () => {
  const items = []
  const storeItems = useSelector(store => store.cart.items)
  Object.keys(storeItems).forEach(key => items.push(storeItems[key]))
  const subTotal = Number(
    items
      .flat()
      .map(item => item.price)
      .reduce((acc, val) => acc + val, 0) / (100).toFixed(2)
  )

  if (items.length == 0) {
    return <EmptyCart />
  }

  const gst = Number((subTotal * 0.05).toFixed(2))
  const total = (subTotal + gst).toFixed(2)
  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <div className="w-96 text-center mx-auto mt-10 p-4">
      <div className="flex justify-between border-b mb-4">
        <div>Cart Items</div>
        <button onClick={() => handleClearCart()}>Clear Cart</button>
      </div>
      {items?.map(items => (
        <CartItem key={items[0].id} items={items} />
      ))}
      <div className="flex justify-between mb-[0.5px] mt-[0.5px] text-sm">
        <div>Sub Total</div>
        <div>{subTotal}</div>
      </div>
      <div className="flex justify-between mb-[0.5px] text-xs">
        <div>GST (5%)</div>
        <div>{gst}</div>
      </div>
      <div className="flex justify-between">
        <div className="font-bold">Total</div>
        <div className="font-bold">{total}</div>
      </div>
      <div>
        <CheckoutButton total={total} />
      </div>
    </div>
  )
}

export default Cart
