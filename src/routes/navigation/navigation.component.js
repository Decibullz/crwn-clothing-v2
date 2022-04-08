import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  console.log(currentUser)
  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }
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
          {currentUser ? (
            <span onClick={signOutHandler} className="nav-link" to="/">
              Sign out
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              Sign in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
