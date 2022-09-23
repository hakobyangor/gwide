import { Button, Input, Typography } from '@material-tailwind/react'
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { useAuth } from 'apps/web/src/context/auth.context'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useLoginMutation } from '../../api/auth/auth.gql.gen'
import { withApi } from '../../api/client-api'

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [data, login] = useLoginMutation()
  const { loginFunc } = useAuth()
  const router = useRouter()
  const { user } = useAuth()

  if (user) {
    router.push('/')
  }

  const submitLogin = async (event) => {
    event.preventDefault()
    await login({ args: { email, password } })
  }

  useEffect(() => {
    if (data.data) {
      loginFunc(data.data.login)
      router.push('/')
    }
  }, [data])

  return (
    <>
      <Head>
        <title>Login | Gwide</title>
        <meta property="og:title" content="Login | Gwide" key="title" />
      </Head>
      <div
        className="login-form"
        style={{
          display: 'flex',
          height: '90vh',
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
          <Typography as="h1" className="text-2xl center mb-10 text-center font-bold">
            Login
          </Typography>
          <div className="mb-2">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div>
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <Button type="submit" ripple={false} className="mt-4 w-[300px]">
            Login
          </Button>
        </form>
      </div>
    </>
  )
}

export default withApi(LoginPage)
