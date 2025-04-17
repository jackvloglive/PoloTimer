import { Clock } from "lucide-react";
import { TimerDesign } from "./Components/Timer/Timer";
import { TodoContainer } from "./Components/TodoItems/TodoBoxs";

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
      <TodoContainer />
    </>
  );
}

export default App;
