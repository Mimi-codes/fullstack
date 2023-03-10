import contactService from "../services/contacts"

const Person = ({ person, setPerson, setMessage}) => { 
//handles the deletion of values
  const handleDelete = (id) => {
    const people = person.find(p => p.id === id)
    const confirmDelete = window.confirm(`Delete ${people.newName}?`)
  if(confirmDelete) {
    contactService
    .remove(id)
    .then(() => {
        setPerson(person.filter(p => p.id !== id))
        setMessage(`Information of ${people.newName} has already been removed from server`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
     // handles the error
     .catch(error => {
      console.log(error)
    })
    }
  
     }

  return (
    <>
    {person.map(item => 
        <p key = {item.id}>
          {item.name || item.newName} {item.number || item.newNumber}
          <button onClick={() => handleDelete(item.id)}>delete</button>
        </p>
        )}
    </>
  )  
  }
export default Person