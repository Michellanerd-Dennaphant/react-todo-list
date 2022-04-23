const TodoItem = (props) => (
  <div>
    <input id={"todo-item"} type={"checkbox"} value={props.checked} />
    <label for={""}>{props.label}</label>
  </div>
);

export default TodoItem;
