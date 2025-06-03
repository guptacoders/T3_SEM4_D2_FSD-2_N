import { useState } from "react";

import React from 'react'

const US2 = () => {

    const[num,setNum] = useState(0);

    function increment()
    {
        if(num<10)
        {
            setNum(num+1)
        }
        else{
            return false
        }
    }

    function decrement()
    {
        if(num>0)
        {
            setNum(num-1)
        }
        else{
            return false
        }
    }
  return (
    <div>

    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>  
    <h1>Number: {num}</h1>
    </div>
  )
}

export default US2
