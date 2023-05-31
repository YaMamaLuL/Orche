import SiteHeader from "../../ui/header/SiteHeader";
import styles from "../login/LogInHeader.module.scss";
import SiteFooter from "../../ui/footer/SiteFooter";

const Registration = () =>{
    return(
        <div>
            <SiteHeader isLogged={false} userName="nothing" />
            <div className={styles.loginPage}>
                <h3>Добрый вечер, регаемся, пожлауйста</h3>
                <div className={styles.regForm}>
                    <p>Ваше имя</p>
                    <input></input>
                    <p>Адрес электронной почты</p>
                    <input></input>
                    <p>Пароль</p>
                    <input></input>
                    <p>Подтверждение пароля</p>
                    <input></input>
                    <input type="checkbox"></input>
                    <p>Принимаю все, что написано в том документе большом</p>
                    <button>Регистер</button>
                </div>
            </div>
            <SiteFooter></SiteFooter>
        </div>
    )
}

export default Registration