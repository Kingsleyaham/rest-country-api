import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://restcountries.com/v3.1";

function App() {
  const [isPending, setIsPending] = useState(true);
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    fetchAllCountry();
  }, []);

  const fetchAllCountry = async () => {
    try {
      const response = await axios.get(`${url}/all`);
      setIsPending(false);
      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchByRegion = (region) => {
    setIsPending(true);
    (async () => {
      try {
        const response = await axios.get(`${url}/region/${region}`);
        setIsPending(false);
        setCountries(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  const searchByCountry = (country) => {
    setIsPending(true);
    if (country === "") {
      fetchAllCountry();
      setIsPending(false);
    } else {
      (async () => {
        try {
          const response = await axios.get(`${url}/name/${country}`);
          setIsPending(false);
          setCountries(response.data);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  };

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              countries={countries}
              isPending={isPending}
              fetchByRegion={fetchByRegion}
              searchByCountry={searchByCountry}
            />
          }
        />
        <Route path="/:country" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
