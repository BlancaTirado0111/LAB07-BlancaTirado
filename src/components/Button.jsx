import { useState } from "react";

export const Button = props => {
  const { text } = props;

  function handlerButton() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    alert(randomNumber);
  }

  return (
    <button onClick={handlerButton}>
      {text}
    </button>
  );
};
