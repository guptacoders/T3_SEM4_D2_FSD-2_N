// creat a react app to compare 2 number the application will consist of 4 componenets main comp comp1 comp2 main.js is used to pass 2 numbers which are user defined numbers use useState Hooks to store those numbers in comp1.js display only text in h1 tag in center comparision of numbers in comp1.js this components compare 2 numbers for in equality one of the below statement has to print after comparing in h1 tag with higher provided number in green color and lower provided number in red color in comp2.js the msg will be displayed number1 and number2 are same in orenge color and h2 tag if this both number are same.

import React, {useState,createContext } from "react";
import Comp from './Comp'
const Num1 = createContext()
const Num2 = createContext()

function Main3() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  return (
   <center>
   <Num1.Provider value={num1}>
    <Num2.Provider value={num2}>
        <Comp/>
    </Num2.Provider>
   </Num1.Provider>

   Number 1:<input type="number" value={num1} onChange={(e)=> setNum1(e.target.value)}></input> 
   Number 2:<input type="number" value={num2} onChange={(e)=> setNum2(e.target.value)}></input>
   </center>
 
  )
}

export default Main3;
export {Num1,Num2}