import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(6);
  const [imageUrl, setimageUrl] = useState("https://picsum.photos/200");

  const formatCount = () => (count === 0 ? <h1>Zero</h1> : count);

  let classes = "badge m-2 badge-";
  classes += count === 0 ? "warning" : "primary";

  return (
    <>
      <img src={imageUrl} />
      <span className={classes}>{formatCount()}</span>
      <button className={"btn btn-secondary btn-sm"}>increment</button>
    </>
  );
};

export default Counter;
