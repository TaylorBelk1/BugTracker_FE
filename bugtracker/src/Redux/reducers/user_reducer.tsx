import { UserState } from '../models/user_models';
import {
    RegisterActionTypes,
    SET_USER_STATE,
    LOG_USER_OUT,
} from "../actions/types/user_types";

const initialState: UserState = {
    loggedIn: false,
    user: {
        id: 0,
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: ""
    },
    tickets: [],
    token: ""
};

export function userReducer(
    state = initialState,
    action: RegisterActionTypes
): UserState {
    switch(action.type) {
        case SET_USER_STATE:
            // added conditional on the tickets object for reusability between signup and signin
            console.log("State in reducer: ", action.payload)
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user,
                tickets: action.payload.tickets || [],
                token: action.payload.token
            }

        case LOG_USER_OUT:
            console.log("Logging user out....");
            return {
                loggedIn: false,
                user: {
                    id: 0,
                    username: "",
                    password: "",
                    first_name: "",
                    last_name: "",
                    email: ""
                },
                tickets: [],
                token: ""
            }
        default:
            return state;
    }
}
