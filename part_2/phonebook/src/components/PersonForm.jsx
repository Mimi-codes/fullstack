import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import contactService from '../services/contacts'
import Notification from './Notification'

const PersonForm = ({person, setPerson, message, setMessage}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const newObject = {
      newName: newName,
      newNumber: newNumber,
      id: person.length + 1,
    }

    //checks if a name exists and prevents addition of the name by alerting the user 
    //it also checks if number exists and alerts the user whether to update it with the new value or not
    //displays message after rendering
    const contactExists =  person.find((item) => item.newName === newObject.newName && item.newNumber !== newObject.newNumber)

if(contactExists) {
  alert (`${newObject.newName} is already added to phone book, replace the old number with a new one?`)
  contactService
  .update(contactExists.id, newObject)
  .then(newObject => {
    const newContact = person.filter(item => item.id !== newObject.id)
    setPerson([...newContact, newObject])
  })
  setNewName('')
  setNewNumber('')

}else {
  contactService
  .create(newObject)
  .then(newObject => {
    setPerson((item) => [...item, newObject] )
    setMessage(`${newObject.newName} is added`)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }) 
   .catch(error => {
console.log(error)
  })
  setNewName('')
  setNewNumber('')
  }
}

//event handler for name input
  const handleNameChange = (e) => {
setNewName(e.target.value)
  }

  //event handler for number input
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
      }

      //this fetches the data saved in db.json
      useEffect(() => {
        axios
        .get('http://localhost:3001/persons')
        .then(response => {
          setPerson(response.data)
        })
      }, [])

  return (
    <>
     <form onSubmit={handleSubmit}>
          <div>
            <h1>add a new</h1>
            <Notification message = {message}/>
            name: <input type='text' value = {newName} onChange={handleNameChange} />
          </div>

          <div>
            number: <input type='number' value = {newNumber} onChange={handleNumberChange} />
          </div>
        
          <div>
            <button type='submit'>add</button>
          </div>
        </form>
    </>
  )
}

export default PersonForm