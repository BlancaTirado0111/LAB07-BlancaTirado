import { useState } from "react";

export const CompWithProps = () => {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <h2>User: {text}</h2>
    </div>
  );
};
