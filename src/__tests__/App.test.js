import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App.js";

describe("App", () => {
  test.each([
    {
      firstNumber: 7,
      secondNumber: 8,
      expectedSum: "15.00",
      sympol: "+",
    },
    {
      firstNumber: -5,
      secondNumber: 20,
      expectedSum: "15.00",
      symbol: "+",
    },
    {
      firstNumber: -2,
      secondNumber: -9.8,
      expectedSum: "7.80",
      symbol: "-",
    },
    {
      firstNumber: -2,
      secondNumber: 2,
      expectedSum: "-4.00",
      symbol: "*",
    },
    {
      firstNumber: -2,
      secondNumber: 0,
      expectedSum: "0.00",
      symbol: "*",
    },
    {
      firstNumber: 7,
      secondNumber: 0,
      expectedSum: "cannot be divided by zero",
      symbol: "/",
    },
    {
      firstNumber: 85,
      secondNumber: 6,
      expectedSum: "14.17",
      symbol: "/",
    },
  ])(
    "If firstNumber is $firstNumber and secondNumber is $secondNumber the sum paragraph should contain $expectedSum",
    ({ firstNumber, secondNumber, expectedSum, symbol }) => {
      render(<App />);
      fireEvent.change(screen.getByTestId("firstNumber"), {
        target: { value: firstNumber },
      });
      fireEvent.change(screen.getByTestId("secondNumber"), {
        target: { value: secondNumber },
      });
      fireEvent.change(screen.getByTestId("symbol"), {
        target: { value: symbol },
      });
      const sum = screen.getByTestId("sum");

      expect(sum.textContent).toEqual(expectedSum);
    }
  );
});
