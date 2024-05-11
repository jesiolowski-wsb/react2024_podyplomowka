import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 2 },
    { id: 3, value: 7 },
    { id: 4, value: 23 },
  ]);

  const handleDelete = (counterId) => {
    setCounters(counters.filter((c) => c.id !== counterId));
  };

  return (
    <div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          id={counter.id}
          value={counter.value}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Counters;
