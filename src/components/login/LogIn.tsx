import SiteHeader from "../../ui/header/SiteHeader";
import styles from "./LogInHeader.module.scss"
import SiteFooter from "../../ui/footer/SiteFooter";
import yandexLogo from "../../imgs/yandexLogo.svg"
import gitLogo from "../../imgs/githubLogo.svg"
import googleLogo from "../../imgs/googleLogo.svg"

const LogIn = () =>{
    return(
        <div className={styles.logWrapper}>
            <SiteHeader isLogged={false} userName="nothing" />
            <div className={styles.formWrapper}>
                <form className={styles.loginForm}>
                    <h3>Вход в личный кабинетик</h3>
                    <p>Адрес электронной почты <span>*</span></p>
                    <input className={styles.mailInput}/>
                    <p>Пароль <span>*</span></p>
                    <input/>
                    <button>Войти</button>
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