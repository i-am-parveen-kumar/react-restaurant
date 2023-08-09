import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../store/slices/cartSlice'

const CartItem = ({ items }) => {
  const item = items?.[0]
  const dispatch = useDispatch()
  const handleAddItem = item => {
    dispatch(addItem(item))
  }
  const handleRemoveItem = item => {
    dispatch(removeItem(item.id))
  }
  return (
    <div className="ps-2 py-4 border-b flex justify-between gap-2">
      <div className="flex gap-2 w-[11.875rem]">
        <img
          className="rounded w-[3rem] h-[3rem]"
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.imageId}`}
        />
        <div>{item?.name}</div>
      </div>
      <div className="flex gap-2">
        <div className="flex justify-between font-poppins w-20 h-7 border bg-slate-50 text-black py-[2px] px-2">
          <button onClick={() => handleRemoveItem(item)}>-</button>
          <span>{items?.length}</span>
          <button onClick={() => handleAddItem(item)}>+</button>
        </div>
        <div>{((item?.price / 100) * items?.length).toFixed(2)}</div>
      </div>
    </div>
  )
}

export default CartItem
