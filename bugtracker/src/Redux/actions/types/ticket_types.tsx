import { Tickets } from './../../models/ticket_models';

export const SET_TICKET_STATE = "SET_TICKET_STATE";
export const CLEAR_TICKET_STATE = "CLEAR_TICKET_STATE"

interface SetTicketState {
    type: typeof SET_TICKET_STATE;
    payload: Tickets[];
}

interface ClearTicketState {
    type: typeof CLEAR_TICKET_STATE;
}

export type RegisterActionTypes =
    SetTicketState |
    ClearTicketState;