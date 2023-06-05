import logo from "../../imgs/logo.svg"
import {NavLink} from "react-router-dom";
import LinkButtons from "./LinkButtons";
import styles from "./SiteHeader.module.scss"
import UserInfoUI from "./UserInfoUI";

type userInfoProps = {
    isLogged:boolean;
    userName: string;
}

const SiteHeader = (props : userInfoProps) => {
    return(
        <div className={styles.headerWrapper}>
            <NavLink to="/home" className={styles.anchor}><img src={logo} alt="mainlogo" width="100%"/></NavLink>
            <div className={styles.links}>
                {LinkButtons.map(item => (
                    <NavLink className={styles.link} to={item.ref}>{item.title}</NavLink>
                ))}
                <UserInfoUI isLogged={props.isLogged} userName={props.userName}/>
            </div>
        </div>
    )
}

export default SiteHeader