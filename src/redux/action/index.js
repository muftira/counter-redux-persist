

export const INCREMENT_STATE = 'INCREMENT_STATE'
export const DECREMENT_STATE = 'DECREMENT_STATE'

export const incrementValue = (state) => {
    return{
        type: INCREMENT_STATE,
        payload: state
    }
}
export const decrementValue = (state) => {
    return{
        type: DECREMENT_STATE,
        payload: state
    }
}