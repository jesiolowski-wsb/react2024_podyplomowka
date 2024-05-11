import React, { useState } from "react";

const Counter = (props) => {
  console.log("props", props);
  const [value, setCount] = useState(props.value);

  const formatCount = () => (value === 0 ? <h1>Zero</h1> : value);

  let classes = "badge m-2 badge-";
  classes += value === 0 ? "warning" : "primary";

  const handleIncrement = (incrementBy) => {
    setCount(value + incrementBy);

    console.log("handle Increment clicked");
  };

  return (
    <div>
      <span className={classes}>{formatCount()}</span>
      <button
        onClick={() => handleIncrement(10)}
        className={"btn btn-secondary btn-sm"}
      >
        increment
      </button>
    </div>
  );
};

export default Counter;
