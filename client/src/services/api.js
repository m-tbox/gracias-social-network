// TODO: Make this file Typescript


import axios from "axios";
import { LOGIN } from "../constants";

export const callLoginApi = async (data, dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" });
    try {
        let apiURL = `${LOGIN}`;
        const res = await axios.post(apiURL, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
            }
        });

        console.log(res.data);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

        if (res.data?.errorMsg) {
            alert(res.data?.errorMsg);
        }
    } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
};