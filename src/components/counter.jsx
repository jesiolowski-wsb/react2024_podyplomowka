import React, { useState } from "react";

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
        increment
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-sm btn-danger m-2"
      >
        delete
      </button>
    </div>
  );
};

export default Counter;
