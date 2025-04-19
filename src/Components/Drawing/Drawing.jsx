import { useState } from "react";

export const DrawingConatiner = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [paths, setPaths] = useState([]);

  const handleMouseDown = (e) => {
    if (isDrawing) {
      setPaths((i) => ondrag);
    }
  };
  const handleMouseMove = (e) => {
    if (setIsDrawing) {
      (polyline) => stroke;
    }
  };
  const handleMouseUp = (e) => {
    /* stop drawing  */
  };
  const handleClear = () => {
    /* clear all      */
  };

  console.log(handleMouseDown);

  return (
    <>
      <svg
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ border: "2px solid red" }}
      >
        {paths.map((points, i) => (
          <polyline
            key={i}
            points={points.map((p) => `${p.x},${p.y}`).join(" ")}
            stroke="black"
            fill="none"
          />
        ))}
      </svg>
    </>
  );
};
