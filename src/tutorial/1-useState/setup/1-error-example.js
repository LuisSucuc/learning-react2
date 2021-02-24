import React from "react";

const ErrorExample = () => {
  let title = "Random titile";

  const handleClick = () => {
    title = "hello people";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn btn" onClick={handleClick}>
        Random
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
