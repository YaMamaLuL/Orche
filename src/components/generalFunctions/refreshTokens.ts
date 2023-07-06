import Cookies from "universal-cookie";
import axios from "axios";


const refreshTokens = async () =>{
    const cookie = new Cookies()

    axios.post("http://192.168.0.104:3000/api/auth/jwt-refresh",
        {"refreshToken":`${cookie.get("refreshToken")}`},
        {headers:{"accept":"application/json", "Content-Type":"application/json"}})
        .then((responce) =>{
            cookie.set("accessToken",`${responce.data?.accessToken}`)
            cookie.set("refreshToken", `${responce.data?.refreshToken}`)
        })
        .catch((error)=>{console.log(error)})
}

export default refreshTokens