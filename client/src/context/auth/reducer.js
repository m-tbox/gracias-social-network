// TODO: Make this file Typescript

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        user: null,
        fetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        fetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        fetching: false,
        error: action.payload,
      };
    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          following: [...state.user.following, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.filter(
            (friend) => friend.id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;