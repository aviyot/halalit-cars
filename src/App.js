import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeAd from "./components/HomeAd";
import CarDetialList from "./components/CarDetialList";
import CarTypes from "./components/CarTypes";
import { useState } from "react";

function App() {
  const UI = ["CAR_TYPES", "CARS_LIST"];
  const [selectedUI, setSelectedUI] = useState(UI[0]);
  const [selectedCarType, setSelectedCarType] = useState(null);

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        {UI.map((ui) => (
          <button
            className="btn"
            onClick={() => {
              setSelectedUI(ui);
            }}
          >
            {ui}
          </button>
        ))}
      </div>
      <Header />
      {!selectedCarType && <HomeAd />}
      {!selectedCarType && (
        <CarTypes
          setSelectedUI={setSelectedUI}
          setSelectedCarType={setSelectedCarType}
        />
      )}
      {selectedCarType && (
        <CarDetialList
          selectedCarType={selectedCarType}
          setSelectedCarType={setSelectedCarType}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
