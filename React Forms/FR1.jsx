import React, { useState } from 'react'

const FR1 = () => {
const[name,setName]=useState('');
    function onchange(e)
    {
        e.preventDefault()
        alert(`Welcome ${name}`)
    }
  return (
    <div>
      <form onSubmit={onchange}>
        UserName:<input type="text" placeholder='Enter User Name...' onChange={(e)=> setName(e.target.value)}/>

        <button >Submit</button>
      </form>
    </div>
  )
}

export default FR1
