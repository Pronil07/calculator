const calculateExpressions = (number,setCurrentNumber,setExpression,setHistory) => {
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
        : setExpression(currentNumber + number + ""); //need to modify WIP
      setCurrentNumber("0");
      return;
    }

    //equals
    if (number === "=") {
      if (!expression || expression.includes("=")) return;
      evaluateExpression(expression + currentNumber);
      setExpression(expression + currentNumber + number);

      //setHistory((prevState) => [expression + currentNumber, ...prevState]);
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

export default calculateExpressions;