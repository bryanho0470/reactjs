import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    return setValue((event) => event + 1);
  };
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Searching for", keyword);
    }
  }, [keyword]);

  useEffect(() => {
    console.log("This will change when counter changed");
  }, [counter]);

  return (
    <div>
      <input
        vlaue={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click ME!</button>
    </div>
  );
}

export default App;
