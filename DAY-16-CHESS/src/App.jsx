import "./index.css"
import odd from "./components/odd-row.jsx"
import even from "./components/even-row.jsx"
function App() {
  return (
    <div className="app">
      <odd/>
      <even/>
      <odd/>
      <even/>
      <odd/>
      <even/>
      <odd/>
      <even/>
      
    </div>
  );
}

export default App;