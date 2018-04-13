import {
    CLEAR_INPUT,
    CHANGE_INPUT
} from './constants';

const initialState = {
    needSecondNumber: true,
    result: ''
};

const CalculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return { ...state, result: action.payload, needSecondNumber: action.needSecondNumber };

        case CLEAR_INPUT:
            return { ...state, result: action.payload, needSecondNumber: true };

        default: 
            return state;
    }
};

export default CalculatorReducer;