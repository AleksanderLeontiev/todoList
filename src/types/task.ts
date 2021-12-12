import {UserActionTypes} from "./user";

export type Task = {
    // createDateTime: Date;
    // dateTimeExec?: Date;
    description?: string;
    name: string;
    id: string;
    }
// export type CreatedTask = {
//     createDateTime?: Date;
//     dateTimeExec?: Date;
//     description?: string;
//     name?: string;
//     user_id?: string;
// }
export enum TaskActionTypes{
    DELETE_TASK = "DELETE_TASK",
    ADD_TASK = "ADD_TASK",
    IS_FETCHING_ACTION = "IS_FETCHING",
    FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
    FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR",
    // CHANGE_TASK_NAME = "CHANGE_TASK_NAME",
    TASKS = "TASKS",
}

interface DeleteTask {
    type:TaskActionTypes.DELETE_TASK;
    payload:string;
}

// export const deleteTodo = (id: string): DeleteTask => {
//     return {
//         type: TaskActionTypes.DELETE_TASK,
//         id
//     };
// };

interface IsFetchingTasksAction {
    type: TaskActionTypes.IS_FETCHING_ACTION;
}
interface FetchTasksSuccessAction {
    type: TaskActionTypes.FETCH_TASKS_SUCCESS;
    payload: Task[]
}
//  interface ChangeTaskNameAction {
//     type:TaskActionTypes.CHANGE_TASK_NAME;
//     payload: string;
// }
interface FetchTasksErrorAction {
    type: TaskActionTypes.FETCH_TASKS_ERROR;
    payload: string;
}
interface AddTask {
    type:TaskActionTypes.ADD_TASK;
    payload: Task;
}
export type TaskAction = DeleteTask | AddTask | IsFetchingTasksAction
    | FetchTasksErrorAction | FetchTasksSuccessAction;
