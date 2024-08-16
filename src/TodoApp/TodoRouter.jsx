import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import Error from "./Error";
import WelcomePage from "./WelcomePage";
import ListTodoComponent from "./ListTodoComponent";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Logout from "../Components/Logout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import AuthProvider, { authcontext, useAuth } from "./Security/Authcontext";
import Home from "./Home";

export default function TodoRouter() {

  function AuthenticatedRoute({ children }) {

    const authcontext = useAuth()
    if (authcontext.authenticated) {
      return children
    }
    else <Navigate to="/" />
  }
  return (
    <>
      <div className="container">
        <AuthProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/welcome/:username" element={<AuthenticatedRoute><WelcomePage /> </AuthenticatedRoute>} />
              <Route path="/todo" element={<AuthenticatedRoute><ListTodoComponent /> </AuthenticatedRoute>} />
              <Route path="/error" element={<Error />} />
              <Route path="/logout" element={<AuthenticatedRoute><Logout /></AuthenticatedRoute>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  )
}
