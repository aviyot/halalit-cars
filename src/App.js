import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeAd from "./components/HomeAd";
import CarDetialList from "./components/CarDetialList";
import CarTypes from "./components/CarTypes";
import { useState } from "react";

function App() {
  const [selectedCarType, setSelectedCarType] = useState(null);

  return (
    <div className="App">
      <Header />
      <div style={{ marginTop: "60px" }}>
        {!selectedCarType && <HomeAd />}
        {!selectedCarType && (
          <CarTypes setSelectedCarType={setSelectedCarType} />
        )}
        {selectedCarType && (
          <CarDetialList
            selectedCarType={selectedCarType}
            setSelectedCarType={setSelectedCarType}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
