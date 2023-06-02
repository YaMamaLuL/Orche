import SiteHeader from "../../ui/header/SiteHeader";
import styles from "./LogInHeader.module.scss"
import SiteFooter from "../../ui/footer/SiteFooter";
const LogIn = () =>{
    return(
        <div className={styles.logWrapper}>
            <SiteHeader isLogged={false} userName="nothing" />
            <div className={styles.formWrapper}>
                <form className={styles.loginForm}>
                    <h3>Вход в личный кабинетик</h3>
                    <p>Адрес электронной почты</p>
                    <input className={styles.mailInput}/>
                    <p>Пароль</p>
                    <input/>
                    <button>Войти</button>
                </form>
            </div>
            <SiteFooter></SiteFooter>
        </div>
    )
}

export default LogIn