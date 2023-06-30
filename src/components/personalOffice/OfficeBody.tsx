import styles from "./OfficeBody.module.scss"
import eoStyles from "./EmptyOffice.module.scss"
import officestyles from "./Office.module.scss"

import axios from 'axios'
import React, {useState} from "react";
import Redirect from 'react-router-dom'
interface OfficeProps {
    hasProjects:boolean
}

const EmptyOffice = () =>{
    return(
        <div className={eoStyles.emptyOfficeWrapper}>
            <p>Укажите ссылку на ваше приложение</p>
            <input id="userLinkInput"/>
            <button>Запустить оркестратор</button>
        </div>)
}

const Office = () => {
    return(
        <div className={officestyles.officeWrapper}>
            <h1>Управление приложением</h1>
            <p>Имя проекта: {"1231"}</p>
            <p>Состояние: {"1231"}</p>
            <span>Ссылка на ваше приложение:</span>
            <a href={"1231"}>{"1231"}</a>
            <button>Остановить и удалить</button>
        </div>
    )
}

const OfficeBody = (props:OfficeProps) =>{
    if (true){
        return(<div className={styles.OfficeWrapper}>
            <Office/>
        </div>)
    }
    else{
        return(<div className={styles.OfficeWrapper}>
            <EmptyOffice/>
        </div>)
    }
}

export default OfficeBody