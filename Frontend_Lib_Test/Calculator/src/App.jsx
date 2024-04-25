import { useState } from 'react';
import './App.css';
import Button from './Button';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('0');

  const handleInput = (value) => {
    // Handle input validation and updating the input state
    setInput((prevInput) => {
      if (prevInput === '0' && value !== '.') {
        return value;
      } else if (value === '.' && prevInput.includes('.')) {
        return prevInput;
      } else {
        return prevInput + value;
      }
    });
  };

  const handleClear = () => {
    // Clear input and output
    setInput('');
    setOutput('0');
  };

  const handleCalculate = () => {
    try {
      // Evaluate the input expression and update the output state
      const result = eval(input);
      setOutput(result.toString());
    } catch (error) {
      // Handle syntax errors or invalid input
      setOutput('Error');
    }
  };

  return (
    <div className="calculator">
      <div id="display">{output}</div>
      <div className="buttons">
        <Button id="clear" onClick={handleClear}>AC</Button>
        <Button id="divide" onClick={() => handleInput('/')}>/</Button>
        <Button id="multiply" onClick={() => handleInput('*')}>*</Button>
        <Button id="seven" onClick={() => handleInput('7')}>7</Button>
        <Button id="eight" onClick={() => handleInput('8')}>8</Button>
        <Button id="nine" onClick={() => handleInput('9')}>9</Button>
        <Button id="subtract" onClick={() => handleInput('-')}>-</Button>
        <Button id="four" onClick={() => handleInput('4')}>4</Button>
        <Button id="five" onClick={() => handleInput('5')}>5</Button>
        <Button id="six" onClick={() => handleInput('6')}>6</Button>
        <Button id="add" onClick={() => handleInput('+')}>+</Button>
        <Button id="one" onClick={() => handleInput('1')}>1</Button>
        <Button id="two" onClick={() => handleInput('2')}>2</Button>
        <Button id="three" onClick={() => handleInput('3')}>3</Button>
        <Button id="zero" onClick={() => handleInput('0')}>0</Button>
        <Button id="decimal" onClick={() => handleInput('.')}>.</Button>
        <Button id="equals" onClick={handleCalculate}>=</Button>
      </div>
    </div>
  );
}

export default App;