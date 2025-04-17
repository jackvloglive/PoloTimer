export const TodoContainer = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          border: "2px solid red",
          margin: "20px",
          padding: "20px",
        }}
      >
        <div>
          <h1>catgloiry1</h1>
          <div>
            <TodoBox />
          </div>
          <h1>catgloiry2</h1>
          <div>
            <TodoBox />
          </div>
          <h1>catgloiry3</h1>
          <div>
            <TodoBox />
          </div>
        </div>
      </div>
    </>
  );
};

export const TodoBox = () => {
  return (
    <>
      <div>
        <input type="text" />
      </div>
    </>
  );
};
