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

  // function handlePreviousStep() {
  //   setStep((s) => s - 1);
  // }
  // function handleNextStep() {
  //   setStep((s) => s + 1);
  // }

  function handlePreviousCount() {
    setCount((с) => с - step);
  }
  function handleNextCount() {
    setCount((с) => с + step);
  }

  function reset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div>
        <input
          value={step}
          onChange={(e) => setStep(+e.target.value)}
          type="range"
          min="0"
          max="10"
        ></input>
        {step}
        {/* <button onClick={handlePreviousStep}>-</button>Step: {step}
        <button onClick={handleNextStep}>+</button> */}
      </div>
      <div>
        <button onClick={handlePreviousCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
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
      {count !== 0 || step !== 1 ? (
        <button onClick={reset}>Reset</button>
      ) : null}
    </div>
  );
}
