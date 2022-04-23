import "./App.css";
import TodoItem from "./components/TodoItem";

const App = () => (
  <div className="container mx-auto px-2 py-2">
    <div className="border-2 px-2 py-1">
      <h2>Meine Todo Liste</h2>
      <TodoItem checked={true} label={""} />
      <TodoItem checked={true} label={""} />
      <TodoItem checked={true} label={""} />
    </div>
  </div>
);

export default App;
