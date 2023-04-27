import { useReducer } from "react";
import "./App.css";
import Button from "./components/Button";
import OperationButton from "./components/OperationButton";
import {logger} from "./Reducer";
import { ACTIONS } from "./Reducer";
import { formatOperand } from "./Reducer";
import {initState, reducer} from './Reducer'

function App() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { previousOperand, currentOperand, operation } = state;

  return (
    <>
      <h1 className="title">Calculator React App</h1>
      <div className="wrapper">
        <div className="display-component">
          <div className="previous-operand">
            {formatOperand(previousOperand)}
            {operation}
          </div>
          <div className="current-operand">{formatOperand(currentOperand)}</div>
        </div>
        <div className="button-component">
          <button onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
          <button onClick={() => dispatch({ type: ACTIONS.NEG_POS })}>
            +/-
          </button>
          <button onClick={() => dispatch({ type: ACTIONS.PERCENT })}>%</button>
          <OperationButton orange operation="÷" dispatch={dispatch} />
          <Button name="7" dispatch={dispatch} />
          <Button name="8" dispatch={dispatch} />
          <Button name="9" dispatch={dispatch} />
          <OperationButton orange operation="x" dispatch={dispatch} />
          <Button name="4" dispatch={dispatch} />
          <Button name="5" dispatch={dispatch} />
          <Button name="6" dispatch={dispatch} />
          <OperationButton orange operation="-" dispatch={dispatch} />
          <Button name="1" dispatch={dispatch} />
          <Button name="2" dispatch={dispatch} />
          <Button name="3" dispatch={dispatch} />
          <OperationButton orange operation="+" dispatch={dispatch} />
          <Button span_two name="0" dispatch={dispatch} />
          <Button name="." dispatch={dispatch} />
          <button
            id="orange"
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          >
            =
          </button>
        </div>
      </div>
      <p className="author">Designed and Coded by Henry ❤️.</p>
    </>
  );
}

export default App;
