import {
    ADD,
    CLEAR_INPUT,
    CHANGE_INPUT,
    DIVIDE,
    MULTIPLY,
    SUBTRACT
} from './constants';

export const changeInput = (number) => {
    return dispatch => {
        try {
            dispatch({
                type: CHANGE_INPUT,
                payload: result
            })
        } catch(err) {
            dispatch({
                type: 'CHANGE_INPUT_ERROR',
                payload: err
            });
        }
    }
}

export const addNumber = () => {
    return dispatch => {
        try {
            dispatch({
                type: ADD,
                payload: result
            })
        } catch(err) {
            dispatch({
                type: 'ADD_ERROR',
                payload: err
            });
        }
    }
}