import { useState } from "react";
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import ResultTable from "./Components/ResultTable";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const isValidInput = userInput.duration >= 1;
  function handleInputChange(key, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [key]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onInputChange={handleInputChange} userInput={userInput} />
      {isValidInput ? (
        <ResultTable input={userInput} />
      ) : (
        <p className="center">Please enter a positive duration</p>
      )}
    </>
  );
}

export default App;
