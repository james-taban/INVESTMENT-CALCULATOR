import Header from './components/Header'
import investmentImg from './assets/investment-calculator-logo.png'
import Input from './components/Input'
import { useState } from 'react'
import Results from './components/Results'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 15000,
    expectedReturn: 25000,
    duration: 5,
  })

  const inputIsValid = userInput.duration >= 1

  function handleInput(newValue, inputIdentifier) {
    setUserInput((prevValues) => {
      return {
        ...prevValues,
        [inputIdentifier]: +newValue,
      }
    })
  }
  return (
    <>
      <Header image={investmentImg} />
      <Input onChangeInput={handleInput} input={userInput} />
      {inputIsValid ? (
        <Results input={userInput} />
      ) : (
        <p class="center">Enter a duration greater than 0</p>
      )}
    </>
  )
}

export default App
