import logo from "../../imgs/logo.svg"
import {NavLink} from "react-router-dom";
import LinkButtons from "./LinkButtons";

type userInfoProps = {
    isLogged:boolean;
    userName: string;
}

const SiteHeader = ({isLogged, userName} : userInfoProps) => {
    return(
        <div>
            <img src={logo} alt="mainlogo" width="4%"/>
            <div>
                {LinkButtons.map(item => (
                    <NavLink to={item.ref}>{item.title}</NavLink>
                ))}
            </div>
            <div>
                <NavLink to="/login">Вход</NavLink>
                <NavLink to="/registration">Регистрация</NavLink>
            </div>
        </div>
    )
}

export default SiteHeader