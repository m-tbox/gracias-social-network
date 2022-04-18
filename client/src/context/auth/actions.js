// TODO: Make this file Typescript

export const LoginRequest = (data) => ({
    type: "LOGIN_REQUEST"
});

export const LoginSuccess = (payload) => ({
    type: "LOGIN_SUCCESS",
    payload
});

export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error
});