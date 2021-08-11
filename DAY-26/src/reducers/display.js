const display = (state = "user", action) => {
  if (action.type === "submit") {
    return "hello" + state;
  }
  return state;
};
export default display;
