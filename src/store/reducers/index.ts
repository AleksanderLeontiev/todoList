import { combineReducers} from "redux"
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";
import {taskReducer} from "./taskReducer";

export const rootReducer = combineReducers({
    userReducer: userReducer,
    todo: todoReducer,
    taskReducer:taskReducer,
});

export type RootState = ReturnType<typeof rootReducer>

