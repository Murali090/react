import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TodoRouter from "./TodoRouter"
import { useAuth } from "./Security/Authcontext"

export default function LoginComponent() {
  const [username, setUsername] = useState("")

  const [password, setPassword] = useState("")

  function onchangeUsernameHandler(e) {
    setUsername(e.target.value)
  };

  function onchangePasswordHandler(e) {
    setPassword(e.target.value)
  };

  const navigates = useNavigate()
  const authcontext = useAuth()

  function userSubmit(e) {
    e.preventDefault();
    if (authcontext.login(username,password)) {
     navigates(`/welcome/${username}`)
    }
    else {
     navigates("/error")
    }
  }
  return (
    <>
        <div className="Login">
          {/* <form> */}
          Enter the username:<input type="text" className="form-control form-control-sm" id="username" placeholder="Enter the user name" value={username} onChange={onchangeUsernameHandler} />
          <br />
          Enter the password:<input type="text" id="password" className="form-control form-control" placeholder="Enter the password" value={password} onChange={onchangePasswordHandler} />
          <br />
          <input type="submit" value="Login" className="btn btn-secondary" onClick={userSubmit} />
          {/* </form> */}
        </div>
    </>
  )
}
