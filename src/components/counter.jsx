import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(6);

  const formatCount = () => (count === 0 ? <h1>Zero</h1> : count);

  let classes = "badge m-2 badge-";
  classes += count === 0 ? "warning" : "primary";

  const handleIncrement = (incrementBy) => {
    setCount(count + incrementBy);

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
