import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log(data);

    dispatch({ type: AUTH, payload: data });
    navigate("/");
  } catch (error) {
    alert("Either your password or email is wrong, please try again!");
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, payload: data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
