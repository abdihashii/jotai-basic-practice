// import { useState } from 'react';
import { atom, useAtom } from 'jotai';

const countAtom = atom(0); // default value is 0
const countAtom2 = atom(0);

const Counter1 = () => {
  const [count, setCount] = useAtom(countAtom); // state only for Counter1
  // const [count, setCount] = useAtom(countAtom); // state shared between Counter1 and Counter2
  // const [count, setCount] = useState(0); // state only for this component

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const Counter2 = () => {
  const [count, setCount] = useAtom(countAtom2); // state only for Counter2
  // const [count, setCount] = useAtom(countAtom); // state shared between Counter1 and Counter2
  // const [count, setCount] = useState(0); // state only for this component

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Counter1 />
      <Counter2 />
    </div>
  );
};

export default App;
