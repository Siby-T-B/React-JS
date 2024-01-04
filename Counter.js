// import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
export function Counter(){
    const[counter,setCounter]=useState(0)
    function addition(){
    setCounter(counter+1)
    if(counter==9){
    document.getElementById("btn1").disabled=true;
    }
    else{
        document.getElementById("btn2").disabled=false;
    }
}
    function subtraction(){
    setCounter(counter-1)
    if(counter==1){
    document.getElementById("btn2").disabled=true;
    }
    else{
    document.getElementById("btn1").disabled=false;
}
    }

    return(
        <>
        <div className="text-center">
            <h1>{counter}</h1>
            <button id="btn1" onClick={addition}>ADD</button>
            <button id="btn2" onClick={subtraction}>SUB</button>
            <button onClick={()=>{setCounter(0)}}>REST</button>
            
        </div>

        </>
    );
}