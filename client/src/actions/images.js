import { GETIMAGES } from "../constants/actionTypes";
import * as api from "../api";

export const getImageURLs = (originalURL) => async (dispatch) => {
  try {
    const { data } = await api.getImageURLs(originalURL);
    console.log(data);
    dispatch({ type: GETIMAGES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
