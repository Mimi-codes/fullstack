import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import CountryData from "./components/CountryData";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [displayCountries, setDisplayCountries] = useState([]);

  //fetches countries data from restcountries api
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

//filters the input values
  const handleSearchChange = (event) => {
    const checkInput = event.target.value;
    setSearch(checkInput);
    setDisplayCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <div>
      <div>
        Find countries <input value={search} onChange={handleSearchChange} />
      </div>
      {displayCountries.length === 1 ? (
        <CountryData country={displayCountries[0]} />
      ) : null}
      {displayCountries.length > 10 ? (
        <div>Too many matches, specify another filter</div>
      ) : (
        <Countries
          displayCountries={displayCountries}
          setDisplayCountries={setDisplayCountries}
        />
      )}
    </div>
  );
};

export default App;