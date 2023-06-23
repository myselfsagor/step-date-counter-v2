import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="step-count">
        <div className="step">
          <input
            type="range"
            max="10"
            min="1"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <span>Step: {step}</span>
        </div>
        <div className="count">
          <button onClick={() => setCount((s) => s - step)}>-</button>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={() => setCount((s) => s + step)}>+</button>
        </div>
        <div className="message">
          <span>
            {count === 0
              ? "Today is :"
              : count > 0
              ? `${count} days from today is :`
              : `${Math.abs(count)} days ago was`}
          </span>
          <span style={{ color: "green" }}>{date.toDateString()}</span>
        </div>
      </div>
    </>
  );
}
