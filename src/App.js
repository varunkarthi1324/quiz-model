import { useState } from "react";
import "./styles.css";

export default function App() {
  const [steps, setsteps] = useState(1);

  return (
    <div className="App">
      <button onClick={() => setsteps((s) => s - 1)}>-</button>
      <span>Step:{steps}</span>
      <button onClick={() => setsteps((s) => s + 1)}>+</button>
      <Count steps={steps} />
    </div>
  );
}

function Count(props) {
  const [counter, setcounter] = useState(0);

  const date = new Date("october 24 2027");
  date.setDate(date.getDate() + counter);

  return (
    <div>
      <div>
        <button onClick={() => setcounter((c) => c - props.steps)}>-</button>
        <span>Count:{counter}</span>
        <button onClick={() => setcounter((c) => c + props.steps)}>+</button>
      </div>
      <span>
        {counter === 0
          ? "today is "
          : counter > 0
          ? `${counter} days from today is`
          : `${Math.abs(counter)} days ago was`}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}
