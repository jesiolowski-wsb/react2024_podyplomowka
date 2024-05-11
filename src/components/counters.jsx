import React from "react";
import Counter from "./counter";

const Counters = (props) => {
  return (
    <div>
      <button onClick={props.onReset} className={"btn btn-sm btn-primary"}>
        Reset
      </button>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
        />
      ))}
    </div>
  );
};

export default Counters;
