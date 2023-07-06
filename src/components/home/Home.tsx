import SiteHeader from "../../ui/header/SiteHeader";
import SiteFooter from "../../ui/footer/SiteFooter";
import styles from "./Home.module.scss"
import {NavLink} from "react-router-dom";
import Duties from "./DutysInfo";
import Descriptions from "./DescriptionInfo";

const Home = () =>{
    return (
        <div>
            <SiteHeader/>
            <div className={styles.mainWrapper}>
                <div className={styles.slogan}>
                    <p>Создайте свое приложение,<br/> а запуск оставьте на нас</p>
                    <NavLink className={styles.mainPageButton} to="/register">Регистрейшон нау</NavLink>
                </div>
                <div className={styles.infoWrapper}>
                    <h3>Как это работает?</h3>
                    <div className={styles.howItWorks}>
                        <ul className={styles.descriptionNumerator}>{Descriptions.map(item =><li key={item.id}>{item.id}</li>)}</ul>
                        <ul className={styles.descriptions}>
                            {Descriptions.map(item=><li key={item.id}>{item.title}</li>)}
                        </ul>
                    </div>
                    <div className={styles.dutiesBlock}>
                        <h3>В обязанности оркестратора будет входить</h3>
                        <div className={styles.duties}>
                            <ul>
                                {Duties.map(item=><li key={item.id}>{item.title}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <SiteFooter/>
        </div>
    )
}

export default Home