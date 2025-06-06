// create a digital clock running a continusly using useeffect 
import React,{useState,useEffect} from 'react'

const UE2 = () => {
    const[date,setDate]=useState(new Date())

    useEffect(()=>{
        setInterval(() => {
            setDate(new Date())
        }, 1000);
    },[])
  return (
    <div>
      <h1 style={{color:'yellow',backgroundColor:'black',textAlign:'center',border:'2px solid red'}}>
         {date.toLocaleTimeString()}<br/>
        {/* Hour-{date.getHours()}:Min-{date.getMinutes()}:Sec-{date.getSeconds()} */}
      </h1>
    </div>
  )
}

export default UE2;
