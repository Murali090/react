
import axios from "axios"
export default function Helloworldapi(){
  return axios.get('http://localhost:8080/hello-world')
}

// export default  Helloworldapi = ()=> axios.get('http://localhost:8080/hello-world')
