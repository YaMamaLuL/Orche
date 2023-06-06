import styles from "./EmptyOffice.module.scss"
import axios from 'axios';

const OrchDeployProject = async () => {
    await axios.post("192.168.0.104/api/projects/f1191f35-5965-4bf4-8e79-3f53670e2f25/services",{name:"test", repository:document.getElementsByTagName("input")[0].value, internalPort:2021},{headers:{"accept":"application.json", "Content-Type":"application/json", "Authorizathion":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlcmVudGl5QG1haWwucnUiLCJyb2xlIjoiVXNlciIsImlhdCI6MTY4NjA1NjE3OSwiZXhwIjoxNjg2MzE1Mzc5fQ.haPmbz1V6jAbqB8NPvUoNer-Vac2RT9c0WrDXWzGLiI"}})
}

const clickHandler = () =>{
    OrchDeployProject().then()
}


const EmptyOffice = () =>{
    return(
        <div className={styles.emptyOfficeWrapper}>
            <p>Укажите ссылку на ваше приложение</p>
            <input/>
            <button>Запустить оркестратор</button>
        </div>)
}

export default EmptyOffice