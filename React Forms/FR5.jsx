// creat app which contain forms with the fields name email password and confirm password when the form subbmited the values of password and confirm password must be saved else it will give alert msg if the form submmited succesfully then display enter name and email id in alert box.
import React,{useState} from 'react'

const FR5 = () => {
    const[formdata,setFormData]=useState({});

     function handleChange(e)
    {
        const name = e.target.name;
        const value= e.target.value;
        setFormData({...formdata,[name]:value})
        console.log(formdata)
    }

    function handleSubmit(e)
    {
        e.preventDefault()
        alert("Yours Form Subbmited Succesfully.")
    }
  return (
    <>
     <form onSubmit={handleSubmit}>

        Name:<input type="text" name="name" onChange={handleChange} />

        Email:<input type="email" name="email" onChange={handleChange} />

        Password:<input type="password" name="password" onChange={handleChange} />

        Conform Password:<input type="password" name="password" onChange={handleChange} />

    </form> 
    </>
  )
}

export default FR5
