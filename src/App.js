import "./App.css";
import TodoItem from "./components/TodoItem";

const App = () => (
  <div className="container">
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Hallo Welt</h2>
      </div>
      <div className="card-body">
        <p className="card-text">Hello World</p>
        <TodoItem checked={true} label={"Hello World"} />
        <TodoItem checked={true} label={"Hello World"} />
        <TodoItem checked={true} label={"Hello World"} />
      </div>
    </div>
  </div>
);

export default App;
