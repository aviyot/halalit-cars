import React, { useState } from "react";
import car_detail_list from "../data/car_detail_list.json";
import key from "../assets/key.png";
import keyHold from "../assets/keyHold.png";
import type_list_car_cover from "../assets/type_list_car_cover.png";
import CarCard from "./CarCard";
import CarDetial from "./CarDetial";

function CarDetialList({ selectedCarType, setSelectedCarType, setSelectedUI }) {
  const [carDetial, setCarDetial] = useState(null);
  const [carDetialList] = useState(car_detail_list);

  return (
    <>
      {!carDetial ? (
        <div
          style={{
            background: `url(${type_list_car_cover})`,
            backgroundSize: "100% 300px",
            backgroundRepeat: "no-repeat",
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10%",
            }}
          >
            <h2
              style={{
                textAlign: "right",
                color: "#E2E5E9",
                fontFamily: "Rubik",
                fontSize: "56px",
                fontWeight: "700",
                lineHeight: "36px",
                letterSpacing: "0em",
                margin: "2rem",
              }}
            >
              <div className="flex gap-8">
                <div
                  className="br-100"
                  style={{
                    backgroundColor: "#EF8539",
                    width: "40px",
                    height: "40px",
                    textAlign: "center",
                  }}
                >
                  <img src={keyHold}></img>
                  <img src={key}></img>
                </div>
                <span> {selectedCarType}</span>
              </div>
            </h2>
            <button
              className="bg-trans b-0"
              style={{
                alignSelf: "center",
                margin: "2rem",
                borderRadius: "30px",
                width: "120px",
                height: "40px",
                backgroundColor: "white",
                color: "#378AD7",
              }}
              onClick={() => {
                setSelectedCarType(null);
                setSelectedUI("HOME");
              }}
            >
              <span className="flex" style={{ justifyContent: "space-around" }}>
                <span class="material-icons">arrow_forward</span>
                <span style={{ font: "Robik", fontWeight: "600" }}>חזרה</span>
              </span>
            </button>
          </div>
          <div className="grid-md grid-5">
            {carDetialList.map((carDetial) => (
              <CarCard
                key={carDetial.name}
                carDetial={carDetial}
                setCarDetial={setCarDetial}
              />
            ))}
          </div>
        </div>
      ) : (
        <CarDetial carDetial={carDetial} setCarDetial={setCarDetial} />
      )}
    </>
  );
}

export default CarDetialList;
