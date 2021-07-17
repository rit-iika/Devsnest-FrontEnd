//using State hook ,which returns current state of varibles
import { useState } from "react";

var Box = () => {
  var [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count += 1)); }}
      >{count}</button>
    </div>
  );
};

export default Box;
