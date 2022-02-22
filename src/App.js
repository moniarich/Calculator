import "./App.css";

import { useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState(undefined);
  const [secoundNumber, setSecoundNumber] = useState(undefined);
  const [symbol, setSymbol] = useState("");

  let result;
  
  let num1 = parseFloat(firstNumber);
  let num2 = parseFloat(secoundNumber);

  if (symbol === "select an operator:") {
    result = "";
  }
  if (symbol === "+") {
    result = num1 + num2;
    result = result.toFixed(4)
  } else if (symbol === "-") {
    result = num1 - num2;
    result = result.toFixed(4)
  } else if (symbol === "*") {
    result = num1 * num2;
    result = result.toFixed(4)
  } else if (symbol === "/") {
    if (num2 !==0) {
      result = num1 / num2;
      result = result.toFixed(4)
    } else if (num2 === 0) {
      result = <p className="text-red-500 text-lg">cannot be divided by zero</p>;
     }

  }
  console.log(result);

  console.log(firstNumber, num1);
  console.log(Number.isInteger(firstNumber));
  //  console.log('sss',sum)

  return (
    <div className="container mx-auto pb-40 w-1/2 bg-sky-50 my-64 pt-40 rounded-lg text-sky-900">
      <div className="ml-32 justify-center ">
        <input
          value={firstNumber}
          min="0"
          className="bg-slate-100 py-2 text-center rounded ring-2 ring-blue-500/50 hover:ring-sky-700  focus:outline-none focus:border-sky-500 focus:ring-3 focus:ring-sky-500"
          type="number"
          onChange={(e) =>
            !Number.isInteger(firstNumber) ? setFirstNumber(e.target.value) : ""
          }
        ></input>
        <select
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="text-slate-600 bg-slate-100 px-2 py-2 rounded ring-2 ring-blue-500/50 hover:ring-sky-700 text-center focus:outline-none focus:border-sky-500 focus:ring-3 focus:ring-sky-500"
        >
          <option value="select an operator">select an operator</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">*</option>
        </select>
        <input
          value={secoundNumber}
          className="bg-slate-100 py-2 text-center rounded ring-2 ring-blue-500/50 hover:ring-sky-700  focus:outline-none focus:border-sky-500 focus:ring-3 focus:ring-sky-500"
          type="number"
          min="1"
          onChange={(e) =>
            !Number.isInteger(secoundNumber)
              ? setSecoundNumber(e.target.value)
              : ""
          }
        ></input>
        <div className="ml-48 w-1/3 justify-center  pt-10">
          <p className="px-2 bg-slate-100 py-4 text-center rounded ring-2 ring-green-500/50">
            {firstNumber === "" || secoundNumber === ""
              ? result === ""
              : result}
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
