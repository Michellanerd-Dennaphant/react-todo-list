import { useState } from "react";

const TodoItem = (props) => {
  const [label, setLabel] = useState(props.label);
  const [checked, setChecked] = useState(props.checked);
  const [inEdit, setInEdit] = useState(false);
  return (
    <div className={"p-0.5"}>
      <input
        className={"mr-2 scale-150 rounded-lg"}
        id={"todo-item"}
        type={"checkbox"}
        value={checked}
        onChange={(e) => {
          setChecked(e.target.value);
        }}
      />

      {inEdit ? (
        <input
          className={"w-1/2 border-2"}
          type={"text"}
          defaultValue={label}
          onChange={(e) => setLabel(e.target.value)}
          onBlur={() => setInEdit(false)}
        />
      ) : (
        <label
          className={
            "inline-block w-1/2 border-2 border-transparent hover:border-inherit"
          }
          htmlFor={"todo-item"}
          onClick={() => setInEdit(true)}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default TodoItem;
