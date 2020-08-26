import axios from "axios";

import { UserData, SignInData } from '../models/user_models';
import store from "../store";

import { SET_USER_STATE, LOG_USER_OUT } from './types/user_types';

const base_url = 'https://bugtracker-be.herokuapp.com';

export async function registerUser(newUser: UserData) {
    await axios.post(
        `${base_url}/admin/create-admin`,
        newUser).then(res => {
            store.dispatch({
                type: SET_USER_STATE,
                payload: res.data.newUser
            })
        })
}

export async function loginUser(user: SignInData) {
    await axios.post(
        `${base_url}/admin/admin-login`,
        user).then(res => {
            store.dispatch({
                type: SET_USER_STATE,
                payload: res.data
            })
        })
}

export async function logoutUser() {
    window.localStorage.removeItem("token");
    store.dispatch({
        type: LOG_USER_OUT
    })
}