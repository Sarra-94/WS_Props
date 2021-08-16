import React from "react";
import PropTypes from "prop-types";

const Child = ({ x, y, handledata, children }) => {
  let name = "maryem";
  return (
    <div>
      <h2>Component Child</h2>
      {children}
      <h2>{x}</h2>
      <h3>{y > 10 ? "good" : "bad"}</h3>
      <button onClick={() => handledata(name)}>click me</button>
    </div>
  );
};

export default Child;
// default Props
Child.defaultProps = {
  x: "inconnu",
  y: 3,
};
// proptypes:
Child.propTypes = {
  y: PropTypes.number,
};
