
import { useState } from "react";

export default function Counter() {
      const [counter, setCounter]=useState(0)
  const handelClick1 = () => {
    setCounter(counter+1)
  }
  const handelClick2 = () => {
    setCounter(counter-1)
  }
  return (
    <div>
      <h1>Counter App</h1>
      <div style={{fontSize:150, backgroundColor:"yellow", padding:10, margin:250}} >{counter} </div>
      <button onClick={handelClick1}>Increment</button> <br />
      <br />
      <button onClick={handelClick2}>Decrement</button>
      <br/>
      <br />
      <button onClick={() => setCounter(counter + 50)}>
        Increment new One
      </button>
    </div>
  );
}
