import { UserData, SignInData } from './../models/signin_model';

import axios from "axios";
import store from "../store";
import { SET_USER_STATE } from '../actions/types/signin_types';

const base_url = 'https://bugtracker-be.herokuapp.com';

export async function registerUser(newUser: UserData) {
    await axios.post(
        `${base_url}/admin/create-admin`,
        newUser).then(res => {
            console.log("From Action:", res)
            store.dispatch({
                type: SET_USER_STATE,
                payload: res.data
            })
        })
}

export async function loginUser(user: SignInData) {
    await axios.post(
        `${base_url}/admin/admin-login`,
        user).then(res => {
            console.log("From Action:", res);
            store.dispatch({
                type: SET_USER_STATE,
                payload: res.data
            })
        })
}