import { useState, useEffect } from "react";

function App() {
  // Load the background color from localStorage, or default to 'black' if not set
  const [color, setColor] = useState(
    () => localStorage.getItem("backgroundColor") || "black"
  );

  // Update localStorage whenever the color changes
  useEffect(() => {
    localStorage.setItem("backgroundColor", color);
  }, [color]);

  return (
    <div
      className="flex h-[100vh] justify-center items-end"
      style={{ backgroundColor: color }}
    >
      <div className="flex bg-gray-200 border border-zinc-700 px-8 py-4 mb-10 rounded-full gap-4">
        <button
          className=" px-6 py-2 text-lg text-white rounded-full"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className=" px-6 py-2 text-lg text-white rounded-full"
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className=" px-6 py-2 text-lg text-white rounded-full"
          style={{ backgroundColor: "yellow" }}
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className=" px-6 py-2 text-lg text-white rounded-full"
          style={{ backgroundColor: "olive" }}
          onClick={() => setColor("olive")}
        >
          Olive
        </button>
        <button
          className=" px-6 py-2 text-lg text-white rounded-full"
          style={{ backgroundColor: "black" }}
          onClick={() => setColor("black")}
        >
          Black
        </button>
        <button
          className=" px-6 py-2 text-lg text-white rounded-full"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className=" px-6 py-2 text-lg text-white rounded-full"
          style={{ backgroundColor: "grey" }}
          onClick={() => setColor("grey")}
        >
          Grey
        </button>
        <button
          className=" px-6 py-2 text-lg text-black rounded-full"
          style={{ backgroundColor: "white" }}
          onClick={() => setColor("white")}
        >
          White
        </button>
      </div>
    </div>
  );
}

export default App;
