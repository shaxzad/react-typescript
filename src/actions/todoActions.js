import { FETCH_TODOS, CREATE_TODOS } from "./types";

export const fectchTodos = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(todos =>
      dispatch({
        type: FETCH_TODOS,
        payload: todos
      })
    );
};

export const createTodos = todoData => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(todoData)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: CREATE_TODOS,
        payload: todoData
      })
    );
};
