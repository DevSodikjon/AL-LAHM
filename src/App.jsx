import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Tahrirlash from "./components/tahrirlash/Tahrirlash.jsx";

function App() {
  return (
    <div className="App">
      <div className="App_items">
        <div className="App_items_section">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/tahrirlash" element={<Tahrirlash />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
