
import { LoadingState } from '../models/event_models';
import {
    SET_LOADING,
    EventActionTypes
} from '../actions/types/event_types';

const initialState: LoadingState = {
    loading: false
};

export function eventReducer(
    state = initialState,
    action: EventActionTypes
): LoadingState {
    switch(action.type) {
        case SET_LOADING:
            console.log("State in reducer: ", action.payload)
            return {
                ...state,
                loading: action.payload
            }

        default:
            return state;
    }
}
