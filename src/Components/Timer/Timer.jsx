import { useEffect, useState } from "react";

export const TimerDesign = () => {
  const [count, setCountDown] = useState(0);
  const CountDown = () => {
    const TimeDown = setCountDown - 1;
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "purple",
          borderRadius: "200px",
          width: "300px",
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <span style={{ fontSize: "40px", backgroundColor: "inherit" }}>
          {count}
          <button style={{ background: "inherit" }}>Add time</button>
        </span>
      </div>
    </>
  );
};
