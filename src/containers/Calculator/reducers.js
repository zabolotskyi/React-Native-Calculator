import {
    ADD,
    CLEAR_INPUT,
    CHANGE_INPUT,
    DIVIDE,
    MULTIPLY,
    SUBTRACT
} from './constants';

const initialState = {
    result: ''
};

const CalculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, result: action.payload };

        case CLEAR_INPUT:
            return { ...state, result: action.payload };

        case DIVIDE:
            return { ...state, result: action.payload };

        case MULTIPLY:
            return { ...state, result: action.payload };

        case SUBTRACT:
            return { ...state, result: action.payload };

        default: 
            return state;
    }
};

export default CalculatorReducer;