import { useState } from "react";
import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";
import Reset from "./components/Reset";
import Title from "./components/Title";

export default function App() {
  const [Count, setCount] = useState(0);
  return (
    <>
      <main>
        <div className="card">
          <Title />
          <Counter Count={Count} />
          <Reset setCount={setCount} />
          <CounterButton Count={Count} setCount={setCount} />
        </div>
      </main>
    </>
  );
}
