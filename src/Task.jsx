import React from 'react'

const Task = () => {
        function handleChange(event){
          document.getElementById("t1").innerHTML=event.target.value;
        // console.log(event.target.value)
    }
  return (

    <div>
    
      <input type='text' onChange={handleChange}></input>
      <h2 id="t1"></h2>
    </div>
  )
}

export default Task
