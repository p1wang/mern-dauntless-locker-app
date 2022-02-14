import { GETIMAGES } from "../constants/actionTypes";
import * as api from "../api";

export const getImages = () => async (dispatch) => {
  try {
    const { data } = await api.getImages();
    console.log(data);

    dispatch({ type: GETIMAGES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
