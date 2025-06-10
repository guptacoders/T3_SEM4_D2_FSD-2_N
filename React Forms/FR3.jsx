import React,{useState} from 'react'

const FR3 = () => {
    const[psize,setPsize]=useState("");

    function handlechnage(e)
    {
        setPsize(e.target.value)
    }
  return (
    <div>
      <form action="">
        <input type="radio" name="r1" value="regular" onChange={handlechnage} />Regular
        <input type="radio" name="r1" value="medium" onChange={handlechnage} />Medium
        <input type="radio" name="r1" value="large" onChange={handlechnage} />Large
      </form>
      <h1>You have selected pizz of {psize} Size.</h1>
    </div>
  )
}

export default FR3
