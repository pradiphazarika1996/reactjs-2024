import { useState, useEffect } from "react";


function App() {
const [counter, setCounter] = useState(0);
 
const valueAdded =()=>{
  setCounter(counter+1)

}
const valueRemove = ()=>{
  if (counter>0) {
    setCounter(counter-1);
  
    
  }
  console.log("clicked");
}
// useEffect(()=>{
// valueAdded()
// },[])
  return (
    <>
    <h2>Counter value is :{counter} </h2>
    <button
    onClick={valueAdded}
    >+</button>
    <button
    onClick={valueRemove}
    >-</button>
    </>
  )
}

export default App;
