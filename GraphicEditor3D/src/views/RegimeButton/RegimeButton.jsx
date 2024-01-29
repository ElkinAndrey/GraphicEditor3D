import React from "react";

const RegimeButton = ({ image, size, disabled, onClick, title }) => {
  const padding = 3;
  return (
    <div
      title={title}
      style={{
        background: disabled ? "#b6b7ba" : "rgba(0, 0, 0, 0)",
        cursor: "pointer",
        padding: `${padding}px`,
        borderRadius: "3px",
        color: "red",
        filter: "invert(0.85)",
      }}
      onClick={onClick}
    >
      <img
        src={image}
        alt=""
        style={{
          height: `${size - 2 * padding}px`,
          width: `${size - 2 * padding}px`,
        }}
      />
    </div>
  );
};

export default RegimeButton;
