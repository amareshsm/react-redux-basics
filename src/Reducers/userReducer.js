const  userReducer = (state = {
    name: 'amr',
    age: 21
  }, action) => {
  
    switch (action.type) {
        case "SET_NAME_FULFILLED":
            state = {
              ...state,
                name:action.payload
            }
            break;
    //   case "SET_NAME":
    //     state = {
    //       ...state,
    //         name:action.payload
    //     }
        break;
      case "SET_AGE":
        state = {
          ...state,
          age: action.payload
        }
        break;
    }
    return state;  //reducer should return a state.
  }
  
export default userReducer;