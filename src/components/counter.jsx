import React, { useEffect } from "react";

const Counter = (props) => {
  let classes = "badge m-2 badge-";
  classes += props.counter.value === 0 ? "warning" : "primary";

  return (
    <div>
      <span className={classes}>{props.counter.value}</span>
      <button
        onClick={() => props.onIncrement(props.counter)}
        className={"btn btn-secondary btn-sm"}
      >
        +
      </button>
      <button
        onClick={() => props.onDecrement(props.counter)}
        className="btn btn-secondary btn-sm m-2"
        disabled={props.counter.value === 0}
      >
        -
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-sm btn-danger"
      >
        delete
      </button>
    </div>
  );
};

export default Counter;
