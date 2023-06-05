import axios from "axios";
import {useState, useEffect} from 'react';

const Documentation = () =>{
    const [appState, setAppState] = useState('12345');

    const text = async () =>{
        setAppState("poehali")
        axios.post("http://192.168.0.104:3000/api/users", {headers:{accept: "application/json"}, 'Content-Type':"application/json"}).then((response) => setAppState(response.statusText)).catch((error) => console.log(error))
    }

    const handleClick = ()=>{
        text().then();
    }

    return(<div>
        <p>{appState}</p>
        <button onClick={handleClick}>click me</button>
    </div>)
}

export default Documentation