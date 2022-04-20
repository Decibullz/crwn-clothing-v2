import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import { CartContext } from '../../contexts/cart.context'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles'
// import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks className="nav-links-container ">
          <NavLink className="nav-link" to="shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink
              as="span"
              onClick={signOutUser}
              className="nav-link"
              to="/"
            >
              Sign out
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="auth">
              Sign in
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </>
  )
}

export default Navigation
