import { Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext, useContext, useMemo } from "react";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const url = "https://restcountries.com/v3.1";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function getTheme() {
  let theme = "";
  if (localStorage) {
    theme = localStorage.getItem("theme");

    if (theme === "dark") {
      return "dark";
    } else {
      return "light";
    }
  }
}

function App() {
  const [isPending, setIsPending] = useState(true);
  const [countries, setCountries] = useState(null);

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

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
      <Header colorMode={colorMode.toggleColorMode} />
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

export default function ToggleColorMode() {
  const [mode, setMode] = useState(() => getTheme());

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        let newTheme = mode === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,

          ...(mode === "dark" && {
            background: {
              default: "#202c37",
              paper: "#2b3945",
            },
          }),
          ...(mode === "light" && {
            background: {
              default: "#fafafa",
              paper: "#fff",
            },
          }),
          text: {
            ...(mode === "light"
              ? {
                  primary: "#111517",
                  secondary: "#858585",
                }
              : {
                  primary: "#ffffff",
                  // secondary: ''
                }),
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
