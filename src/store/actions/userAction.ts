import {User, UserAction, UserActionTypes} from "../../types/user";
import {db} from "../../firebase/config";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {Task, TaskAction, TaskActionTypes} from "../../types/task";

export function fetchUsersLoading(): UserAction {
    return {
        type: UserActionTypes.IS_FETCHING,
    };
}

export const fetchUsers = (): ThunkAction<Promise<void>, {}, {}, UserAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, UserAction>): Promise<void> => {
        return new Promise<void>(async (resolve) => {
            dispatch(fetchUsersLoading());
            try {
                const userSnapshot = await db.collection("users").get();
                const users: User[] = userSnapshot.docs.map(value => value.data() as User);
                dispatch({
                    type: UserActionTypes.FETCH_USERS_SUCCESS,
                    payload: users,
                });
                resolve();
            } catch (e) {
                dispatch({
                    type: UserActionTypes.FETCH_USERS_ERROR,
                    payload: "Что-то пошло не так при загрузке пользователя"
                })
            }
        });

    }
};

export function fetchTasksLoading(): TaskAction {
    return {
        type: TaskActionTypes.IS_FETCHING_ACTION,
    };
}

export const deleteTask = (id: string ): ThunkAction<Promise<void>, {}, {}, TaskAction> => {
    return async (dispatch: any): Promise<void> => {
        return new Promise<void>(async (resolve) => {
            // dispatch(fetchTasksLoading());
            try {
                const taskSnapshot =  db.collection("tasks").doc(id).delete().then(() => {
                    console.warn("Document successfully deleted!");
                    dispatch({
                        type: TaskActionTypes.DELETE_TASK,
                        payload:id,
                    });
                    resolve();
                });
            } catch (e) {
                dispatch({
                    type: TaskActionTypes.FETCH_TASKS_ERROR,
                    payload: "Что-то пошло не так при загрузке задач",
                })
            }
        });
    }
};

export const updateTask = (task: Task): ThunkAction<Promise<void>, {}, {}, TaskAction> => {
    return async (dispatch: any): Promise<void> => {
        return new Promise<void>(async (resolve) => {
            // dispatch(fetchTasksLoading());
            console.warn("changes", task);
            try {
                  db.collection("tasks").doc(task.id).update(task).then(() => {
                    dispatch({
                        type: TaskActionTypes.UPDATE_TASK,
                        payload: task,
                    });
                    // resolve();
                });
            } catch (e) {
                console.error(e)
                dispatch({
                    type: TaskActionTypes.FETCH_TASKS_ERROR,
                    payload: "Что-то пошло не так при загрузке задач",
                })
            }
        });
    }
};

export const createTask = (task: Task): ThunkAction<Promise<void>, {}, {}, TaskAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, TaskAction>): Promise<void> => {
        return new Promise<void>(async (resolve) => {
            // dispatch(fetchTasksLoading());
            try {
                const taskSnapshot = await db.collection("tasks").add(task).then(value => {
                    console.warn("tasksssss",value);
                    const newTask = {...task, id: value.id};
                    dispatch({
                        type: TaskActionTypes.ADD_TASK,
                        payload:newTask,
                    });
                    resolve();
                });
            } catch (e) {
                dispatch({
                    type: TaskActionTypes.FETCH_TASKS_ERROR,
                    payload: "Что-то пошло не так при загрузке пользователя",
                })
            }
        });
    }
};


export const fetchAction = (): ThunkAction<Promise<void>, {}, {}, TaskAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, TaskAction>): Promise<void> => {
        return new Promise<void>(async (resolve) => {
            dispatch(fetchTasksLoading());
            try {
                const taskSnapshot = await db.collection("tasks").get();
                const tasks: Task[] = taskSnapshot.docs.map(value =>  {
                    // console.warn(value.data(), value.id);
                    const data = value.data() as Task;
                    return {...data, id:value.id}  as Task
                });
                   dispatch({
                    type: TaskActionTypes.FETCH_TASKS_SUCCESS,
                    payload:tasks,
                });
                resolve();
            } catch (e) {
                dispatch({
                    type: TaskActionTypes.FETCH_TASKS_ERROR,
                    payload: "Что-то пошло не так при загрузке пользователя",
                })
            }
        });
    }
};
