import React,{useState} from 'react'
import axios from 'axios'

const AX1 = () => {
    const[joke,setJoke]=useState('');
  
    function fetchJoke()
    {
        axios
        .get('https://official-joke-api.appspot.com/random_joke')
        .then((Response)=>{setJoke(Response.data)})
        .catch((error)=>{console.log(error)})
    }

    return (
        <>
        <h1>{joke.setup}</h1>

        <h3>{joke.punchline}</h3>

        
        <input type="button" value="Click Me" onClick={fetchJoke}/>
        <br /><br />

        <button onClick={fetchJoke}>Generate A Joke</button>
        </>
    )
}

export default AX1
