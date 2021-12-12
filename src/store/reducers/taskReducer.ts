import { Task, TaskAction, TaskActionTypes} from "../../types/task";
import {UserActionTypes} from "../../types/user";

type TaskState = {
    // createdTask: CreatedTask | null;
    // deletedTaskId: string | null;
    tasks: Task[];
    loading: boolean,
    error:any,

};

let initialState: TaskState = {
    // createdTask: {
    //     name: undefined,
    //     createDateTime: new Date(),
    //     dateTimeExec: undefined,
    //     user_id: undefined,
    //     description: undefined,
    // },
    // deletedTaskId: null,

    tasks: [],
    loading: false,
    error:null
};
export const taskReducer = (state = initialState, action: TaskAction): TaskState => {
    switch (action.type) {
        case TaskActionTypes.IS_FETCHING_ACTION:
            return { ...state, loading: true, error:null};
        case TaskActionTypes.FETCH_TASKS_SUCCESS:
            return {...state, loading: false, tasks: action.payload};
        case TaskActionTypes.FETCH_TASKS_ERROR:
            return {...state, loading: false, tasks:[], error:action.payload};
        case TaskActionTypes.ADD_TASK:
            return {...state, tasks:[...state.tasks, action.payload]};
        case TaskActionTypes.DELETE_TASK:
            return {...state, tasks: state.tasks.filter((t) => t.id !== action.payload)};
        default:
            return state
    }
};