export default function evaluate({
  previousOperand,
  currentOperand,
  operation,
}) {
  // convert currentOperand and previousOperand with parseFloat
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "x":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
    default:
      throw Error("Unknown Operand");
  }
  return computation.toString();
}
