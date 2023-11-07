import { useState, useEffect } from "react";

function Hello() {
  function byHello() {
    console.log("Destroyed :(");
  }
  function showHello() {
    console.log("Created :)");
    return byHello;
  }
  useEffect(showHello, []);
  return <h1>Hello!</h1>;
}

function App() {
  const [status, setStatus] = useState(false);
  const onClick = () => setStatus((prev) => !prev);

  return (
    <div>
      {status ? <Hello /> : null}
      <button onClick={onClick}>{status ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
