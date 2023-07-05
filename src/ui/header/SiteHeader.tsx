import logo from "../../imgs/logo.svg"
import {NavLink} from "react-router-dom";
import LinkButtons from "./LinkButtons";
import styles from "./SiteHeader.module.scss"
import UserInfoUI from "./UserInfoUI";
import {useState} from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const checkCookies = async() => {}

const SiteHeader = () => {
    const [isLogged, setIsLogged] = useState(false)
    const [userName, setUserName] = useState("")
    const cookies = new Cookies()

    axios.get("http://192.168.0.104:3000/api/users", {headers:{
            "accept":"application/json","Authorization":`Bearer ${cookies.get("accessToken")}`
        }})
        .then((responce)=>{
            console.log("checked")
            setUserName(responce.data?.email);
            setIsLogged(true)})
        .catch((error)=>{console.log(error)})

    return(
        <div className={styles.headerWrapper}>
            <NavLink to="/home" className={styles.anchor}><img src={logo} alt="mainlogo" width="100%"/></NavLink>
            <div className={styles.links}>
                {LinkButtons.map(item => (
                    <NavLink className={styles.link} to={item.ref}>{item.title}</NavLink>
                ))}
                <UserInfoUI isLogged={isLogged} userName={userName}/>
            </div>
        </div>
    )
}

export default SiteHeader