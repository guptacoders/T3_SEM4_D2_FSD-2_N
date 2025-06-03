import { useState } from "react";

function US1()
{
    const[count,setCount] = useState(0)

    const handlecount=()=>{
        setCount(count+1)
    }

    return(
        <div>
            <h1>You Clicked {count} Times.</h1>

            <button onClick={handlecount}>Click Me</button>
        </div>
    )
}

export default US1;