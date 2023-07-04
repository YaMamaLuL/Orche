import SiteHeader from "../../ui/header/SiteHeader";
import styles from "./LogInHeader.module.scss"
import SiteFooter from "../../ui/footer/SiteFooter";
import yandexLogo from "../../imgs/yandexLogo.svg"
import gitLogo from "../../imgs/githubLogo.svg"
import googleLogo from "../../imgs/googleLogo.svg"
import axios from "axios"
import logInButtonHandler from "./LogInButtonHandler";
import {useState} from "react";
import Cookies from "universal-cookie";
import {redirect, useNavigate} from "react-router-dom";

const buttonClickHandler = async (mail:string, password:string) => {
    const cookies = new Cookies()
    await axios.post("http://192.168.0.104:3000/api/auth/login",
        {email:mail, password:password},
        {headers: {'accept': 'application/json', 'Content-Type': 'application/json'}})
        .then((response) => {
            console.log(response.data.accessToken)
            cookies.set("accessToken", response.data.accessToken)
            cookies.set("refreshToken", response.data.refreshToken)
            console.log(cookies.getAll())
        })
        .catch((error) => {console.log(error)})
}


const LogIn = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const cookies = new Cookies()

    return(
        <div className={styles.logWrapper}>
            <SiteHeader isLogged={false} userName="nothing" />
            <div className={styles.formWrapper}>
                <form className={styles.loginForm}>
                    <h3>Вход в личный кабинетик</h3>
                    <p>Адрес электронной почты <span>*</span></p>
                    <input className={styles.mailInput} value={email} onChange={e => setEmail(e.target.value)}/>
                    <p>Пароль <span>*</span></p>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button onClick={async (event) => {
                        event.preventDefault()
                        await buttonClickHandler(email, password)
                        navigate("/personalOffice", {replace:true})
                    }}>Войти</button>
                </form>
                <h3>Или воспользуйтесь</h3>
                <div className={styles.socialMedias}>
                    <img title="will be added later" src={yandexLogo} width="6%" alt="socialMediaLogo"/>
                    <img title="will be added later" src={googleLogo} width="6%" alt="socialMediaLogo"/>
                    <img title="will be added later" src={gitLogo} width="6%" alt="socialMediaLogo"/>
                </div>
            </div>
            <SiteFooter></SiteFooter>
        </div>
    )
}

export default LogIn