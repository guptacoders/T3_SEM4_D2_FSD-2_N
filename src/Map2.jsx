import React from 'react'

const Map2 = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10]
    
  return (
    <div>
      <h1>Table</h1>
      {
        arr.map((value)=>{
            if(value!=3){
            return <h2>5 * {value} = {5*value}</h2>
            }
        })
      }
      <h1>Actual Array is : {arr}</h1>
    </div>
  )
}

export default Map2
