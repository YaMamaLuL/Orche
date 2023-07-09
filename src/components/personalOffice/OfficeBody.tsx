import styles from "./OfficeBody.module.scss"
import eoStyles from "./EmptyOffice.module.scss"
import officestyles from "./Office.module.scss"
import axios from 'axios'
import React, {useEffect, useState} from "react";
import Cookies from "universal-cookie";
import CreateProjectForm from "./CreateProjectForm";
import CreateServiceForm from "./CreateServiceForm";

const OfficeBody = () =>{
    const cookies = new Cookies()
    const [hasProjects, setHasProjects] = useState(false)
    const [currentService, setCurrentService] = useState({id:"",name:"",repository:"",buildCommand: "", deployCommand: "", ip: "", port: 0, internalPort: 0, url: "", status: "", variables: {}})
    const [serviceNames, setServiceNames] = useState([{id:"",name:"", repository:""}])
    const [projectNames, setProjectNames] = useState([{id:"",name:""}])
    const [currentProject, setCurrentProject] = useState({id:"", name:""})
    const [showCreateProjectForm, setShowCreateProjectForm] = useState(false)
    const [showCreateServiceForm, setShowCreateServiceForm] = useState(false)

    const projectClickHandle = async (project: {id:string, name:string}) => {
        setCurrentProject(project)

        axios.get(`http://192.168.0.104:3000/api/projects/${project.id}/services`,
            {headers:{"accept":"json/application", "Authorization":`Bearer ${cookies.get("accessToken")}`}})
            .then((responce) => {
                console.log(responce.data)
                setServiceNames(responce.data)
            })
    }

    const serviceClickHandle = async (service:{id:string,name:string, repository:string}) => {
        axios.get(`http://192.168.0.104:3000/api/projects/${currentProject.id}/services/${service.id}`,
            {headers:{
                "accept":"application/json", "Authorization": `Bearer ${cookies.get("accessToken")}`
                }})
            .then((responce) => {
                setCurrentService(responce.data)
            })
    }

    const getProjectNames = async() => {
        await axios.get("http://192.168.0.104:3000/api/projects", {headers:{
                "accept":"application/json", "Authorization": `Bearer ${cookies.get("accessToken")}`
            }})
            .then((responce) =>{
                setProjectNames(responce.data)
            })
            .catch((error) => {return [{id:"", name:""}]})
    }

    const getServiceNames = async () => {
        await axios.get(`http://192.168.0.104:3000/api/projects/${currentProject}/services`,
            {headers:{"accept":"application/json", "Authorization":`Bearer ${cookies.get("accessToken")}`}})
            .then((responce)=>{setServiceNames(responce.data)})
            .catch((error) => {console.log(error)})
    }

    useEffect(()=>{
      getProjectNames()
      setHasProjects(projectNames.length > 0)
    },[])


    if (true){
        return(
            <div className={styles.OfficeWrapper}>
                <div className={officestyles.projectNamesWrapper}>
                    <h1>Проект</h1>
                    <ul>
                        {projectNames.length > 0 && projectNames[0].id !== ""
                            ? projectNames.map((item, key) => <li key={key}><button onClick={async (event) => {
                                console.log(item.id)
                                await projectClickHandle(item)
                                event.preventDefault()}}>{item.name}</button></li>)
                            : <li><p>Список проектов пуст</p></li>}
                        <li key={projectNames.length+1}><button onClick={async (event) => {
                            event.preventDefault();
                            showCreateProjectForm?setShowCreateProjectForm(false):setShowCreateProjectForm(true);}
                        }>Создать проект</button></li>
                        <li>{showCreateProjectForm? <CreateProjectForm changeStateFunc={setShowCreateProjectForm} updateProjectsList={getProjectNames}/>: <div/>}</li>
                    </ul>
                </div>
                <div className={officestyles.projectNamesWrapper}>
                    <h1>Приложение</h1>
                    <ul>
                        {currentProject.name !== ""
                            ? serviceNames.map((item,key) => <li key={key}><button onClick={async (event)=>{
                                event.preventDefault()
                                await serviceClickHandle(item)
                            }}>{item.name}</button></li>)
                            : <li><p>Список приложений пуст</p></li>}
                        <li key={serviceNames.length+1}><button onClick={(event) => {
                            event.preventDefault()
                            showCreateServiceForm? setShowCreateServiceForm(false): setShowCreateServiceForm(true)
                        }}>Создать приложение</button></li>
                        <li>{showCreateServiceForm? <CreateServiceForm changeStateFunc={setShowCreateServiceForm} updateServiceList={setServiceNames} projectId={currentProject.id}/>: <div/>}</li>
                    </ul>
                </div>
                <div className={officestyles.officeWrapper}>
                    <h1>Управление приложением</h1>
                    <p>Имя приложения: {currentService.name !== ""? currentService.name: "nothing"}</p>
                    <p>Состояние: {currentService.status !== ""? currentService.status: "nothing"}</p>
                    <span>Ссылка на ваше приложение:</span>
                    <a href={currentService.url}>{currentService.url !== ""? currentService.url: "nothing"}</a>
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