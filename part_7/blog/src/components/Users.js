import React from "react"
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Users = () => {
  const navigate = useNavigate()
  navigate("/")
  return (
    <>
      <div>  Users  </div>
      <p>blogs created</p>
      {/* {users } */}
    </>
  )
}

export default Users