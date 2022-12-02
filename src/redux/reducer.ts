import { combineReducers, createStore } from "redux";
import writeData from "./writeData";

const rootReducer = combineReducers({
  writeData
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

export const store = createStore(rootReducer);