import SiteHeader from "../../ui/header/SiteHeader";
import SiteFooter from "../../ui/footer/SiteFooter";
import OfficeBody from "./OfficeBody";
import axios from "axios";
import {useState} from "react";

const PersonalOffice = () =>{
    const [hasProjectsState, setHasProjectsState] = useState(false)

    return(
    <div>
        <SiteHeader isLogged={true} userName={"Terentiy"}/>
        <OfficeBody hasProjects={hasProjectsState}/>
        <SiteFooter/>
    </div>)
}

export default PersonalOffice