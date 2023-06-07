import SiteHeader from "../../ui/header/SiteHeader";
import SiteFooter from "../../ui/footer/SiteFooter";
import styles from "./Prices.module.scss"

const Prices = () =>{
    return<div>
        <SiteHeader isLogged={false} userName={""}/>
        <div className={styles.wrapper}>
            <div className={styles.pricesWrapper}>
                <h6>0 рублей/месяц</h6>
                <div className={styles.tarifDes}>Пока наше приложение находится в состоянии минимально жизнеспособного продукта, пользование сервисом бесплатно</div>
                <p className={styles.tarif}>Тариф выбран</p>
            </div>
        </div>
        <SiteFooter/>
    </div>
}

export default Prices