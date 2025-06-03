import React,{useState} from 'react'

const US5 = () => {

    const[firstname,setFirstName]=useState("")
    const[lastname,setLastName]=useState("")

    function handleChnage(e)
    {
        setFirstName(e.target.value)
    }

    function handleChnage1(e)
    {
        setLastName(e.target.value)
    }
  return (
    <div>
      FirstName: <input type="text" onChange={handleChnage}  /><br /><br />
      LastName:  <input type="text" onChange={handleChnage1} value={lastname} /><br />

      <h1>Your Name is {firstname} & Your Surname Is {lastname}</h1>
    </div>
  )
}

export default US5
