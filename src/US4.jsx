import React,{useState} from 'react';
import img1 from '../public/img1.jpg'
import img2 from '../public/img2.jpg'


const US4 = () => {

    const[photo,setPhoto]=useState(img1)

    function handleimage()
    {
        if(photo===img1)
        {
            setPhoto(img2)
        }
        else{
            setPhoto(img1)
        }
    }
  return (
    <div>
      <img src={photo} height="100px" width="100px" />
      <button onClick={handleimage}>Click To Chnage Photo</button>
    </div>
  )
}

export default US4
