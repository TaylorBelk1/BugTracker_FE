import { UserState } from "../../models/signin_model";

export const SET_USER_STATE = "SET_USER_STATE";

interface SetUserState {
    type: typeof SET_USER_STATE;
    payload: UserState;
}

export type RegisterActionTypes = SetUserState;