import axios from "axios";
import {useState, useEffect} from 'react';

const Documentation = () =>{
    const [appState, setAppState] = useState('12345');

    const text = async (email:string,password:string) =>{
        setAppState("poehali")
        axios.post("192.168.0.104:3000/api/users",{email, password}).then((response) => setAppState(response.statusText))
    }

    const handleClick = ()=>{
        text("12345","12312312");
    }

    return(<div>
        <p>{appState}</p>
        <button onClick={handleClick}>click me</button>
    </div>)
}

export default Documentation