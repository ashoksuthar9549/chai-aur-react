import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <>
      <div className="w-full h-screen duration-200" 
        style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="bg-red-700 outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("red")}>
              Red
            </button>
            <button className="bg-green-500 outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("green")}>
              Green
            </button>
            <button className="bg-yellow-500 outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("yellow")}>
              Yellow
            </button>
            <button className="bg-black outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("black")}>
              Black
            </button>
            <button className="bg-white text-black outline-none px-4 py-1 rounded-full shadow-lg"
              onClick={() => setColor("white")}>
              White
            </button>
            <button className="bg-orange-500 outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("orange")}>
              Orange
            </button>
            <button className="bg-gray-500 outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("gray")}>
              Gray
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
