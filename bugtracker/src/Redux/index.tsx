import { combineReducers } from 'redux';
import { userReducer } from "./reducers/user_reducer";
import { ticketReducer } from './reducers/ticket_reducer';
import { eventReducer } from './reducers/event_reducer';

const rootReducer = combineReducers({
    user: userReducer,
    tickets: ticketReducer,
    loading: eventReducer
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer