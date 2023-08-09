import '../scss/Header.scss'
import logo from '../assests/images/logo-2.png'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle, faPhone, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

export const Header = () => {
  const items = useSelector(store => store.cart.items)
  return (
    <nav className="header-container">
      <div className="logo-container" alt="website-logo">
        <img src={logo} alt="Website Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FontAwesomeIcon icon={faInfoCircle} /> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FontAwesomeIcon icon={faPhone} /> Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart ({Object.keys(items)?.length})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
