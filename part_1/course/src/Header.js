import React from 'react'
//header component

const Header = (props) => {
  console.log(props)
  return (
    <>
 <h1>{props.course}</h1>
    </>
  )
}

export default Header