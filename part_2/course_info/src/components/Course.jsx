import React from 'react'
import Content from './Content'

//course component
const Course = ({courses}) => {
  return (
    <div>
<Content courses={courses}/>
    </div>
  )
}

export default Course //rendered in App.js
