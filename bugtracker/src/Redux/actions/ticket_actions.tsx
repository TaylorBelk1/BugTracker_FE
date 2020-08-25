import axios from "axios";

import store from "../store";
import { UserId } from "../models/user_models";
import { SET_TICKET_STATE, CLEAR_TICKET_STATE } from "./types/ticket_types";

const base_url = 'https://bugtracker-be.herokuapp.com';

export async function getUserTickets(username: UserId, token: string) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    };

    await axios.post(
        `${base_url}/api/tickets/getUserTickets`,
        username, { headers }).then(res => {
            console.log("FROM TICKET_ACTION: ", res.data.ticket)
            store.dispatch({
                type: SET_TICKET_STATE,
                payload: res.data.ticket
            })
        })
}

export async function clearUserTickets() {
    store.dispatch({
        type: CLEAR_TICKET_STATE
    })
}