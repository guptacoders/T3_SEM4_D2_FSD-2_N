import React from 'react'

const Map1 = () => {
    const arr = [1,2,3,4,5]
  return (
    <div>
      <h1>Map Example</h1>
      {
        arr.map((value)=>{
            return <h2>Array Elements={value*5}</h2>
        }
      )}
    </div>
  )
}

export default Map1
