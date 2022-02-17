import { GETIMAGES } from "../constants/actionTypes";

const images = (images = [], action) => {
  switch (action.type) {
    case GETIMAGES:
      return action.payload;
    default:
      return images;
  }
};

export default images;
