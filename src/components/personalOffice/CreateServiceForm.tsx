import styles from "./CreateProjectForm.module.scss"
import axios from "axios";
import {useState} from "react";
import Cookies from "universal-cookie";

type changeState = {changeStateFunc: Function, updateServiceList: Function, projectId:string}
const CreateServiceForm = (state: changeState) => {
    const [repoUrl, setRepoUrl] = useState("")
    const [serviceName, setServiceName] = useState("")
    const port = 2021
    const cookies = new Cookies()

    const createButtonHandler = async () => {
        axios.post(`http://192.168.0.104:3000/api/projects/${state.projectId}/services`,
            {"name":serviceName, "repository":repoUrl, "port":port},
            {headers:{"accept": "application/json", "Authorization": `Bearer ${cookies.get("accessToken")}`, "Content-Type": "application/json"}})
            .then((responce)=>{console.log("Запрос на создание проекта отправлен успешно")})
            .catch((error) => {console.log("Запрос на создание проекта ошибку дал")})
    }

    return(
        <div className={styles.createFormWrapper}>
            <span>Введите название приложения</span>
            <input value={serviceName} onChange={(e) => {setServiceName(e.target.value)}}/>
            <span>Введите репозиторий приложения</span>
            <input value={repoUrl} onChange={(e) => {setRepoUrl(e.target.value)}}/>
            <button onClick={(event) => {event.preventDefault(); createButtonHandler(); state.changeStateFunc(false); state.updateServiceList()}}>Создать проект</button>
        </div>
    )
}

export default CreateServiceForm