import "./Button.css";
import React from "react";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];

const COLOR = ["primary", "blue", "red", "green"];

export const Button = ({
  children,
  type,
  onClick,
  buttonSize,
  buttonSyle,
  buttonColor,
}) => {
  const checkButtonStyle = STYLES.includes(buttonSyle) ? buttonSyle : STYLES[0];

  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = STYLES.includes(buttonColor) ? buttonColor : COLOR[0];

  return (
    <button
      className={`btn ${checkButtonStyle}
        ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
