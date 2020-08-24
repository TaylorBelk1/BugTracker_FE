export interface UserState {
    loggedIn: boolean;
    user: UserData;
    tickets: Tickets[];
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

export interface Tickets {
    id: number;
    name: string;
    description: string;
    created_by: string;
    assigned_to: string;
    created_at: string;
}

export interface SignInData {
    username: string;
    password: string;
}

