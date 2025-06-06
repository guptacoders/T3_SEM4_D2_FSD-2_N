import React,{useState,useEffect} from 'react'

const UE1 = () => {
    const[countA,setCountA]=useState(0)
    const[countB,setCountB]=useState(0)

    useEffect(()=>{alert('Clicked')},[countA])

    function changeCountA()
    {
        setCountA(countA+1)
    }
        function changeCountB()
    {
        setCountB(countB+1)
    }
  return (
    <div>
      <button onClick={changeCountA}>ButtonA {countA}</button>
      <button onClick={changeCountB}>ButtonB {countB}</button>
    </div>
  )
}

export default UE1
