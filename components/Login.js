import React,{useState} from 'react'
import { useHistory } from "react-router-dom";  
export default function Login({persons,emplyoiesLogin}) {

const [noCode,setNoCode]=useState("")

const history=useHistory()


  const emplyoiesData = () => {
    for (let i in persons) {
      if (persons[i].serial == noCode) {
        emplyoiesLogin(noCode, i);
      
        history.push("/welcome");
      
        return;
      }else if (noCode=='99999'){
        history.push('/manager')
        return;
    }

    }
    alert(`The ${noCode} is not exist!`);
  };
   
    return (
        <div style={{  height: "700px" }}>
           <label>No.</label>
      <input type="numbers" onChange={(e) => setNoCode(e.target.value)}></input><br/>
            <button className='btn' onClick={()=>emplyoiesData()}>Login</button>
        </div>
    )
}
