import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Created :)");
    return () => console.log("Destroyed :(");
  }, []);
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
