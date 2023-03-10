import React, {useState} from 'react'

const Filter = () => {
    const [filter, setFilter] = useState('')
    const [list, setList] = useState([])

    //filters the list of phone book by the entered value
    const handleFilter = (e) => {
      const filteredVal = list
        .filter(item => {return Object.values(item)
        .join('').toLowerCase()
        .includes(e.target.value)});
      setList(filteredVal);
      // console.log(filteredVal)
    }



  return (
    <>
    <div>
        <p>filter shown with 
          <input type='text' onChange={handleFilter}/>
          </p>
      </div>
    </>
  )
}

export default Filter