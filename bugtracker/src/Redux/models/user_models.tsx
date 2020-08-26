export interface UserState {
    loggedIn: boolean;
    user: UserData;
    token: string;
}

export interface UserData {
    id?: number;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    email: string;
}

export interface SignInData {
    username: string;
    password: string;
}

export interface UserId {
    username: string;
}

