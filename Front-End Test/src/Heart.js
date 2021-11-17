import { useEffect, useState } from "react";

export default function Heart() {
  const [color, setColor] = useState("#00000033");

  function handleColorChange(e) {
    const newColor = color === "#00000033" ? "red" : "#00000033";
    e.target.style.color = newColor;
    setColor(newColor);
  }

  useEffect(() => {
    localStorage.setItem("Heart color:", JSON.stringify(color));
  }, [color]);

  return (
    <i
      className="far fa-heart fa-lg heart"
      onClick={handleColorChange}
      style={{ color: "#00000033" }}
    ></i>
  );
}
