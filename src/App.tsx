import "./App.css";

import { Route, Routes } from "react-router-dom";
import ContinentsScreen from "./screen/ContinentsScreen";
import ContinentScreen from "./screen/ContinentScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContinentsScreen />} />
        <Route path="/continent" element={<ContinentScreen />} />
      </Routes>
    </div>
  );
}

export default App;
