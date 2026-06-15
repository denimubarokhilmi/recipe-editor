import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import cocktailReducer from "./reducer.ts";
import thunkMiddleware from "./thunk.ts";

const rootReducer = combineReducers({
  cocktail: cocktailReducer,
});

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunkMiddleware)
);

export default store;
