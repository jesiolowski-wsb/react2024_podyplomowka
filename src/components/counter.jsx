import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(6);
  const [tagsList, setTagsList] = useState([]);

  const formatCount = () => (count === 0 ? <h1>Zero</h1> : count);

  let classes = "badge m-2 badge-";
  classes += count === 0 ? "warning" : "primary";

  const renderTags = () =>
    tagsList.length !== 0 ? (
      <ul>
        {tagsList.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    ) : (
      <div>There are no tags</div>
    );

  return (
    <>
      {renderTags()}
      <span className={classes}>{formatCount()}</span>
      <button className={"btn btn-secondary btn-sm"}>increment</button>
    </>
  );
};

export default Counter;
