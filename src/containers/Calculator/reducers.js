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
    operation: '',
    operationJustChosen: false,
    result: ''
};

const CalculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return { ...state, ...action.payload };

        case CHANGE_OPERATION:
            return { ...state, ...action.payload };

        case CLEAR_INPUT:
            return { ...state, ...action.payload };
            
        case EVALUATE_EXPRESSION:
            return { ...state, ...action.payload };

        default: 
            return state;
    }
};

export default CalculatorReducer;