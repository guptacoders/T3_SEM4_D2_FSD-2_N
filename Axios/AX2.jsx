import axios from 'axios'
import React,{useState,useEffect} from 'react'

const AX2 = () => {
    const[post,setPost]=useState('')

    useEffect(()=>{
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then((Response)=>{setPost(Response.data)})

    })
  return (
    <div>
      <img src={post.message} height="300px" width={"300px"} />
    </div>
  )
}

export default AX2
