import { useEffect, useState } from "react";

export const TimerDesign = () => {
  const [initialTime, setInitialTime] = useState(1800); // 25 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Timer Logic
  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  // Format seconds into MM:SS
  const formatTime = (totalSeconds) => {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div
      style={{
        backgroundColor: "#2c3e50",
        borderRadius: "50%",
        width: "300px",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        flexDirection: "column",
        boxShadow: "0 0 20px rgba(0,0,0,0.3)",
        color: "#ecf0f1",
        fontFamily: "monospace",
      }}
    >
      {/* Time Display or Editable Input */}
      <div
        onClick={() => setIsEditing(true)}
        style={{ fontSize: "48px", cursor: "pointer", marginBottom: "20px" }}
      >
        {isEditing ? (
          <input
            type="number"
            value={Math.floor(timeLeft / 60)}
            onChange={(e) => {
              const newTime = Number(e.target.value) * 60;
              setTimeLeft(newTime);
            }}
            onBlur={() => {
              setIsEditing(false);
              setInitialTime(timeLeft);
            }}
            style={{
              fontSize: "40px",
              width: "80px",
              textAlign: "center",
              border: "none",
              borderRadius: "10px",
              padding: "5px",
            }}
          />
        ) : (
          formatTime(timeLeft)
        )}
      </div>

      {/* Start/Pause Button */}
      <button
        onClick={() => setIsRunning((prev) => !prev)}
        style={{
          backgroundColor: "#27ae60",
          border: "none",
          borderRadius: "10px",
          padding: "10px 20px",
          color: "white",
          marginBottom: "10px",
          cursor: "pointer",
        }}
      >
        {isRunning ? "Pause" : "Start"}
      </button>

      {/* Reset Button */}
      <button
        onClick={() => {
          setTimeLeft(initialTime);
          setIsRunning(false);
        }}
        style={{
          backgroundColor: "#c0392b",
          border: "none",
          borderRadius: "10px",
          padding: "10px 20px",
          color: "white",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
};
