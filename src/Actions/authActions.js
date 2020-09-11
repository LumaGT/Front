
import axios from "axios";


export const loginUser = (userData)=> {
    axios.post('http://localhost:8080/auth/realms/School/protocol/openid-connect/token',{
       userData}).then(result=>{
        console.log(result)
    }).catch(console.log)
}
