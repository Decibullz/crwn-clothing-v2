import { useState } from 'react'

import {
  SignInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFeilds] = useState(defaultFormFields)

  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFeilds(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFeilds({ ...formFields, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      SignInAuthUserWithEmailAndPassword(email, password)

      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break
        case 'auth/user-not-found':
          alert('no user associated with this email')
          break
        default:
          console.log(error)
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Already have An account?</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          onChange={handleChange}
          name="email"
          type="email"
          required
          value={email}
        />
        <FormInput
          label="Password"
          onChange={handleChange}
          name="password"
          type="password"
          required
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
