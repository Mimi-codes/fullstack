/* eslint-disable */
import React from 'react'
//message passed as a prop from app.js
const Notification = ({message}) => {
const notificationStyle = {
        color: 'red',
        border: '2px solid red',
      padding: '0.5rem',
      marginBottom: '1rem',
        background: 'lightgray'
}
    if (message === null) {
    return null
}

return (
    <div style={notificationStyle}>
{message}
    </div>
  )
}

export default Notification 