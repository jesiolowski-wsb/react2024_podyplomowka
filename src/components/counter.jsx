import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(4);

  return (
    <>
      <span>{count}</span>
      <div>hello world</div>
    </>
  );
};

export default Counter;
