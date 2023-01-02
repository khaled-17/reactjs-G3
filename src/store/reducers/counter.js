
const INITIAL_STATE = {

    counter: 0,
    lowcost:0,
    hightcost:0
  
  }
  
  export default function counterReducer(state = INITIAL_STATE, action) {
  
    switch (action.type) {
        
      case "SET-COUNTER":
        return { ...state, counter: action.payload }
     
        case "SET-lowcost":
        return { ...state, lowcost: action.payload }
     
        case "SET-hightcost":
        return { ...state, hightcost: action.payload }
  




      default:
        return { ...state }
    }
  
  }