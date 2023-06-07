import SiteHeader from "../../ui/header/SiteHeader";
import SiteFooter from "../../ui/footer/SiteFooter";
import OfficeBody from "./OfficeBody";
import axios from "axios";
import {useState} from "react";

const PersonalOffice = () =>{
    const [hasProjectsState, setHasProjectsState] = useState(false)

    axios.get("http://192.168.0.104:3000/api/projects/f1191f35-5965-4bf4-8e79-3f53670e2f25/services", {headers:{'accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlcmVudGl5QG1haWwucnUiLCJyb2xlIjoiVXNlciIsImlhdCI6MTY4NjA2ODk3MSwiZXhwIjoxNjg2MzI4MTcxfQ.5sSh-ou2W7dQ8SysQtBH5eNeKXIp5tGf9Y3GZ5Rlw58'}})
        .then((responce) => {if (responce.data.length>3){setHasProjectsState(true)} console.log(responce)}).catch((error) =>{console.log(error)})

    return(
    <div>
        <SiteHeader isLogged={true} userName={"Terentiy "}/>
        <OfficeBody hasProjects={hasProjectsState}/>
        <SiteFooter/>
    </div>)
}

export default PersonalOffice