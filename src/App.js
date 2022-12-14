import InputArea from "./components/inputarea/InputArea";
import ScreenTextArea from "./components/textarea/ScreenTextArea";
import "./App.css";
import { useState } from "react";

const operators = ["+", "-", "*", "/"];
function App() {
  const [expression, setExpression] = useState("0");
  const [currentNumber, setCurrentNumber] = useState("0");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const exprLastValue = expression.slice(-1);

  const calculateExpressions = (number) => {
    //trigget on multiple decimals
    if (number === "." && currentNumber.includes(".")) return;

    //All clear
    if (number === "AC") {
      setExpression("0");
      setCurrentNumber("0");
      return;
    }

    //backspace
    if (number === "C" && currentNumber.length >= 0) {
      if (currentNumber.length === 1) {
        setCurrentNumber("0");
        return;
      }
      setCurrentNumber(currentNumber.slice(0, -1));
      return;
    }

    //%
    if (number === "%") {
      if (!currentNumber) return;
      setCurrentNumber(Number(currentNumber) / 100 + "");
      return;
    }

    //operators + - * /
    if (operators.includes(number)) {
      expression === "0"
        ? setExpression(currentNumber + number + "")
        : exprLastValue === "="
        ? setExpression(currentNumber + number + "")
        : operators.includes(exprLastValue)
        ? setExpression(expression + currentNumber + number)
        : setExpression(currentNumber + number + "");
      setCurrentNumber("0");
      return;
    }

    //equals
    if (number === "=") {
      if (!expression || expression.includes("=")) return;
      evaluateExpression(expression + currentNumber);
      setExpression(expression + currentNumber + number);
      return;
    }

    //checking last input from expression while pressing number
    if (number && exprLastValue === "=") {
      setExpression(currentNumber);
      setCurrentNumber(number + "");
      return;
    }

    //setting numbers to state
    currentNumber === "0"
      ? setCurrentNumber(number + "")
      : setCurrentNumber(currentNumber + number + "");
  };

  const evaluateExpression = (expression) => {
    if (!expression) return;
    const calculation = eval(expression).toFixed(2);
    setCurrentNumber(calculation);
    setHistory((prevState) => [expression + " = " + calculation, ...prevState]);
  };

  const historyToggleHandler = () => {
    setShowHistory((prev) => !prev);
  };

  return (
    <div className="app">
      <ScreenTextArea currentNumber={currentNumber} expression={expression} />
      <InputArea expression={calculateExpressions} />
      <div
        className={`showhistoryButton ${
          showHistory ? "historyTabOpen" : "historyTabClose"
        }`}
        onClick={historyToggleHandler}
      >
        &gt;
      </div>
      {showHistory && (
        <div className="historyTab ">
          History:
          {history.map((data, id) => (
            <p key={id}> {data}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
