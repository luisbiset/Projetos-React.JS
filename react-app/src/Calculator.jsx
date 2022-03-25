import { useState } from "react";
import "./Calculator.css";
import Button from "./components/Button";
import Display from "./components/Display";

const initialState = {
  displayValue: "0",
  display2: "2",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default function Calculator(props) {
  const [state, setState] = useState({ ...initialState });

  function clearMemory() {
    setState({ ...initialState });
  }

  function setOperation(operation) {
    const clearDisplay = state.displayValue === "0" || state.clearDisplay;
    if (operation === null && state.clearDisplay !== "0") {
      return;
    }

    setState({clearDisplay})
  }

  function addDigit(n) {
    if (n === "." && state.displayValue.includes(".")) {
      return;
    }

    if (n === "." && state.displayValue === "0") {
      return;
    }
    const clearDisplay = state.displayValue === "0" || state.clearDisplay;

    const currentValue = clearDisplay ? "" : state.displayValue;
    const displayValue = currentValue + n;
    setState({ displayValue, clearDisplay: false });
  }

  return (
    <div className="calculator">
      <Display value={state.displayValue}></Display>
      <Button label="AC" click={() => clearMemory()}></Button>
      <Button label="/"></Button>
      <Button label="7" click={(e) => addDigit(e)}></Button>
      <Button label="8" click={(e) => addDigit(e)}></Button>
      <Button label="9" click={(e) => addDigit(e)}></Button>
      <Button label="*" click={(e) => clearDisplay(e)}></Button>
      <Button label="4" click={(e) => addDigit(e)}></Button>
      <Button label="5" click={(e) => addDigit(e)}></Button>
      <Button label="6" click={(e) => addDigit(e)}></Button>
      <Button label="-"></Button>
      <Button label="1" click={(e) => addDigit(e)}></Button>
      <Button label="2" click={(e) => addDigit(e)}></Button>
      <Button label="3" click={(e) => addDigit(e)}></Button>
      <Button label="+"></Button>
      <Button label="0" click={(e) => addDigit(e)}></Button>
      <Button label="." click={(e) => addDigit(e)}></Button>
      <Button label="="></Button>
    </div>
  );
}
