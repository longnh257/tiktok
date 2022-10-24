import "./App.css";
import { useState } from "react";
import Content from "./Content";

function App() {
  
  const [show,setShow] = useState()

  return (
    <div className="App">
      <button onClick={() => {setShow(!show); console.log(!show);}}>register</button>
      {show && <Content></Content>}
    </div>
  );
}

export default App;
