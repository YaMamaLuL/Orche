import logo from "../../imgs/logo.svg"
import {NavLink} from "react-router-dom";
import LinkButtons from "./LinkButtons";
import styles from "./SiteHeader.module.scss"

type userInfoProps = {
    isLogged:boolean;
    userName: string;
}

const SiteHeader = ({isLogged, userName} : userInfoProps) => {
    return(
        <div className={styles.headerWrapper}>
            <img src={logo} alt="mainlogo" width="4%"/>
            <div className={styles.pageLinks}>
                {LinkButtons.map(item => (
                    <NavLink className={styles.link} to={item.ref}>{item.title}</NavLink>
                ))}
                <NavLink className={styles.logLink} to="/login">Вход</NavLink>
                <NavLink className={styles.regLink} to="/registration">Регистрация</NavLink>
            </div>
        </div>
    )
}

export default SiteHeader