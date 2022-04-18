import { createContext, useEffect, useReducer } from "react";
import AuthReducer from './reducer';

// TODO: Make this file typescript 
// type IState = {
//     user: {} | null,
//     fetching: boolean,
//     error: boolean,
// }

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    fetching: false,
    error: false,
};

export const AuthConetext = createContext({
    state: INITIAL_STATE,
    dispatch: () => null
});

export const AuthConetextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return (
        <AuthConetext.Provider
            value={{ state, dispatch }}
        >
            {children}
        </AuthConetext.Provider>
    )
}