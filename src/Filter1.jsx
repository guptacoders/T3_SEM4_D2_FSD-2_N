import React from 'react'

const Filter1 = () => {
    const arr = [1,2,3,4,5,6,7,8,9]

    const newarr = arr.filter((num)=>{
        if(num===3)
        {
            return false;
        }
        else{
            return true;
        }
    })

    var arr1 = arr.join(",")
    var arr2 = newarr.join(",")
  return (
    <div>
      <h1>Array Elements Before Filter is {arr1}</h1>
      <h1>Array Elements After Filter is {arr2}</h1>
    </div>
  )
}

export default Filter1
