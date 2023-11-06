import Button from "./button.js";
import styles from "./app.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>welcome back!</h1>
      <Button text={"Click me!!"} />
    </div>
  );
}

export default App;
