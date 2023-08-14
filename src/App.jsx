import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header.jsx";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="App_items">
        <div className="App_items_section">
          <Header />
          <Home />
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
