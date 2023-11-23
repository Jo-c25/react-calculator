import CulculationDisplay from "./CulculationDisplay"
import "./calculator.css"
import { useState } from "react"
const Calculator = () => {
  const [value, setValue] = useState(0)
  const [result, setResult] = useState("0")
  
  const setvalue = (e) => {
    let num = e.target.value.toString();
    value === 0 ? setValue(num): setValue(value + num)
  }


  const operand = (e) => {
if (value) {
let x = value.split("");
let indicater = x[x.length-1].toString()
console.log(x)
if ( indicater === "+" || indicater  == "-" || indicater == "/" || indicater == "*"){
  console.log(x[x.length-1])
  console.log(value)
  setValue(value + "")
}else{
setValue(value + e.target.value.toString())
}
}
}
  

const resultDisplay= () =>{
    setResult(eval(value));
    setValue(0)
  }
  
  
  const delOperand = () => {
    if (value == 0) {
  setValue(0)
}else{
  let t = "";
  let x = value.split("");
  if (x.length == 1) {
     setValue(0) 
    }else {
       x.pop() 
       t = x.join("") 
       setValue(t) 
    }
} 
}
  
   return (<>
   <div className="result-container">
   <CulculationDisplay value={result}/>
   <hr/>
   <CulculationDisplay  classtype="right" value={value}/>
   </div>
     <div className="container">
     <button className="clear" onClick={() => {setValue(0); setResult("0")}}> clear </button>
     <button value="" onClick={delOperand}> DE</button>
     <button value="/" onClick={operand}> / </button>
     <button value="7"onClick={setvalue}> 7 </button>
     <button value="8" onClick={setvalue}> 8 </button>
     <button value="9" onClick={setvalue}> 9 </button>
     <button value="-" onClick={operand}> - </button>
     <button value="4" onClick={setvalue}> 4 </button>
     <button value="5" onClick={setvalue}> 5 </button>
     <button value="6" onClick={setvalue}> 6 </button>
     <button value="*" onClick={operand}> x </button>
     <button value="1" onClick={setvalue}> 1 </button>
     <button value="2" onClick={setvalue}> 2 </button>
     <button value="3" onClick={setvalue}> 3 </button>
     <button value="+" onClick={operand}> + </button>
     <button value="0" onClick={setvalue}> 0 </button>
     <button value="." onClick={setvalue}> . </button>
     <button className="equal" onClick={resultDisplay}> = </button>
     </div>
     </>
   )
    }
export default Calculator