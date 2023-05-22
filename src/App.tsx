import "./App.css";

import { Route, Routes } from "react-router-dom";
import ContinentsScreen from "./screen/ContinentsScreen";
import ContinentScreen from "./screen/ContinentScreen";
import CountryScreen from "./screen/CountryScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContinentsScreen />} />
        <Route path="/continent/:code" element={<ContinentScreen />} />
        <Route path="/country" element={<CountryScreen />} />
      </Routes>
    </div>
  );
}

export default App;
