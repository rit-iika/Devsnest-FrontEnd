import { useDispatch, useSelector } from "react-redux";
import { remItem } from "../actions";
const ListTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  return (
    <div className="box2">
      {todos.map((todo, index) => (
        <div className="look" key={index}>
          <h5 style={{ display: "inline-block" }}>{todo.title}</h5>
          <button
            onClick={() => {
              dispatch(remItem(index));
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default ListTodo;
