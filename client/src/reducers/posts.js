import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH_BY_SEARCH,
} from "../constants/actionTypes";

const posts = (state = { state: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };
    case CREATE:
      return [...state, action.payload];
    case DELETE:
      return state.filter((post) => post._id !== action.payload);
    case LIKE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};

// const posts = (state = { posts: [] }, action) => {
//   switch (action.type) {
//     case FETCH_ALL:
//       // return action.payload;
//       return { ...state, posts: action.payload };
//     case FETCH_BY_SEARCH:
//       return { ...state, posts: action.payload };
//     case CREATE:
//       return { ...state, posts: [...state.posts, action.payload] };
//     case DELETE:
//       return {
//         ...state,
//         posts: posts.filter((post) => post._id !== action.payload),
//       };
//     case LIKE:
//       return {
//         ...state,
//         posts: posts.map((post) =>
//           post._id === action.payload._id ? action.payload : post
//         ),
//       };
//     default:
//       return state;
//   }
// };

export default posts;
