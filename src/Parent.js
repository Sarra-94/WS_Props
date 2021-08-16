import React from "react";
import Child from "./Child";

const Parent = () => {
  let y = 2;
  const handleData = (name) => alert(name);
  return (
    <div>
      <h1>hello from Parent component</h1>
      <Child y={y} handledata={handleData}>
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png"
          alt="avatar"
        />
        <p>i am hildren props</p>
      </Child>
    </div>
  );
};

export default Parent;
