import { createContext, useState } from "react";
import { useContext } from "react";

export const authcontext = createContext()

export const useAuth = () => useContext(authcontext)

export default function AuthProvider({ children }) {


  const [authenticated, setAuthenticated] = useState(false)
  
  function logout() {
    authcontext.setAuthenticated(false)
  }

  function login(username, password) {
    if (username === "Murali" && password === "1234") {
      setAuthenticated(true)
      return true
    }
    else {
      setAuthenticated(false)
      return false
    }
  }
  return (
    <authcontext.Provider value={{ authenticated, setAuthenticated, login ,logout}}>
      {children}
    </authcontext.Provider>
  )
}
