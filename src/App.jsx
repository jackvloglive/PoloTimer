import { Clock } from "lucide-react";
import { TimerDesign } from "./Components/Timer/Timer";
import { TodoBox } from "./Components/TodoItems/TodoBoxs";
import { DrawingConatiner } from "./Components/Drawing/Drawing";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <h1>
          Timer App
          <Clock />
        </h1>
      </div>
      <TimerDesign />
      <TodoBox />
      <DrawingConatiner />
    </>
  );
}

export default App;
