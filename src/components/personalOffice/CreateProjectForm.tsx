import styles from "./CreateProjectForm.module.scss"
import axios from "axios";
import {useState} from "react";
import Cookies from "universal-cookie";

type changeState = {changeStateFunc: Function, updateProjectsList: Function}
const CreateProjectForm = (state: changeState) =>{
    const [projectName, setProjectName] = useState("")
    const cookies = new Cookies()

    const createButtonHandler = async () => {
        axios.post("http://192.168.0.104:3000/api/projects",
            {"name":projectName},
            {headers:{"accept": "application/json", "Authorization": `Bearer ${cookies.get("accessToken")}`, "Content-Type": "application/json"}})
            .then((responce)=>{console.log("Запрос на создание проекта отправлен успешно")})
            .catch((error) => {console.log("Запрос на создание проекта ошибку дал")})
    }

    return(
        <div className={styles.createFormWrapper}>
            <span>Введите название проекта</span>
            <input value={projectName} onChange={(e) => {setProjectName(e.target.value)}}/>
            <button onClick={(event) => {event.preventDefault(); createButtonHandler(); state.changeStateFunc(false); state.updateProjectsList()}}>Создать проект</button>
        </div>
    )
}

export default CreateProjectForm