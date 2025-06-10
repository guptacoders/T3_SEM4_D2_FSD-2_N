import React,{useState} from 'react'

const FR2 = () => {
    const[car,setCar]=useState('')

    function handleChange(e)
    {
        setCar(e.target.value)
    }
  return (
    <div>
      <form action="">
        <select onChange={handleChange}>
            <option value="Hundai">Huandai</option>
            <option value="Kia">Kia</option>
            <option value="Maruti">Maruti</option>
            <option value="Bmw">BMW</option>
        </select>
      </form>
      <h1>Selected Car: {car}</h1>
    </div>
  )
}

export default FR2
