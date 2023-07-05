import SiteHeader from "../../ui/header/SiteHeader";
import SiteFooter from "../../ui/footer/SiteFooter";
import OfficeBody from "./OfficeBody";
import axios from "axios";
import {useEffect, useState} from "react";
import Cookies from "universal-cookie";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const PersonalOffice = () =>{
    const cookies = new Cookies()
    const [email, setEmail] = useState("")

    useEffect(()=>{
        axios.get("http://192.168.0.104:3000/api/users",{headers:{
            "accept":"application/json","Authorization": `Bearer ${cookies.get("accessToken")}`
            }})
            .then((responce)=>{
                setEmail(responce.data.email)
            })
            .catch((error)=>{console.log(error)})
    })

    return(
    <div>
        <SiteHeader/>
        <OfficeBody/>
        <SiteFooter/>
    </div>)
}

export default PersonalOffice