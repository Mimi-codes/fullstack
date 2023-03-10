import React from 'react'
import Header from './Header'


//Part component
const Part = ({courses}) => {
    //the function getTotal() sums up each exercises in the courses array using .reduce() method
    const getTotal = (val) => val.reduce((s, p) => s + p.exercises, 0)
    return (
        <>
{courses.map(course => 
<div key = {course.id}>
{/* line 15 renders the header component */}
    <Header name={course.name}/>
   <div>
     {/* line 17 this maps through the parts array in courses array to display each name and exercises*/}
    {course.parts.map(item => 
    <div key = {item.id}>
   <p>{item.name} {item.exercises}</p>
   </div>
   )}
   </div>
{/* line 24 outputs the total sum of exercises */}
<h4>total of {getTotal(course.parts)} exercises</h4>
</div>
)}
        </>
    )
}

//Content component
const Content = ({courses}) => {
  return (
    <div>
        <Part courses={courses} />
    </div>
  )
}

export default Content //rendered in Course.jsx