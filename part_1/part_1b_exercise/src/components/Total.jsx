import React from 'react'

const Total = ({part}) => {
  console.log(part[0].exercises)
  return (
    <div> 
      <p>Total {part[0].exercises + part[1].exercises + part[2].exercises}</p>
    </div>
  )
}

export default Total