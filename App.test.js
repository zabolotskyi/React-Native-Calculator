import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { changeInput, changeOperation, clearInput, evaluateExpression } from './src/containers/Calculator/actions';
import mainReducer from './src/reducers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  CalculatorReducer: {
    cleanInput: false,
    firstNumber: '',
    operation: '',
    result: ''
  }
};

const calculatorTester = async (initialState, action) => {
  let store = mockStore(initialState);
  await store.dispatch(action);
  const nextState = mainReducer(initialState, store.getActions()[0]);
  return nextState;
};

describe('Input test', () => {
  it('Press 2 and 3 -> expected 23', async () => {

    let nextState = initialState;
    nextState = await calculatorTester(nextState, changeInput('2'));
    nextState = await calculatorTester(nextState, changeInput('3'));

    expect(nextState.CalculatorReducer.result).toBe('23');

  });

  it('Press 5 and C -> expected empty result', async () => {

    let nextState = initialState;
    nextState = await calculatorTester(nextState, changeInput('5'));
    nextState = await calculatorTester(nextState, clearInput());

    expect(nextState.CalculatorReducer.result).toBe('');

  });

  it('Press . and . -> expected .', async () => {

    let nextState = initialState;
    nextState = await calculatorTester(nextState, changeInput('.'));
    nextState = await calculatorTester(nextState, changeInput('.'));

    expect(nextState.CalculatorReducer.result).toBe('.');

  });
});

describe('Calculation test', () => {
  it('Adds numbers correctly: 3.2 + 6.2 -> expected 9.4', async () => {

    let nextState = initialState;
    nextState = await calculatorTester(nextState, changeInput('3'));
    nextState = await calculatorTester(nextState, changeInput('.'));
    nextState = await calculatorTester(nextState, changeInput('2'));
    nextState = await calculatorTester(nextState, changeOperation('+'));
    nextState = await calculatorTester(nextState, changeInput('6'));
    nextState = await calculatorTester(nextState, changeInput('.'));
    nextState = await calculatorTester(nextState, changeInput('2'));
    nextState = await calculatorTester(nextState, evaluateExpression());

    expect(nextState.CalculatorReducer.result).toBe(9.4);

  });

  it('Subtracts numbers correctly: 5 - 9 -> expected -4', async () => {

    let nextState = initialState;
    nextState = await calculatorTester(nextState, changeInput('5'));
    nextState = await calculatorTester(nextState, changeOperation('-'));
    nextState = await calculatorTester(nextState, changeInput('9'));
    nextState = await calculatorTester(nextState, evaluateExpression());

    expect(nextState.CalculatorReducer.result).toBe(-4);

  });

  it('Multiplies numbers correctly: 5 * 9 -> expected 45', async () => {

    let nextState = initialState;
    nextState = await calculatorTester(nextState, changeInput('5'));
    nextState = await calculatorTester(nextState, changeOperation('*'));
    nextState = await calculatorTester(nextState, changeInput('9'));
    nextState = await calculatorTester(nextState, evaluateExpression());

    expect(nextState.CalculatorReducer.result).toBe(45);

  });

  it('Divides numbers correctly: 1 / 2 -> expected 0.5', async () => {

    let nextState = initialState;
    nextState = await calculatorTester(nextState, changeInput('1'));
    nextState = await calculatorTester(nextState, changeOperation('/'));
    nextState = await calculatorTester(nextState, changeInput('2'));
    nextState = await calculatorTester(nextState, evaluateExpression());

    expect(nextState.CalculatorReducer.result).toBe(0.5);

  });
});

describe('Reducer test', () => {
  it('Check for cleanInput value', async () => {

    let nextState = initialState;
    nextState = await calculatorTester(nextState, changeInput('1'));
    nextState = await calculatorTester(nextState, changeOperation('*'));

    expect(nextState.CalculatorReducer.cleanInput).toBe(true);

  });

  it('Check for operation/firstNumber value', async () => {

    let nextState = initialState;
    nextState = await calculatorTester(nextState, changeInput('8'));
    nextState = await calculatorTester(nextState, changeOperation('/'));

    expect(nextState.CalculatorReducer.operation).toBe('/');
    expect(nextState.CalculatorReducer.firstNumber).toBe('8');

  });
});