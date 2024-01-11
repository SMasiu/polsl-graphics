import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { BoardState, boardReducer } from "./board.store";

export interface State {
  board: BoardState;
}

const middlewares = [thunk];
const enhancers = applyMiddleware(...middlewares);

export const reducers = combineReducers({ board: boardReducer });
export const store = createStore(reducers, enhancers);
