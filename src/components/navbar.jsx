import React from "react";

const Navbar = (props) => {
  return (
    <div>
      Navbar <span className={"badge badge-info"}>{props.totalCounters}</span>
    </div>
  );
};

export default Navbar;
