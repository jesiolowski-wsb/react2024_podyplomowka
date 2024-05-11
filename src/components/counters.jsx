import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 1, value: 0 },
    { id: 1, value: 0 },
    { id: 1, value: 0 },
  ]);

  return (
    <div>
      {counters.map((counter) => (
        <Counter />
      ))}
    </div>
  );
};

export default Counters;
