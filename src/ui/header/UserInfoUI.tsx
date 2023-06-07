import styles from "./SiteHeader.module.scss";
import {NavLink} from "react-router-dom";

type userInfoProps = {
    isLogged:boolean;
    userName: string;
}

const userInfoUI = (props:userInfoProps)=> {
    const clickHandler = () => {
        window.location.href = "/login"
    }

    if (props.isLogged){
        return(<NavLink className={styles.userName} to="/personaloffice">{props.userName}</NavLink>)
    }
    else{
        return(<div className={styles.userButtons}><button onClick={clickHandler} className={styles.logLink}>вход</button><NavLink className={styles.regLink} to="/registration">регистрация</NavLink></div>)
    }
}

export default userInfoUI