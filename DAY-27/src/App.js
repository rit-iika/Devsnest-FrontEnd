import "./styles.css";
import AddTodo from "./components/addTodo";
import ListTodo from "./components/listTodo";
function App() {
  return (
    <div className="App">
      <h1>your todo list</h1>

      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;
