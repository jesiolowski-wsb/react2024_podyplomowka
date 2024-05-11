import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 2 },
    { id: 3, value: 7 },
    { id: 4, value: 23 },
  ]);

  return (
    <div>
      {counters.map((counter) => (
        <Counter key={counter.id} value={counter.value}>
          <h4>counter ID: {counter.id}</h4>
        </Counter>
      ))}
    </div>
  );
};

export default Counters;
