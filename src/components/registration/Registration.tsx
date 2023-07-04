import SiteHeader from "../../ui/header/SiteHeader";
import styles from "../registration/Registration.module.scss";
import SiteFooter from "../../ui/footer/SiteFooter";
import yandexLogo from "../../imgs/yandexLogo.svg";
import googleLogo from "../../imgs/googleLogo.svg";
import gitLogo from "../../imgs/githubLogo.svg";
import {useState} from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const registrationButtonHandler = async(email:string, password:string) =>{
    const cookies = new Cookies()
    let registered = false

    await axios.post("http://192.168.0.104:3000/api/users", {"email":email, "password":password}, {headers:{"accept": "application/json","Content-Type": "application/json"}})
        .then((responce) => {
            if (responce.status === 201)
            {
                registered = true
            }
            else
            {
                registered = false
            }
        })
        .catch((error) => {console.log(error)})

    if (registered)
    {
        await axios.post("http://192.168.0.104:3000/api/auth/login",
            {email:email, password:password},
            {headers: {'accept': 'application/json', 'Content-Type': 'application/json'}})
            .then((response) => {
                console.log(response.data.accessToken)
                cookies.set("accessToken", response.data.accessToken)
                cookies.set("refreshToken", response.data.refreshToken)
                console.log(cookies.getAll())
                return true
            })
            .catch((error) => {console.log(error)})
    }
    else
    {
        return false
    }
}

const Registration = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

    return(
        <div className={styles.regWrapper}>
            <SiteHeader isLogged={false} userName="nothing" />
            <div className={styles.formWrapper}>
                <form className={styles.regForm}>
                    <h3>Регистрация</h3>
                    <p>Адрес электронной почты <span>*</span></p>
                    <input className={styles.mailInput} value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <p>Пароль <span>*</span></p>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    <p>Повторите пароль <span>*</span></p>
                    <input type="password" className={styles.lastInput} value={repeatPassword} onChange={(event) => setRepeatPassword(event.target.value)}/>
                    <button onClick={(event)=>{
                        event.preventDefault()
                        registrationButtonHandler(email, password)
                    }}>Зарегистрироваться</button>
                </form>
                <h3 className={styles.socMediaH}>Или воспользуйтесь</h3>
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

export default Registration