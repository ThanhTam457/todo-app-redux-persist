import { combineReducers, AnyAction, Reducer } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./userSlice";

export const rootReducer = combineReducers({
  user: userReducer,
});

const appReducer: Reducer = (state: RootState, action: AnyAction)=>{
  if(action.type === 'user/clearUser'){
    storage.removeItem('persist:root')
    state = {} as RootState
  }
  return userReducer(state, action)
}

export default appReducer
export type RootState = ReturnType<typeof userReducer>