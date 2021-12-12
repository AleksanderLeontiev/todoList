import {UserAction, UserActionTypes, User} from "../../types/user";

type UserState = {
    users: User[],
    loading: boolean,
    error: any
};

let initialState: UserState = {
    users: [],
    loading: false,
    error: null,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.IS_FETCHING:
            return {...state, loading: true, error: null};
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {...state, loading: false, users: action.payload};
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, loading: false, error: action.payload, users: []};
        default:
            return state
    }
};