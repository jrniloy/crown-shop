const INITIAL_STATE = {
  currentUser: null,
  // null is considered a value
};

/// NOTE: Every signle reducer gets every signle action that ever gets fired. even if those action are not related to this reducer.

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
