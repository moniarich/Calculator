import "./App.css";

import { useState } from "react";

const reg = /^-?\d*\.?\d*$/;

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secoundNumber, setSecoundNumber] = useState("");
  const [symbol, setSymbol] = useState("+");
  

  const calculate = () => {
    if (firstNumber === "" || secoundNumber === "") {
      return "";
    }
    if (symbol === "select an operator") {
      return "";
    }

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secoundNumber);

    if (symbol === "+") {
      return (num1 + num2).toFixed(4);
    } else if (symbol === "-") {
      return num1 - num2;
    } else if (symbol === "*") {
      return num1 * num2;
    } else if (symbol === "/") {
      return num1 / num2;
    }
  };

  const isNumber = (value) => {
    return new RegExp(reg).test(value);
  };

  const onSecondNumberChange = (e) => {
    if (!isNumber(e.target.value)) {
      return;
    }

    setSecoundNumber(e.target.value);
  };

const onFirstNumberChange =(e) => {
    if (!isNumber(e.target.value)) {
      return;
    }

    setFirstNumber(e.target.value);
  }


  return (
    <div className="container mx-auto pb-40 w-1/2 bg-sky-50 my-64 pt-40 rounded-lg text-sky-900">
      <div className="mx-auto w-2/3 justify-center ">
        <input
          value={firstNumber}
          className="bg-slate-100 py-2 text-center rounded ring-2 ring-blue-500/50 hover:ring-sky-700  focus:outline-none focus:border-sky-500 focus:ring-3 focus:ring-sky-500"
          type="text"
          onChange={(e) => onFirstNumberChange(e)}
        ></input>
        <select
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="text-slate-600 bg-slate-100 px-2 py-2 rounded ring-2 ring-blue-500/50 hover:ring-sky-700 text-center focus:outline-none focus:border-sky-500 focus:ring-3 focus:ring-sky-500"
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">*</option>
        </select>
        <input
          value={secoundNumber}
          className="bg-slate-100 py-2 text-center rounded ring-2 ring-blue-500/50 hover:ring-sky-700  focus:outline-none focus:border-sky-500 focus:ring-3 focus:ring-sky-500"
          type="number"
          onChange={(e) => onSecondNumberChange(e)}
        ></input>
        <div className="ml-48 w-1/3 justify-center  pt-10">
          <p className="px-2 bg-slate-100 py-4 text-center rounded ring-2 ring-green-500/50">
            {symbol === "/" && secoundNumber === "0" ? (
              <p className="text-red-500 text-lg">cannot be divided by zero</p>
            ) : (
              calculate()
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
