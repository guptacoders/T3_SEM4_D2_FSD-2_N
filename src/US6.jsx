import React,{useState} from 'react'

const US6 = () => {

    const[buttontext,setButton]=useState("Show")
    const[text,setText]=useState("")

    function handlechnage(){
            if(buttontext==="Show")
            {
                setButton("Hide")
                setText("Hello Jee")
            }
            else{
                setButton("Show")
                setText("")
            }
    }
  return (
    <div>
      <button onClick={handlechnage}>{buttontext}</button>
      <br /><br />
      <h1>{text}</h1>
    </div>
  )
}

export default US6;
