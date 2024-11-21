import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect with no dependencies runs once!");
    return () => {
      console.log("Cleanup for effect with no dependencies (unmount)");
    };
  }, []);

  useEffect(() => {
    console.log(`Effect with [count] runs! Count is: ${count}`);
    return () => {
      console.log("Cleanup before re-running [count] effect or unmounting");
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
