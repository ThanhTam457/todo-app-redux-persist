import { createAsyncThunk,PayloadAction, createSlice } from "@reduxjs/toolkit";
import { merge } from "lodash";
import {PURGE} from 'redux-persist';

const initialState = {
    id: null,
    name: "",
    email: "",
    password: "",
    tasks: [],
    count: 0,
} as UserSliceState


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action:PayloadAction<Partial<UserSliceState>>) => {
            return merge(state, action.payload);
        },
        addTasks: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
            state.count +=1;
        },
        removeTask: (state, action: PayloadAction<string>)=>{
            const taskId = action.payload;
            state.tasks = state.tasks.filter((item)=>
            item._id !== taskId)
            state.count -=1;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(PURGE,()=>{
            return initialState;
        });
    },
});


export const { addUser, addTasks, removeTask} = userSlice.actions;
export const userReducer = userSlice.reducer;


