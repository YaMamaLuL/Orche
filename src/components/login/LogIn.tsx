import SiteHeader from "../../ui/header/SiteHeader";
import styles from "./LogInHeader.module.scss"
import SiteFooter from "../../ui/footer/SiteFooter";
const LogIn = () =>{
    return(
        <div className={styles.logWrapper}>
            <SiteHeader isLogged={false} userName="nothing" />
            <div className={styles.loginPage}>
                <h3>Добрый вечер, регаемся, пожлауйста</h3>
                <div className={styles.logForm}>
                    <p>Адрес электронной почты</p>
                    <input></input>
                    <p>Пароль</p>
                    <input></input><br/>
                    <button>Вход</button>
                </div>
            </div>
            <SiteFooter></SiteFooter>
        </div>
    )
}

export default LogIn