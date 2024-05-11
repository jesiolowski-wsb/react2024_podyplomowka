import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [imageUrl, setimageUrl] = useState("https://picsum.photos/200");

  const formatCount = () => (count === 0 ? <h1>Zero</h1> : count);

  const styles = { color: "deeppink", border: "15px dashed green" };

  return (
    <>
      <img src={imageUrl} />
      <span style={styles}>{formatCount()}</span>
      <div style={{ color: "yellow" }}>hello world</div>
    </>
  );
};

export default Counter;
