const mathReducer = (state = {
    result: 1,
    lastValues: [10,20],
  
  }, action) => {
    switch (action.type) {
      case "ADD":
        state = {
          ...state,
          result: state.result + action.payload,
          lastValues: [...state.lastValues, action.payload]
        }
        break;
      case "SUBTRACT":
        state = {
          ...state,
          result: state.result - action.payload,
          lastValues: [...state.lastValues, action.payload]
        }
        break;
    }
    return state;  //reducer should return a state.
  }
  

export default mathReducer;