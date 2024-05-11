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

  const handleReset = () => {
    const countersReset = counters.map((c) => {
      c.value = 0;
      return c;
    });

    setCounters(countersReset);
  };

  const handleIncrement = (counter) => {
    const countersUpdated = [...counters];
    const index = countersUpdated.indexOf(counter);
    countersUpdated[index] = { ...counter };
    countersUpdated[index].value++;

    setCounters(countersUpdated);
  };

  return (
    <div>
      <button onClick={handleReset} className={"btn btn-sm btn-primary"}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
        />
      ))}
    </div>
  );
};

export default Counters;
