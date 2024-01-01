
import "./App.css";
import { useState } from "react";

function App() {
  const [color,changeColor] = useState('black')
  return (
    <div className="w-full h-screen justify-center flex" style={{backgroundColor:color}}>
      <button
      onClick={()=>changeColor('green')}
      className="text-green-500 pr-1"
      >green</button>
      <button
      onClick={()=>changeColor('blue')}
      className="text-blue-500 pr-1"
      >blue</button>
      <button
      onClick={()=>changeColor('red')}
      className="text-red-500 pr-1"
      >red</button>
      <button
      onClick={()=>changeColor('yellow')}
      className="text-yellow-500 pr-1"
      >yellow</button>
    </div>
  );
}

export default App;
