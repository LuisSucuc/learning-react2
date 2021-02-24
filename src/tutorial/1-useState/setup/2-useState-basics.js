import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("First");
  const handleclick = () => {
    if (text === "Ok") {
      setText("Bye");
    } else {
      setText("Ok");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleclick}>
        Change
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
