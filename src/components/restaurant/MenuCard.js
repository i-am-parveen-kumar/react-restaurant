import { useDispatch, useSelector } from 'react-redux'
import '../../scss/MenuCard.scss'
import { addItem, removeItem } from '../../store/slices/cartSlice'
const MenuCard = ({ info }) => {
  const { name, description, price, imageId, isVeg, category } = info

  const dispatch = useDispatch()
  const handleAddItem = item => {
    dispatch(addItem(item))
  }
  const handleRemoveItem = item => {
    dispatch(removeItem(item.id))
  }
  const items = useSelector(store => store.cart.items)
  const itemsAddedToCart = items?.[info?.id]?.length || 0
  return (
    <div className="menu-container">
      <div className="menu-details-container">
        <div className="menu-item-name">{name}</div>
        <div>₹{price / 100}</div>
        <div className="menu-item-description">{description}</div>
      </div>
      <div className="menu-item-img-container">
        <img
          className="menu-item-img"
          src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/' + imageId}
        />
        <div className="add-to-cart-btn-container">
          <button className="remove-from-cart-btn" onClick={() => handleRemoveItem(info)}>
            -
          </button>
          <span>{itemsAddedToCart}</span>
          <button className="add-to-cart-btn" onClick={() => handleAddItem(info)}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuCard
