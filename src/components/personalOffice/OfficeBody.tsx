import styles from "./OfficeBody.module.scss"
import eoStyles from "./EmptyOffice/EmptyOffice.module.scss"
import {useState} from "react";

const EmptyOffice = () =>{
    return(
        <div className={eoStyles.emptyOfficeWrapper}>
            <p>Укажите ссылку на ваше приложение</p>
            <input/>
            <button>Запустить оркестратор</button>
        </div>)
}


const OfficeBody = () =>{
    return(<div className={styles.OfficeWrapper}>
        <EmptyOffice/>
    </div>)
}

export default OfficeBody