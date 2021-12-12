export type User = {
    name:string;
}
export enum UserActionTypes {
    IS_FETCHING = 'IS_FETCHING',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',
}
interface IsFetchingUsersAction {
    type: UserActionTypes.IS_FETCHING;
}
interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[]
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
export type UserAction = IsFetchingUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction