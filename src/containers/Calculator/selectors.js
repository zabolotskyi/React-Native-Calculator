export const selectCleanInput = () => state => state.CalculatorReducer.cleanInput;
export const selectFirstNumber = () => state => state.CalculatorReducer.firstNumber;
export const selectOperation = () => state => state.CalculatorReducer.operation;
export const selectOperationJustChosen = () => state => state.CalculatorReducer.operationJustChosen;
export const selectResult = () => state => state.CalculatorReducer.result;
