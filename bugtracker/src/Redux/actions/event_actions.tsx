import store from "../store";
import { SET_LOADING } from "./types/event_types";

export async function setLoadingState(status: boolean) {
    store.dispatch({
        type: SET_LOADING,
        payload: status
    })
}