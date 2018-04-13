import {
    CLEAR_INPUT,
    CHANGE_INPUT
} from './constants';

import {
    selectResult,
    selectNeedSecondNumber
} from './selectors';

export const changeInput = (number) => {
    return dispatch => {
        const needSecondNumber = selectNeedSecondNumber();
        let result = selectResult();
        if (needSecondNumber) {
            result += number;
        }
        try {
            dispatch({
                type: CHANGE_INPUT,
                payload: result,
                needSecondNumber
            })
        } catch(err) {
            dispatch({
                type: 'CHANGE_INPUT_ERROR',
                payload: err
            });
        }
    }
}