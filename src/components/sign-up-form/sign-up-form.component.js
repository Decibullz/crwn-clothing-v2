import { useContext, useState } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import './sign-up-form.styles.scss'
import { UserContext } from '../../contexts/user.context'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formFields, setFormFeilds] = useState(defaultFormFields)

  const { displayName, email, password, confirmPassword } = formFields

  const { setCurrentUser } = useContext(UserContext)

  const resetFormFields = () => {
    setFormFeilds(defaultFormFields)
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFeilds({ ...formFields, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password != confirmPassword) {
      alert('Passwords do not match')
      return
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)

      await createUserDocFromAuth(user, { displayName })
      resetFormFields()
      setCurrentUser(user)
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use')
      } else if (error.code === 'auth/weak-password') {
        alert('Password must be 6 characters')
      } else console.error(error)
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Dont have An account?</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          onChange={handleChange}
          name="displayName"
          type="text"
          required
          value={displayName}
        />
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

        <FormInput
          label="Confirm Password"
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          required
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm
