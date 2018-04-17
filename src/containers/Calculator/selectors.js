export const selectCleanInput = () => state => state.CalculatorReducer.cleanInput;
export const selectFirstNumber = () => state => state.CalculatorReducer.firstNumber;
export const selectHasDotNotation = () => state => state.CalculatorReducer.hasDotNotation;
export const selectOperation = () => state => state.CalculatorReducer.operation;
export const selectResult = () => state => state.CalculatorReducer.result;