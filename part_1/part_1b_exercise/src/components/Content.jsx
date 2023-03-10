import React from 'react'

const Content = ({part}) => {
// console.log(part[0].name)
  return (
    <div>
     <p>{part[0].name} {part[0].exercises}</p>
      <p>{part[1].name} {part[1].exercises}</p>
      <p>{part[2].name} {part[2].exercises}</p>
    </div>
  )
}

export default Content