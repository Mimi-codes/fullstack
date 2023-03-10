import React, {useState} from 'react'

const Filter = ({person, newName}) => {
    const [filter, setFilter] = useState('')

    /*
    //filters the list of phone book by the entered value
    const handleFilter = (e) => {
      const filteredVal = list
      .filter(item => {
        return item.newName.indexOf(list.toLowerCase()) >= 0
      })
        // .filter(item => {return Object.values(item)
        // .join('').toLowerCase()
        // .includes(e.target.value)});
      setList(filteredVal);
      setFilter(e.target.value)
      // console.log(filteredVal)
    }
   

 
    const filteredList  = person.filter(item =>  {
      return item.newName.indexOf(newName) > 0
    }).map(item => {
     return <p>{item.newName}</p>
    })

 */
    const handleFilter = (e) => {
      setFilter(e.target.value)
    }
 

  return (
    <>
    <div>
        <p>filter shown with 
          <input type='text' value={filter} onChange={handleFilter}/>
          </p>
      </div>
      
    </>
  )
}


export default Filter