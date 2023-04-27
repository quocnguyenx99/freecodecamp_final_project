import {ACTIONS} from './actions'
import evaluate from './evaluate';
import Big from "big-js";


// Init State
export const initState = {
  previousOperand: null,
  currentOperand: null,
  operation: null,
  overwrite: false,
};


// Reducer
export default function reducer (state, { type, payload }) {
    switch (type) {
      case ACTIONS.ADD_DIGIT:
        if (state.overwrite) {
          return {
            ...state,
            currentOperand: payload,
            overwrite: false,
          };
        }
  
        if (payload === "0" && state.currentOperand === "0") {
          return {};
        }
  
        if (payload === "." && state.currentOperand.includes(".")) {
          return state;
        }
        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload}`,
        };
      case ACTIONS.CHOOSE_OPERATION:
        if (state.currentOperand == null && state.previousOperand == null) {
          return state;
        }
  
        if (state.previousOperand == null) {
          return {
            ...state,
            operation: payload.operation,
            previousOperand: state.currentOperand,
            currentOperand: null,
          };
        }
  
        if (state.operation && state.currentOperand == null) {
          return {
            ...state,
            operation: payload.operation,
          };
        }
  
        return {
          ...state,
          previousOperand: evaluate(state),
          operation: payload.operation,
          currentOperand: null,
        };
      case ACTIONS.EVALUATE:
        if (
          state.operation == null ||
          state.currentOperand == null ||
          state.previousOperand == null
        ) {
          return state;
        }
        return {
          ...state,
          previousOperand: null,
          operation: null,
          currentOperand: evaluate(state),
          overwrite: true,
        };
      case ACTIONS.NEG_POS:
        return {
          ...state,
          currentOperand: state.currentOperand
            ? (-1 * parseFloat(state.currentOperand)).toString()
            : null,
          previousOperand: state.previousOperand
            ? (-1 * parseFloat(state.previousOperand)).toString()
            : null,
        };
      case ACTIONS.PERCENT:
        if (state.currentOperand) {
          return {
            currentOperand: Big(state.currentOperand).div(Big("100")).toString(),
          };
        }
        return {};
      case ACTIONS.CLEAR:
        return {};
  
      default:
        throw Error("Invalid action!");
    }
  }
