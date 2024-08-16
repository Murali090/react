import axios from "axios"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Helloworldapi from "./apicalls/HelloWorldApi"

export default function WelcomePage(){

  const {username} = useParams()

  const [message,setMessage] = useState(null)

  function callHelloWorld(){
         Helloworldapi()
         .then((response)=>successResponse(response))
         .catch(()=> errorResponse())
         .finally(cleanups())
  }

  function successResponse(response){
    setMessage(response.data)
  }

  function errorResponse(){
    console.log('Error')
  }

  function cleanups(){
    console.log('Clean up')
  }
  return (
   <>
       Welcome to the page {username}

      Manage Your Todos -- <Link to="/todo"> Todos </Link>
      <br/>

      <button className="btn btn-warning m-5" onClick={callHelloWorld}>Hello World</button>


      <div className="text-info ">{message}</div>
   </>
  )
}
