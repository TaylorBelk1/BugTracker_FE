import { UserState } from "../../models/user_models";

export const SET_USER_STATE = "SET_USER_STATE";
export const LOG_USER_OUT = "LOG_USER_OUT";

interface SetUserState {
    type: typeof SET_USER_STATE;
    payload: UserState;
}

interface LogUserOut {
    type: typeof LOG_USER_OUT;
}

export type RegisterActionTypes =
    SetUserState |
    LogUserOut;