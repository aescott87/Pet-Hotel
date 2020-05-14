const historyReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_HISTORY_RESPONSE":
      return action.payload;
    default:
      return state;
  }
};

export default historyReducer;
