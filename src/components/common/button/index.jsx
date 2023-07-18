import React from "react";

export const Button = ({ item }) => {
  return (
    <div className="common-button">
      <span>{item?.tag}</span>
    </div>
  );
};
