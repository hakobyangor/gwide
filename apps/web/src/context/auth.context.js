/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react'
import { useGetCurrentUserQuery } from 'apps/web/api/user/user.gql.gen'

// import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext({
  user: {},
  isAuthenticated: false,
  loginFunc: (user) => {},
  logoutFunc: () => {},
  getAuthUser: () => {}
})

const AuthProvider = (props) => {
  const [user, setUser] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [data] = useGetCurrentUserQuery()
  // const navigate = useNavigate();

  const loginFunc = (user) => {
    setUser(user)
    setIsAuthenticated(true)
  }

  const logoutFunc = () => {
    setUser(false)
    setIsAuthenticated(false)
  }

  useEffect(() => {
    if (!data.data?.currentUser) {
      setUser(false)
      setIsAuthenticated(false)
    } else {
      setUser(data.data.currentUser)
      setIsAuthenticated(true)
    }
    // setUser(null);
  }, [data.data?.currentUser])

  const authContextValue = { user, loginFunc, logoutFunc, isAuthenticated }
  return <AuthContext.Provider value={authContextValue}>{props.children}</AuthContext.Provider>
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
