import SiteHeader from "../../ui/header/SiteHeader";
import SiteFooter from "../../ui/footer/SiteFooter";
import OfficeBody from "./OfficeBody";
import axios from "axios";
import {useEffect, useState} from "react";
import Cookies from "universal-cookie";

const PersonalOffice = () =>{
    const cookies = new Cookies()

    return(
    <div>
        <SiteHeader/>
        <OfficeBody/>
        <SiteFooter/>
    </div>)
}

export default PersonalOffice