import { createStore, combineReducers } from "redux";
import { systemReducer } from './system/reducers'
import { chatReducer } from './chat/reducers'
import map from "./map";

const rootReducer = combineReducers({
  map,
  system: systemReducer,
  chat: chatReducer
});

export default createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>
