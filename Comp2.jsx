import React,{useContext} from "react";
import {Num1,Num2} from './Main3'

function Comp2() {
    const number3 = useContext(Num1)
      const number4 = useContext(Num2)
  return (
    <h2 style={{ color: "orange", textAlign: "center", marginTop: "30px" }}>
      {number3} and {number4} are same
    </h2>
  );
}

export default Comp2;