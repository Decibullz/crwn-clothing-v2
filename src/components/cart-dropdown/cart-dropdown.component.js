import { useContext, useId } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext)
  const id = useId()
  const navigate = useNavigate()

  const goToCheckoutHandle = () => {
    navigate('/checkout')
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={id} cartItem={cartItem} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandle}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown
