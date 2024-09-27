import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  // const currentDate = new Date(date.setDate(date.getDate() + count));
  date.setDate(date.getDate() + count);

  function handlePreviousStep() {
    setStep((s) => s - 1);
  }
  function handleNextStep() {
    setStep((s) => s + 1);
  }

  function handlePreviousCount() {
    setCount((с) => с - step);
  }
  function handleNextCount() {
    setCount((с) => с + step);
  }

  return (
    <div>
      <div>
        <button onClick={handlePreviousStep}>-</button>Step: {step}
        <button onClick={handleNextStep}>+</button>
      </div>
      <div>
        <button onClick={handlePreviousCount}>-</button>Count: {count}
        <button onClick={handleNextCount}>+</button>
      </div>
      <p>
        {count === 0
          ? "Today is "
          : "" || count > 0
          ? `${count} days from today is `
          : `${-count} days ago was `}{" "}
        {/* {currentDate.toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })} */}
        {date.toDateString()}
      </p>
    </div>
  );
}
