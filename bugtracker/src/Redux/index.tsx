import { combineReducers } from 'redux';
import { signInReducer } from "./reducers/signin_reducer";

const rootReducer = combineReducers({
    signIn: signInReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer