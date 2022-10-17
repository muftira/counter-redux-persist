import { INCREMENT_STATE, DECREMENT_STATE } from "../action/index";

const initialState = {
    count : 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT_STATE:
        return{
            ...state,
            count: state.count + 1
        }
        case DECREMENT_STATE:
            return{
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}

export default reducer