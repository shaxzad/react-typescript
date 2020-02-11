import { FETCH_TODOS, CREATE_TODOS } from "../actions/types";
const initialState = {
  items: [],
  item: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        items: action.payload
      };
    case CREATE_TODOS:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
