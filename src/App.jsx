import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Tahrirlash from "./components/tahrirlash/Tahrirlash.jsx";
import Login from "./components/sections/Login";
import AddProducts from "./components/sections/AddProducts";
import AddAcc from "./components/sections/AddAcc";
import AddComments from "./components/sections/AddComments";

function App() {
  return (
    <div className="App">
      <div className="App_items">
        <div className="App_items_section">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/tahrirlash" element={<Tahrirlash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<AddProducts />} />
            <Route path="/aksesuar" element={<AddAcc />} />
            <Route path="/comment" element={<AddComments />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
