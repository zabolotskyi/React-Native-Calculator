import {
    CLEAR_INPUT,
    CHANGE_INPUT,
    CHANGE_OPERATION,
    ERROR,
    EVALUATE_EXPRESSION
} from './constants';

const initialState = {
    cleanInput: false,
    firstNumber: '',
    hasDotNotation: false,
    needSecondNumber: true,
    operation: '',
    result: ''
};

const CalculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return { ...state, result: action.payload, cleanInput: action.cleanInput, hasDotNotation: action.hasDotNotation };

        case CHANGE_OPERATION:
            return { ...state, operation: action.payload, cleanInput: action.cleanInput, firstNumber: action.firstNumber, hasDotNotation: action.hasDotNotation };

        case CLEAR_INPUT:
            return { ...state, result: action.payload, firstNumber: '', hasDotNotation: false, operation: '' };
            
        case EVALUATE_EXPRESSION:
            return { ...state, result: action.payload, firstNumber: '', hasDotNotation: false, operation: '' }

        default: 
            return state;
    }
};

export default CalculatorReducer;