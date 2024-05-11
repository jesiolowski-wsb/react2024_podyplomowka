import React, { useState } from "react";

const Counter = (props) => {
  console.log("props", props);
  const [value, setCount] = useState(props.value);

  const formatCount = () => (value === 0 ? <h1>Zero</h1> : value);

  let classes = "badge m-2 badge-";
  classes += value === 0 ? "warning" : "primary";

  const handleIncrement = (incrementBy) => {
    setCount(value + incrementBy);
  };

  return (
    <div>
      {props.children}
      <span className={classes}>{formatCount()}</span>
      <button
        onClick={() => handleIncrement(10)}
        className={"btn btn-secondary btn-sm"}
      >
        increment
      </button>
      <button
        onClick={() => props.onDelete(props.id)}
        className="btn btn-sm btn-danger m-2"
      >
        delete
      </button>
    </div>
  );
};

export default Counter;
