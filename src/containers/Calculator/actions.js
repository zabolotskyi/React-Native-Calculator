import { Alert } from 'react-native';
import {
  CLEAR_INPUT,
  CHANGE_INPUT,
  CHANGE_OPERATION,
  ERROR,
  EVALUATE_EXPRESSION,
} from './constants';

export const handleError = (err) => dispatch => {
  dispatch({
    type: ERROR,
    payload: err,
  });
  Alert.alert('An error occurred.', 'Check out the information in the console.');
};

export const evaluateExpression = (intermediateOperationStatus, intermediateOperation) => (dispatch, getState) => {
  const state = getState();
  const operation = state.CalculatorReducer.operation;
  const operationJustChosen = state.CalculatorReducer.operationJustChosen;
  const secondNumberValid = operation ? state.CalculatorReducer.result : '';
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
      default:
        newResult = firstNumber / secondNumber;
        break;
    }
    newResult = Number(parseFloat(newResult).toPrecision(5));
    const updatedFirstNumber = intermediateOperationStatus ? String(newResult) : '';
    const updatedOperation = intermediateOperationStatus ? intermediateOperation : '';
    const updatedOperationJustChosen = intermediateOperationStatus ? true : operationJustChosen;
    try {
      dispatch({
        type: EVALUATE_EXPRESSION,
        payload: {
          result: newResult,
          cleanInput: true,
          firstNumber: updatedFirstNumber,
          operation: updatedOperation,
          operationJustChosen: updatedOperationJustChosen,
        },
      });
    } catch (err) {
      dispatch(handleError(err));
    }
  }
};

export const changeInput = (number) => (dispatch, getState) => {
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
          operationJustChosen: false,
        },
      });
    } catch (err) {
      dispatch(handleError(err));
    }
  } else {
    const result = state.CalculatorReducer.result.toString();
    const hasDotNotation = (result.indexOf('.') > -1);
    let newResult = (hasDotNotation && (number === '.')) ? result : result + number;
    if (newResult[0] === '.') {
      newResult = `0${newResult}`;
    } else if (newResult.indexOf('.') === -1) {
      newResult = String(+newResult);
    }
    try {
      dispatch({
        type: CHANGE_INPUT,
        payload: {
          result: newResult,
          operationJustChosen: false,
        },
      });
    } catch (err) {
      dispatch(handleError(err));
    }
  }
};

export const changeOperation = (operation) => (dispatch, getState) => {
  const state = getState();
  const hasOperation = !!state.CalculatorReducer.operation;
  const needToAcceptOperation = !state.CalculatorReducer.operationJustChosen;
  if (!needToAcceptOperation) {
    const newOperation = operation;
    try {
      dispatch({
        type: CHANGE_OPERATION,
        payload: {
          operation: newOperation,
        },
      });
    } catch (err) {
      dispatch(handleError(err));
    }
  } else if (hasOperation) {
    try {
      dispatch(evaluateExpression(true, operation));
    } catch (err) {
      dispatch(handleError(err));
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
          leanInput: needToCleanInput,
          firstNumber: result,
          operationJustChosen: updatedOperationJustChosen,
        },
      });
    } catch (err) {
      dispatch(handleError(err));
    }
  }
};

export const clearInput = () => (dispatch) => {
  try {
    dispatch({
      type: CLEAR_INPUT,
      payload: {
        result: '',
        firstNumber: '',
        operation: '',
      },
    });
  } catch (err) {
    dispatch(handleError(err));
  }
};
