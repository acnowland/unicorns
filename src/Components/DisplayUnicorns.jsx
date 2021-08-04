import React from "react";
import UnicornCard from "./UnicornCard";

const DisplayUnicorns = ({ unicorns }) => {
  const generateUnicornCards = unicorns.map((unicorn) => {
    return <UnicornCard unicorn={unicorn} key={unicorn._id} />;
  });

  return <div>{generateUnicornCards}</div>;
};

export default DisplayUnicorns;
