import { Alert } from 'react-native';
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
            const newResult = number;
            try {
                dispatch({
                    type: CHANGE_INPUT,
                    payload: {
                        result: newResult,
                        cleanInput: false,
                        operationJustChosen: false
                    }
                });
            } catch(err) {
                dispatch({
                    type: ERROR,
                    payload: err
                });
            }
        } else {
            const result = state.CalculatorReducer.result.toString();
            const hasDotNotation = (result.indexOf('.') > -1);
            const newResult = (hasDotNotation && (number === '.')) ? result : result + number;
            try {
                dispatch({
                    type: CHANGE_INPUT,
                    payload: {
                        result: newResult,
                        operationJustChosen: false
                    }
                });
            } catch(err) {
                dispatch({
                    type: ERROR,
                    payload: err
                });
                Alert.alert('An error occurred.', 'Check out the information in the console.');
            }
        }
    }
}

export const changeOperation = (operation) => {
    return (dispatch, getState) => {
        const state = getState();
        const hasOperation = !!state.CalculatorReducer.operation;
        const needToAcceptOperation = !state.CalculatorReducer.operationJustChosen;
        if (!needToAcceptOperation) {
            const newOperation = operation;
            try {
                dispatch({
                    type: CHANGE_OPERATION,
                    payload: {
                        operation: newOperation
                    }
                });
            } catch(err) {
                dispatch({
                    type: ERROR,
                    payload: err
                });
                Alert.alert('An error occurred.', 'Check out the information in the console.');
            }
        } else if (hasOperation) {
            try {
                const firstNumber = state.CalculatorReducer.firstNumber;
                const secondNumber = state.CalculatorReducer.result;
                let newResult;
                switch (state.CalculatorReducer.operation) {
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
                dispatch({
                    type: EVALUATE_EXPRESSION,
                    payload: {
                        result: Number(parseFloat(newResult).toPrecision(5)),
                        cleanInput: true,
                        firstNumber: String(parseFloat(newResult).toPrecision(5)),
                        operation: operation,
                        operationJustChosen: true
                    }
                });
            } catch(err) {
                dispatch({
                    type: ERROR,
                    payload: err
                });
                Alert.alert('An error occurred.', 'Check out the information in the console.');
            }
        } else {
            const result = state.CalculatorReducer.result.toString();
            const hasDotNotation = (result.indexOf('.') > -1);
            const firstNumberValid = (hasDotNotation && (result.length > 1)) || (!hasDotNotation && result);
            const newOperation = firstNumberValid ? operation : '';
            const updatedOperationJustChosen = !!newOperation;
            const needToCleanInput = !!newOperation;
            try {
                dispatch({
                    type: CHANGE_OPERATION,
                    payload: {
                        operation: newOperation,
                        cleanInput: needToCleanInput,
                        firstNumber: result,
                        operationJustChosen: updatedOperationJustChosen
                    }
                });
            } catch(err) {
                dispatch({
                    type: ERROR,
                    payload: err
                });
                Alert.alert('An error occurred.', 'Check out the information in the console.');
            }
        }
    }
}

export const clearInput = () => {
    return dispatch => {
        try {
            dispatch({
                type: CLEAR_INPUT,
                payload: {
                    result: '',
                    firstNumber: '',
                    operation: ''
                }
            });
        } catch(err) {
            dispatch({
                type: ERROR,
                payload: err
            });
            Alert.alert('An error occurred.', 'Check out the information in the console.');
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
                    payload: {
                        result: Number(parseFloat(newResult).toPrecision(5)),
                        cleanInput: true,
                        firstNumber: '',
                        operation: ''
                    }
                });
            } catch(err) {
                dispatch({
                    type: ERROR,
                    payload: err
                });
                Alert.alert('An error occurred.', 'Check out the information in the console.');
            }
        }
    }
}