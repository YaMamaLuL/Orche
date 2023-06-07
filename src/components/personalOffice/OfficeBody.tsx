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
    const [gitUrl,setGitUrl] = useState("")

    function timeout(delay: number) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const DeployProject = async () =>{
        await axios.post(("http://192.168.0.104:3000/api/projects/f1191f35-5965-4bf4-8e79-3f53670e2f25/services"),
            {"name":"12312", "repository":"https://github.com/callmefarad/Simple-NodeJS-Server.git",
                "internalPort":2021},
            {headers:{'accept': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlcmVudGl5QG1haWwucnUiLCJyb2xlIjoiVXNlciIsImlhdCI6MTY4NjEwMjM2OSwiZXhwIjoxNjg2MzYxNTY5fQ.SQ15EH-iXsi1jImnPcGBMuBiJkl0eQUQETLvz8kGXtI',
                    'Content-Type': 'application/json'}})
            .then((response) =>{console.log(response)})
        await timeout(3000);
        window.location.href = "/personalOffice"
    }

    const deployHandler = () => {DeployProject().then()}

    return(
        <div className={eoStyles.emptyOfficeWrapper}>
            <p>Укажите ссылку на ваше приложение</p>
            <input id="userLinkInput"/>
            <button onClick={deployHandler}>Запустить оркестратор</button>
        </div>)
}

const Office = () => {
    const [projName, setProjName] = useState("")
    const [projStatus, setProjStatus] = useState("")
    const [siteUrl, setSiteUrl] = useState("")
    const [projId, setProjId] = useState("")
    const [servId, setServiceId] = useState("")

    const getProjectInfo = async() => {
        axios.get("http://192.168.0.104:3000/api/projects", {headers:{
            "accept":"application/json",
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlcmVudGlpQG1haWwucnUiLCJyb2xlIjoiVXNlciIsImlhdCI6MTY4NjEwOTk2NiwiZXhwIjoxNjg2MzY5MTY2fQ.z27mdymXBzy-6P59IpmmKi-VOS2yPeMcH2b_xAWA3BA'
            }})
            .then((responce)=>{
                setProjName(responce.data[0].name)
                setProjId(responce.data[0].name)
                console.log("srabotala 1")
            })
    }

    const getServiceInfo = async()=>{
        axios.get("http://192.168.0.104:3000/api/projects/9fde3598-f444-45d2-9568-2a3f85426b74/services", {headers:{
                'accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlcmVudGlpQG1haWwucnUiLCJyb2xlIjoiVXNlciIsImlhdCI6MTY4NjEwOTk2NiwiZXhwIjoxNjg2MzY5MTY2fQ.z27mdymXBzy-6P59IpmmKi-VOS2yPeMcH2b_xAWA3BA'
            }}).then((responce) => {
                setServiceId(responce.data[0].id)
                setProjStatus(responce.data[0].status = "Succes"? "Работает":" Не рабоатет")
        })
    }

    const getDeploymentInfo = async () =>{
        axios.get("http://192.168.0.104:3000/api/projects/9fde3598-f444-45d2-9568-2a3f85426b74/services/862b8ac8-fa99-444b-9d0e-69ae7ae0ea58/deployments/1da7655c-605a-4afc-bc5f-baf570a4408f",
            {headers:{'accept': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlcmVudGlpQG1haWwucnUiLCJyb2xlIjoiVXNlciIsImlhdCI6MTY4NjEwOTk2NiwiZXhwIjoxNjg2MzY5MTY2fQ.z27mdymXBzy-6P59IpmmKi-VOS2yPeMcH2b_xAWA3BA'}})
            .then((responce)=>{
                const userSiteUrl = responce.data.deployLogs.substring(responce.data.deployLogs.length - 18 ,responce.data.deployLogs.length)
                setSiteUrl("http://"+userSiteUrl)
            })
    }

    getProjectInfo()
    getServiceInfo()
    getDeploymentInfo()

    const deleteProj = () =>{

    }

    return(
        <div className={officestyles.officeWrapper}>
            <h1>Управление приложением</h1>
            <p>Имя проекта: {projName}</p>
            <p>Состояние: {projStatus}</p>
            <span>Ссылка на ваше приложение:</span>
            <a href={siteUrl}>{siteUrl}</a>
            <button>Остановить и удалить</button>
        </div>
    )
}

const OfficeBody = (props:OfficeProps) =>{
    if (props.hasProjects){
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