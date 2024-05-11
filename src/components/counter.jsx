import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [imageUrl, setimageUrl] = useState("https://picsum.photos/200");

  const formatCount = () => (count === 0 ? <h1>Zero</h1> : count);

  return (
    <>
      <img src={imageUrl} />
      <span>{formatCount()}</span>
      <div>hello world</div>
    </>
  );
};

export default Counter;
