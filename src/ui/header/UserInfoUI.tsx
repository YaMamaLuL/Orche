import styles from "./SiteHeader.module.scss";
import {NavLink} from "react-router-dom";

type userInfoProps = {
    isLogged:boolean;
    userName: string;
}

const userInfoUI = (props:userInfoProps)=> {
    if (props.isLogged){
        return(<NavLink className={styles.userName} to="/personaloffice">{props.userName}</NavLink>)
    }
    else{
        return(<div><button className={styles.logLink}>вход</button><NavLink className={styles.regLink} to="/registration">регистрация</NavLink></div>)
    }
}

export default userInfoUI