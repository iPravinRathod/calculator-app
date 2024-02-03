import { useState } from "react";
import * as math from "mathjs";
import "./App.css";

function App() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    setInput((prevInput) => {
      prevInput = prevInput === "0" ? "" : prevInput;
      return prevInput + value;
    });
  };

  const handleCalculate = () => {
    if (input.length < 1) {
      return true;
    }
    try {
      // const calculatedResult = eval(input); //don't use eval()-it has security issues(javascript says)
      const calculatedResult = math.evaluate(input);

      setResult(calculatedResult);
      setInput(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("0");
    setResult(0);
  };
  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
    setInput((prevInput) => {
      prevInput.slice(0, -1);
      prevInput = prevInput === "" ? "0" : prevInput;
      return prevInput;
    });
  };

  return (
    <div className="App">
      <input value={input} readOnly />
      <div className="keypad">
        <div>
          <button className="operator" onClick={() => handleClear()} onDoubleClick={() => alert("JAI SHREERAM")}>
            AC
          </button>
          <button className="operator" onClick={() => handleDelete()}>
            DEL
          </button>
          <button className="operator" onClick={() => handleButtonClick("%")}>
            %
          </button>
          <button className="operator" onClick={() => handleButtonClick("/")}>
            /
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("*")} className="operator">
            *
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")} className="operator">
            -
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("+")} className="operator">
            +
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("00")}>00</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button id="eqlBtn" onClick={() => handleCalculate()}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
