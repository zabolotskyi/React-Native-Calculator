import {
    CLEAR_INPUT,
    CHANGE_INPUT,
    CHANGE_OPERATION,
    ERROR,
    EVALUATE_EXPRESSION
} from './constants';

export const changeInput = (number) => {
    return (dispatch, getState) => {
        const state = getState();
        const needToCleanInput = state.CalculatorReducer.cleanInput;
        if (needToCleanInput) {
            const updatedHasDotNotation = (number === '.');
            const newResult = number;
            try {
                dispatch({
                    type: CHANGE_INPUT,
                    payload: newResult,
                    cleanInput: false,
                    hasDotNotation: updatedHasDotNotation
                });
            } catch(err) {
                dispatch({
                    type: ERROR,
                    payload: err
                });
            }
        } else {
            const result = state.CalculatorReducer.result;
            const hasDotNotation = state.CalculatorReducer.hasDotNotation;
            const updatedHasDotNotation = hasDotNotation || (number === '.');
            const newResult = (hasDotNotation && (number === '.')) ? result : result + number;
            try {
                dispatch({
                    type: CHANGE_INPUT,
                    payload: newResult,
                    hasDotNotation: updatedHasDotNotation
                });
            } catch(err) {
                dispatch({
                    type: ERROR,
                    payload: err
                });
                alert('An error occurred. Check out the information in the console.');
            }
        }
    }
}

export const changeOperation = (operation) => {
    return (dispatch, getState) => {
        const state = getState();
        const result = state.CalculatorReducer.result;
        const hasDotNotation = state.CalculatorReducer.hasDotNotation;
        const firstNumberValid = (!!hasDotNotation && (result.length > 1)) || (!hasDotNotation && result);
        const newOperation = firstNumberValid ? operation : '';
        const needToCleanInput = !!newOperation;
        const updatedHasDotNotation = !!newOperation ? false : hasDotNotation;
        try {
            dispatch({
                type: CHANGE_OPERATION,
                payload: newOperation,
                cleanInput: needToCleanInput,
                firstNumber: result,
                hasDotNotation: updatedHasDotNotation
            });
        } catch(err) {
            dispatch({
                type: ERROR,
                payload: err
            });
            alert('An error occurred. Check out the information in the console.');
        }
    }
}

export const clearInput = () => {
    return dispatch => {
        const newResult = '';
        try {
            dispatch({
                type: CLEAR_INPUT,
                payload: newResult
            });
        } catch(err) {
            dispatch({
                type: ERROR,
                payload: err
            });
            alert('An error occurred. Check out the information in the console.');
        }
    }
}

export const evaluateExpression = () => {
    return (dispatch, getState) => {
        const state = getState();
        const operation = state.CalculatorReducer.operation;
        const secondNumberValid = !!operation ? state.CalculatorReducer.result : '';
        const needToEvaluate = !!secondNumberValid;
        const firstNumber = state.CalculatorReducer.firstNumber;
        const secondNumber = state.CalculatorReducer.result;
        if (needToEvaluate) {
            let newResult;
            switch (operation) {
                case '+':
                    newResult = +firstNumber + +secondNumber;
                    break;
                case '-':
                    newResult = firstNumber - secondNumber;
                    break;
                case '*':
                    newResult = firstNumber * secondNumber;
                    break;
                case '/':
                    newResult = firstNumber / secondNumber;
                    break;
            }
            try {
                dispatch({
                    type: EVALUATE_EXPRESSION,
                    payload: Number(parseFloat(newResult).toPrecision(5))
                });
            } catch(err) {
                dispatch({
                    type: ERROR,
                    payload: err
                });
                alert('An error occurred. Check out the information in the console.');
            }
        }
    }
}