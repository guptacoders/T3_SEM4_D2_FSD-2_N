// create react app which contains form with the following fields: firstname lastname email password message gender as radio button city as dropdown display submitted details in alert box.
import React,{useState} from 'react'

const FR4 = () => {
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
        alert("Your form has been submitted.\nName: " + formdata.fname +"\nEmail: " + formdata.eid + "\nCity: "+ formdata.city +"\nGender:"+formdata.gender)
    }
  return (
    <>
      <form onSubmit={handleSubmit}>

        <label>First Name:</label>
        <input type="text" name="fname" onChange={handleChange} /><br/>

        <label>Email Id:</label>
        <input type="email" name="eid" onChange={handleChange} /><br/>

        <label>Password:</label>
        <input type="password" name="pass" onChange={handleChange}
        required/><br/>

        <label>Confirm Password:</label>
        <input type="password" name="cpass" onChange={handleChange} /><br/>

        <label>Message : </label>
        <textarea name="msg" onChange={handleChange} /><br/>

        <select onChange={handleChange} name='city'>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Rajkot">Rajkot</option>
        </select>

        <input type="radio" name="gender" value="Male"
        onChange={handleChange} />Male

        <input type="radio" name="gender" value="Female"
        onChange={handleChange}/>Female

        <button type="submit">Submit</button> <br/>
            
      </form>
     
    </>
  )
}

export default FR4
