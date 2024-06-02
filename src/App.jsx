import { useState } from "react";
import ComponenteNuevo from "../ComponenteNuevo";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Click on the Vite and React logos to learn more</p>
      <ComponenteNuevo></ComponenteNuevo>
    </>
  );
}

export default App;
