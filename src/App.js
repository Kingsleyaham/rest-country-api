import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import useFetch from "./hooks/useFetch";

function App() {
  const { isPending, data: countries } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home countries={countries} isPending={isPending} />}
        />
        <Route path="/:countryId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
