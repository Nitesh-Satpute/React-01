import { useState } from "react";

export default function App() {
  let [counter, setCounter] = useState(100);

  const inc = () => setCounter(counter + 1);
  const dec = () => setCounter(counter - 1);
  return (
    <div>
      <h1>Hello Worldddd</h1>
      <h1>{counter}</h1>
      <input
        type="button"
        value="inc"
        onClick={inc}
        style={{ marginLeft: "8px" }}
      />
      <h1>Hiii</h1>
    </div>
  );
}
