import React from "react";

const UnicornCard = ({ unicorn }) => {
  return (
    <div>
      <h1>{unicorn.name}</h1>
      <h3>{unicorn.age}</h3>
      <h3>{unicorn.colour}</h3>
    </div>
  );
};

export default UnicornCard;
