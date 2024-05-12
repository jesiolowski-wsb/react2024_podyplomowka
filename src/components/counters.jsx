import React from "react";
import Counter from "./counter";

const Counters = ({
  counters,
  onReset,
  onDelete,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div>
      <button onClick={onReset} className={"btn btn-sm btn-primary"}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
