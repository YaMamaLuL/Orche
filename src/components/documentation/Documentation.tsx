import SiteHeader from "../../ui/header/SiteHeader";
import SiteFooter from "../../ui/footer/SiteFooter";
import styles from "./Documentation.module.scss"

const Documentation = () =>{
    return(<div>
        <SiteHeader isLogged={false} userName={''}/>
        <div className={styles.documentationWrapper}>
            <h1>Краткое руководство по началу пользования приложением</h1>
            <div>
                <h2>Для создания собственного оркестратора, вам необходимо выполнить 3 простых шага:</h2>
                <ul>
                    <li>Зарегистрируйтесь в приложении</li>
                    <li>Укажите ссылку на приложение в системе контроля версий Git в специальную форму в личном кабинете </li>
                    <li>Нажмите на кнопку "Запустить оркестратор"</li>
                </ul>
            </div>
            <h1>Рассмотрим каждый из шагов более детально:</h1>
            <p>Для регистрации,</p>
        </div>
        <SiteFooter/>
    </div>)
}

export default Documentation