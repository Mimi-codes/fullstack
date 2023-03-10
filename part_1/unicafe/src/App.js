import { useState } from "react"

//button component
const Button = ({onClick, text}) => {
return (
  <>
  <button type="button" onClick={onClick}>{text}</button>
  </>
)
}

//component for each feedback statistics
const StatisticsLine = ({text, value}) => {
 return (
<>
<p>{text} {value} </p>
</>
 ) 
}

//this displays the statistics of the feedback
//allStates check and returns a message if the values of other states is zero and if otherwise, it displays the feedback statistics

const Statistics = ({allStates, good, neutral, bad, text}) => {
  if(allStates.length === 0) {
return (
<p>no feedback given</p>
)
}

const allFeedback = `${good + bad + neutral}`
const average = `${(good * 1) + (neutral * 0) + (bad * -1) /3}`
const positive = `${(good)/(good + neutral + bad)} %`
  return (
    <>
    <h1>{text}</h1>
    <StatisticsLine value = {good} text = 'good' />
    <StatisticsLine value = {neutral} text = 'neutral' />
    <StatisticsLine value = {bad} text = 'bad' />
    <StatisticsLine value = {allFeedback} text = 'all' />
    <StatisticsLine value = {average} text = 'average' />
    <StatisticsLine value = {positive} text = 'positive' />
    </>
  )
}



const App = () => {
 const [good, setGood] = useState(0)
 const [neutral, setNeutral] = useState(0)
 const [bad, setBad] = useState(0)
 const [allStates, setAllStates] = useState([])

 //
//setAllStates updates the previous state of all
//allStates creates an empty array that takes in the previous value of other states and increment the values by one on every button click 

 //good button handler
 const goodHandler = () => {
  setAllStates(allStates + 1)
  setGood(good + 1)
  }
  
  //neutral button handler
  const neutralHandler = () => {
    setAllStates(allStates + 1)
    setNeutral(neutral + 1)
    }


    //bad button handler
    const badHandler = () => {
      setAllStates(allStates + 1)
      setBad(bad + 1)
      }

  return (
    <div>
<h1>give feedback</h1>
<Button onClick={goodHandler} text= 'good'/>
<Button onClick={neutralHandler} text= 'neutral'/>
<Button onClick={badHandler} text= 'bad'/>
<Statistics allStates={allStates} text = 'Statistics' good = {good} neutral = {neutral} bad = {bad} />
   </div>
  )
}

export default App
