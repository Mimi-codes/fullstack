import React, {useState} from 'react'

const PersonForm = () => {
    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')
    const [list, setList] = useState([])


  //form handler which has an object that saves the entered values of new names and numbers
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // console.log(list)
    
    //data is an object of newName and newNum with state updating function setList
    //setList creates a copy of item and adds the data value to it
    const data = {newName, newNum}
    
    //checks and alert if entered name has been added to the phone book already
    //if not, it adds to the list of phone book
    const isAvailable = list.some((item) => item.newName === data.newName)
    if(isAvailable) {
      // console.log(data.newName)
    alert (`${data.newName} has already been added to phone book`)
    } 
    else {
      setList(item => [...item, data])
    setNewName('')
    setNewNum('')
    }
    // console.log(data)
    }
    
    // handles the state updating function of the new input value
      const changeInputVal = (e) => {
    setNewName(e.target.value)
      }
    
      // handles the state updating function of the new input value
      const changeNumVal = (e) => {
        setNewNum(e.target.value)
          }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input 
          value={newName}
          onChange = {changeInputVal}
          />
        </div>
        <div>
          number: <input type='number'
          value={newNum}
          onChange = {changeNumVal}
          />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
<div>
  {list.map((item) => 
  <p key={`item ${item.newName}`}>{item.newName} {item.newNum}</p>
  ) 
}
</div>
    </>
  )
}

export default PersonForm