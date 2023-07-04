import styles from "./OfficeBody.module.scss"
import eoStyles from "./EmptyOffice.module.scss"
import officestyles from "./Office.module.scss"

import axios from 'axios'
import React, {useState} from "react";
import Redirect from 'react-router-dom'
import Cookies from "universal-cookie";

const OfficeBody = () =>{
    const cookie = new Cookies()
    const [hasProjects, setHasProjects] = useState(false)
    const [projectName, setProjectName] = useState("")
    const [projectNames, setProjectNames] = useState([{id:"",name:""}])

    useState(()=>{
        axios.get("http://192.168.0.104:3000/api/projects", {headers:{
            "accept":"application/json", "Authorization": `Bearer ${cookie.get("accessToken")}`
            }})
            .then((responce) =>{
                setHasProjects(responce.data.length > 0)
                setProjectNames(responce.data)
            })
    })

    if (hasProjects){
        return(
            <div className={styles.OfficeWrapper}>
                <div className={officestyles.projectNamesWrapper}>
                    <h1>Приложение</h1>
                    <ul>
                        {projectNames.map(item => <li>{item.name}</li>)}
                    </ul>
                </div>
                <div className={officestyles.officeWrapper}>
                    <h1>Управление приложением</h1>
                    <p>Имя проекта: {projectName}</p>
                    <p>Состояние: {"1231"}</p>
                    <span>Ссылка на ваше приложение:</span>
                    <a href={"1231"}>{"1231"}</a>
                    <button>Остановить и удалить</button>
                </div>
            </div>)
    }
    else{
        return(<div className={styles.OfficeWrapper}>
            <div className={eoStyles.emptyOfficeWrapper}>
                <p>Укажите ссылку на ваше приложение</p>
                <input id="userLinkInput"/>
                <button>Запустить оркестратор</button>
            </div>
        </div>)
    }
}

export default OfficeBody