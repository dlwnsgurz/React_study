import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import {useState} from "react"

function App() {

  function handleChange(inputIdentifier, newValue){
    setUserInput((userInput) => {
        return {...userInput,
            [inputIdentifier] : +newValue,
        }
    })
}
  const [userInput , setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const isUserInputValid = userInput.duration > 0

  return (
    <>
      <Header/>
      <UserInput onChange = {handleChange} userInput = {userInput}/>
      {!isUserInputValid && <p className = "center">Please enter a duration greater than 0.</p>}
      {isUserInputValid && <Results userInput = {userInput}/>}
    </>
    
  )
}

export default App
