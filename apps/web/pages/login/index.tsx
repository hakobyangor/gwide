import { useEffect, useState } from 'react'
import { useLoginMutation } from '../../api/auth/auth.gql.gen'
import { withApi } from '../../api/client-api'

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [data, login] = useLoginMutation()

  const submitLogin = async (event) => {
    event.preventDefault()
    await login({ args: { email, password } })
  }

  useEffect(() => {
    if (data.data) {
      alert('logged in')
    }
  }, [data])

  return (
    <div
      className="login-form"
      style={{
        display: 'flex',
        height: '100vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <form
        onSubmit={submitLogin}
        className="form-group"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="input-primary"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="input-primary"
        />

        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
    </div>
  )
}

export default withApi(LoginPage)
