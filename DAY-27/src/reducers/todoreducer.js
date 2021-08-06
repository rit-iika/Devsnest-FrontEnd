const todoReducer = (state = [], action) => {
  if (action.type === "ADD_ITEM") {
    return [...state, action.payload];
  } else if (action.type === "REMOVE_ITEM") {
    return state.filter((item, index) => index !== action.payload);
  } else if (action.type === "LOAD_TODO") {
    return action.payload.slice(0, 5);
  }
  /* fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((res) => res.json())
      .then((todos) => {
        return todos;
      }); //here fetch is asyn thus code moves to return state, within the time fetch executes, thus well use thunk
    // return action.payload.slice(0, 5);
  }
  */

  return state;
};
export default todoReducer;
