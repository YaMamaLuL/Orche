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
            <a href="/home" className={styles.anchor}><img src={logo} alt="mainlogo" width="100%"/></a>
            <div className={styles.links}>
                {LinkButtons.map(item => (
                    <NavLink className={styles.link} to={item.ref}>{item.title}</NavLink>
                ))}
                <button className={styles.logLink}>вход</button>
                <NavLink className={styles.regLink} to="/registration">регистрация</NavLink>
            </div>
        </div>
    )
}

export default SiteHeader