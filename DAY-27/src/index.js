import { StrictMode } from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";

import App from "./App";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
