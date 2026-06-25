import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import cocktailReducer from "./reducer.ts";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  cocktail: cocktailReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch;

export default store;
