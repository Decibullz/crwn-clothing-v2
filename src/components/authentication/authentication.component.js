import './authentication.styles.scss'
import SignInForm from '../sign-in-form/sign-in-form.component'

import SignUpForm from '../sign-up-form/sign-up-form.component'

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignUpForm />
      <SignInForm />
    </div>
  )
}
export default Authentication

//       <Button buttonType="google" onClick={logGoogleUser}>
//   Sign in With Google
// </Button>
