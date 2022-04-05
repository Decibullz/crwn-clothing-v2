// import { getRedirectResult } from 'firebase/auth'
// import { useEffect } from 'react'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import {
  auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  // useEffect(async () => {
  //   const res = await getRedirectResult(auth)
  //   if (res) {
  //     const userDocRef = await createUserDocFromAuth(res.user)
  //   }
  // }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocFromAuth(user)
  }

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in With Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in With Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  )
}
export default SignIn
