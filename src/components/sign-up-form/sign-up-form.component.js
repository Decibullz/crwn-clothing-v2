import { useState } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formFields, setFormFeilds] = useState(defaultFormFields)

  const { displayName, email, password, confirmPassword } = formFields

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
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use')
      } else console.error(error)
    }
  }

  return (
    <div>
      <h1>Sign up with your email and password</h1>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm
