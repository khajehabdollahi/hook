import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [data, setData] = useState("React is fun");
  function handeClick(){
   setData("This is another Value") 
}

  
  return (
    <div className="App">
     
        {data} <br /> <br />
        <button onClick={handeClick}>Click me</button>
      <Counter />
      <h1>Yes My site is ready</h1>
      <h2>It is wondefull to learn Ract</h2>
    
    </div>
  );
}

export default App;
