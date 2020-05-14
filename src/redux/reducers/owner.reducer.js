const ownerReducer = (state = "", action) => {
    switch (action.type) {
      case "GET_OWNERS_RESPONSE":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default ownerReducer;
  