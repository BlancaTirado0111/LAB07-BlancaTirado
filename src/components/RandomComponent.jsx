import { useState } from "react";

export const RandomComponent = () => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div>
      <p>Número aleatorio: {randomNumber}</p>
      <button onClick={generateRandomNumber}>Generar nuevo número</button>
    </div>
  );
};
