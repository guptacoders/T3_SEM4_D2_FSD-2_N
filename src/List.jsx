import React from 'react'

const List = () => {
    const student = [{id:1,name:"Neel"},
                        {id:2,name:"Kavish"},
                        {id:3,name:"Ishan"}
    ]
  return (
    <div>
        <ol>
      {
        student.map((student)=>{
            return <li>{student.name}</li>
            
        })
      }
      </ol>
    </div>
  )
}

export default List
