import { Link } from "react-router-dom";
import { authcontext, useAuth } from "../TodoApp/Security/Authcontext";

export default function Header() {
  const authContext = useAuth()
  const isAuthenticate = authContext.authenticated; // Use authContext.authenticated instead

  function logout(){
    authcontext.logout()
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">RouterDom</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {isAuthenticate && <Link className="nav-link active" to="/">Home</Link>}
              </li>
              <li className="nav-item">
                {isAuthenticate && <Link className="nav-link active" to="/todo">Todo</Link>}
              </li>
              <li className="nav-item">
                {isAuthenticate && <Link className="nav-link active" to="/logout" onClick={logout}>Logout</Link>}
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
