import { UserState } from './../models/signin_model';
import {
    RegisterActionTypes,
    SET_USER_STATE,
} from "../actions/types/signin_types";

const initialState: UserState = {
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

export function signInReducer(
    state = initialState,
    action: RegisterActionTypes
): UserState {
    switch(action.type) {
        case SET_USER_STATE:
            // added conditional on the tickets object for reusability between signup and signin
            console.log("State in reducer: ", action.payload)
            return {
                ...state,
                user: action.payload.user,
                tickets: action.payload.tickets || [],
                token: action.payload.token
            }
        default:
            return state;
    }
}
