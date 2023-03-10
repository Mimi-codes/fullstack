import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import contactService from "./services/contacts";


const App = () => {
  const [person, setPerson] = useState([])  
  const [message, setMessage] = useState('')
 

  //fetches data from db.json
useEffect(() => {
  contactService
    .getAll()
    .then(initialContacts => {
      setPerson(initialContacts)
    })
  }, [person])

  return (
  <>
 <h1>Phonebook</h1>
 {/* <Filter person={person} /> */}
 <PersonForm person={person} setPerson={setPerson} message={message} setMessage = {setMessage}  />
 <h1>Numbers</h1>
 <Person person={person} setPerson={setPerson} message = {message} setMessage ={setMessage} />
       
  </>
  )
        }
export default App
