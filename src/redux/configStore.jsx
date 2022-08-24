import { combineReducers, createStore } from "redux";
import { datVeReducer } from "./reducers/datVeReducer";
import { reactFormReducer } from "./reducers/reactFormReducer";

const rootReducer = combineReducers({
  reactFormReducer,
  datVeReducer,
});

export const store = createStore(
  rootReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
