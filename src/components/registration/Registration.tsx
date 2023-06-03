import SiteHeader from "../../ui/header/SiteHeader";
import styles from "../registration/Registration.module.scss";
import SiteFooter from "../../ui/footer/SiteFooter";
import yandexLogo from "../../imgs/yandexLogo.svg";
import googleLogo from "../../imgs/googleLogo.svg";
import gitLogo from "../../imgs/githubLogo.svg";

const Registration = () =>{
    return(
        <div className={styles.regWrapper}>
            <SiteHeader isLogged={false} userName="nothing" />
            <div className={styles.formWrapper}>
                <form className={styles.regForm}>
                    <h3>Регистрация</h3>
                    <p>Имя</p>
                    <input/>
                    <p>Адрес электронной почты <span>*</span></p>
                    <input className={styles.mailInput}/>
                    <p>Пароль <span>*</span></p>
                    <input/>
                    <p>Повторите пароль <span>*</span></p>
                    <input className={styles.lastInput}/>
                    <button>Регистрейшон</button>
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

export default Registration