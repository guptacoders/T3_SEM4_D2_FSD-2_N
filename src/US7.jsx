import React,{useState} from 'react'

const US7 = () => {
    const[task,setTask]=useState("")
    const[todolist,setTodoList]=useState([])

    function handlechange(e)
    {
        setTask(e.target.value)
    }

    function addTask(e)
    {
        setTodoList([...todolist,task])
    }

    function deleteTask(task)
    {
        setTodoList(
            todolist.filter((t)=>{
                if(t!=task)
                {
                    return true
                }
                else{
                    return false;
                }
            })
        )
    }
  return (
    <div>
      <center>
        <h1>ENTER TASK</h1>

        <input type="text" onChange={handlechange} placeholder='Enter Here...'/>

        <button onClick={addTask}>Add Task</button>
        {
            todolist.map((val)=>{
                return(
                    <>
                    <h1>{val}</h1>
                    <button onClick={()=>deleteTask(val)}>delete Task</button>
                    
                    </>
                )
            })
        }
      </center>
    </div>
  )
}

export default US7
