import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { todo } from "../src/redux/slices/TodoSlice";

function App() {
  //This is for call the action method
  const dispatch = useDispatch();
  //This is for use the data that is store data in state variables
  const state = useSelector((state) => state);
  if (state.todo.isLoading) {
    return <h1>Loading......</h1>;
  }
  return (
    <div className="App">
      <button onClick={(e) => dispatch(todo())}>Fetch data</button>
      <div className="products-container">
        <ul>
          {state.todo.data &&
            state.todo.data.map((e) => (
              <li key={e.id}>
                <span>{e.category}</span>
                <img
                  src={e.imageUrl}
                  alt={e.title}
                  style={{ width: "200px" }}
                />
                <span>{e.title}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
