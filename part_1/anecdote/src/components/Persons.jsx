import React, {useState} from "react"

const names = [
    { 
      id: 1,
      content: 'Arto Hellas',
     }
  ]

//this maps the data in names array
const Persons = ({ name }) => {
    const [persons, setPersons] = useState(names) 
    return (
        <>
      {names.map(item => 
        <p key={item.id}>{item.content}</p>
      )}
     </>
    )
  }
  
  export default Persons