import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeAd from "./components/HomeAd";
import CarDetialList from "./components/CarDetialList";
import CarTypes from "./components/CarTypes";
import CarFilterResult from "./components/CarFilterResult";
import { useState } from "react";

function App() {
  const [selectedCarType, setSelectedCarType] = useState(null);
  const [selectedUI, setSelectedUI] = useState("HOME");

  return (
    <div className="App">
      <Header setSelectedUI={setSelectedUI} selectedUI={selectedUI} />
      <div
        style={{
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        {(() => {
          switch (selectedUI) {
            case "HOME":
              return (
                <>
                  <HomeAd />
                  <CarTypes
                    setSelectedCarType={setSelectedCarType}
                    setSelectedUI={setSelectedUI}
                  />
                </>
              );
            case "CAR_DETIAL_LIST":
              return (
                <>
                  <CarDetialList
                    selectedCarType={selectedCarType}
                    setSelectedCarType={setSelectedCarType}
                    setSelectedUI={setSelectedUI}
                  />
                </>
              );
            case "CAR_FILTER_RESULT":
              return (
                <>
                  <CarFilterResult />
                </>
              );
            default:
              return null;
          }
        })()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
