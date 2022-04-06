import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'
import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  console.log(currentUser)
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container ">
          <Link className="nav-link" to="shop">
            Shop
          </Link>
          <Link className="nav-link" to="auth">
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
