import { useState } from 'react'
import * as userService from '../../utilities/users-service'
import styles from './Login.module.scss'
export default function LoginForm ({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const user = await userService.login(credentials);
      setUser(user)
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className={styles.FormContainer}>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <label>Email</label>
          <input type='text' name='email' value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type='password' name='password' value={credentials.password} onChange={handleChange} required />
          <button type='submit'>LOG IN</button>
        </form>
      </div>
      <h1 className={styles.ErrorMessage}>&nbsp;{error}</h1>
    </div>
  )
}