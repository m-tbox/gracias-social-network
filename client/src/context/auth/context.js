import { createContext, useReducer } from "react";
import AuthReducer from './reducer';

// TODO: Make this file typescript 
// type IState = {
//     user: {} | null,
//     fetching: boolean,
//     error: boolean,
// }

const INITIAL_STATE = {
    user: null,
    fetching: false,
    error: false,
};

export const AuthConetext = createContext({
    state: INITIAL_STATE,
    dispatch: () => null
});

export const AuthConetextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthConetext.Provider
            value={{ state, dispatch }}
        >
            {children}
        </AuthConetext.Provider>
    )
}