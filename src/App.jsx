import { TimerDesign } from "./Components/Timer/Timer";
import { TodoContainer } from "./Components/TodoItems/TodoBoxs";

function App() {
  return (
    <>
      <div>
        <h1
          style={{
            display: "flex",
            alignSelf: "center",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          Timer App
        </h1>
      </div>
      <TimerDesign />
      <TodoContainer />
    </>
  );
}

export default App;
