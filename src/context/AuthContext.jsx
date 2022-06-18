import React, { createContext, useContext, useEffect, useReducer } from 'react'

export const AuthContext = createContext()

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': return {...state, user: action.payload}
    case 'LOGOUT': return {...state, user: null}
  
    default: return state
  }
}

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProdider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: JSON.parse(localStorage.getItem('user')) || null
  })

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user) )
  }, [state.user])

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}
