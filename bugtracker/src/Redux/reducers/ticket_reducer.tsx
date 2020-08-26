import {
    RegisterActionTypes,
    SET_TICKET_STATE,
    CLEAR_TICKET_STATE,
} from "../actions/types/ticket_types";
import { TicketState } from '../models/ticket_models';

const initialState: TicketState = {
    tickets: []
};

export function ticketReducer(
    state = initialState,
    action: RegisterActionTypes
): TicketState {
    switch(action.type) {
        case SET_TICKET_STATE:
            console.log("State in reducer: ", action.payload)
            return {
                tickets: [...action.payload]
            }

        case CLEAR_TICKET_STATE:
            return {
                tickets: []
            }

        default:
            return state;
    }
}
