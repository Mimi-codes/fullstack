
//checks the length of the country and returns no info if the length equals 1 but displays info (country name and button to show more info) if it is not
const Countries = ({ displayCountries, setDisplayCountries }) => {
    if (displayCountries.length === 1) {
        return null;
    } 

    return (
     displayCountries.map((country) => (
      <div key={country.name.official}>
        {country.name.common}
        <button onClick={() => setDisplayCountries([country])}>show</button>
      </div>
     )
    ));
  };
  
  export default Countries;