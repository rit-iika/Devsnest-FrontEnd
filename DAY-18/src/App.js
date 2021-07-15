import "./styles.css";

import Cells from "./component/cells";
function App() {
  return (
    <div className="container">
      <h4>chess-board</h4>
      <div className="board">
        <Cells />
      </div>
    </div>
  );
}

export default App;
