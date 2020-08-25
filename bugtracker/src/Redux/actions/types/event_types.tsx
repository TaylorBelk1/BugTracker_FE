export const SET_LOADING = "SET_LOADING";

interface SetLoading {
    type: typeof SET_LOADING;
    payload: boolean;
}

export type EventActionTypes = SetLoading;