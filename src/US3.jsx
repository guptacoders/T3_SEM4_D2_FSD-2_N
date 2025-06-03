import React,{useState } from "react";

const US3 = () => {

    const[sty,setSty]=useState('cyan')

    function handleClick(){
        setSty('limegreen')
    }
  return (
    <div>

        <p style={{backgroundColor:sty}}>Hello Jee Kaise Hoo</p>
        <button onClick={handleClick}>Muje Click Karo</button>
      
    </div>
  )
}

export default US3
