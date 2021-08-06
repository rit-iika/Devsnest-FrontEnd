import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, loadTodo } from "../actions";
const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="box1">
      <input
        type="text"
        placeholder="add a todo.."
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(
            addItem({
              title: item,
              done: false
            }),
            setItem("")
          );
        }}
      >
        add
      </button>
      <br />
      {item}
      <button
        onClick={() => {
          dispatch(loadTodo());
        }}
      >
        load todo tasks
      </button>
    </div>
  );
};
export default AddTodo;
