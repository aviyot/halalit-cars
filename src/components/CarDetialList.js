import React, { useState } from "react";
import car1 from "../assets/car-list-lising/car1.png";
import car2 from "../assets/car-list-lising/car2.png";
import car3 from "../assets/car-list-lising/car3.png";
import car4 from "../assets/car-list-lising/car4.png";
import car5 from "../assets/car-list-lising/car5.png";
import car6 from "../assets/car-list-lising/car6.png";
import car7 from "../assets/car-list-lising/car7.png";
import car8 from "../assets/car-list-lising/car8.png";
import key from "../assets/key.png";
import keyHold from "../assets/keyHold.png";
import type_list_car_cover from "../assets/type_list_car_cover.png";

function CarDetialList({ selectedCarType, setSelectedCarType }) {
  const [carDetialList, setCarDetialList] = useState([
    {
      name: " LT שברולוט ספארק",
      img: car1,
      address: "נתניה",
      proposal: 300,
      adds: ["הצעה לבדיקת גיר", "אחריות יצרן", "מנוע ושילדה"],
      manYear: "2022",
      km: 3000,
      yad: 2,
      girType: "אוטומטי",
    },
    {
      name: "AMBITION סקודה אוקטביה",
      img: car2,
      address: "אשדוד",
      proposal: 300,
      adds: ["הצעה לבדיקת גיר", "אחריות יצרן", "מנוע ושילדה"],
      manYear: "2022",
      km: 3000,
      yad: 2,
      girType: "אוטומטי",
    },
    {
      name: "PRIME PLUS יונדאי טוסון",
      img: car3,
      address: "אילת",
      proposal: 300,
      adds: ["הצעה לבדיקת גיר", "אחריות יצרן", "מנוע ושילדה"],
      manYear: "2022",
      km: 3000,
      yad: 2,
      girType: "אוטומטי",
    },
    {
      name: "SPORT מאזדה ",
      img: car4,
      address: "נתניה",
      proposal: 300,
      adds: ["הצעה לבדיקת גיר", "אחריות יצרן", "מנוע ושילדה"],
      manYear: "2022",
      km: 3000,
      yad: 2,
      girType: "אוטומטי",
    },
    {
      name: "INTENSE רנו קפצ'ור",
      img: car5,
      address: "נתניה",
      proposal: 300,
      adds: ["הצעה לבדיקת גיר", "אחריות יצרן", "מנוע ושילדה"],
      manYear: "2022",
      km: 3000,
      yad: 2,
      girType: "אוטומטי",
    },
    {
      name: "AMBITION סקודה אוקטביה",
      img: car6,
      address: "אשדוד",
      proposal: 300,
      adds: ["הצעה לבדיקת גיר", "אחריות יצרן", "מנוע ושילדה"],
      manYear: "2022",
      km: 3000,
      yad: 2,
      girType: "אוטומטי",
    },
    {
      name: "CX-5 LUXURY מאזדה",
      img: car7,
      address: "אשדוד",
      proposal: 300,
      adds: ["הצעה לבדיקת גיר", "אחריות יצרן", "מנוע ושילדה"],
      manYear: "2022",
      km: 3000,
      yad: 2,
      girType: "אוטומטי",
    },
    {
      name: "530E LINE 5 ב.מ.וו סדרה",
      img: car8,
      address: "חדרה",
      proposal: 300,
      adds: ["הצעה לבדיקת גיר", "אחריות יצרן", "מנוע ושילדה"],
      manYear: "2022",
      km: 3000,
      yad: 2,
      girType: "אוטומטי",
    },
  ]);
  return (
    <div
      style={{
        background: `url(${type_list_car_cover})`,
        backgroundSize: "100% 200px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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
          }}
        >
          <span className="flex" style={{ justifyContent: "space-around" }}>
            <span class="material-icons">arrow_forward</span>
            <span style={{ font: "Robik", fontWeight: "600" }}>חזרה</span>
          </span>
        </button>
      </div>
      <div
        className="grid-md grid-lg"
        style={{ gridRowGap: "50px", gridColumnGap: "50px" }}
      >
        {carDetialList.map((carDetial) => (
          <div
            key={carDetial.name}
            style={{
              Width: "100%",
              borderRadius: "15px",
              boxShadow: "5px 10px 18px #888888",
              paddingBottom: "20px",
            }}
          >
            <img src={carDetial.img} className="car-detial-img" />
            <h3 style={{ fontSize: "20px", font: "Robik", fontWeight: "700" }}>
              {carDetial.name}
            </h3>
            <span className="flex" style={{ fontSize: "16px" }}>
              <span class="material-icons">pin_drop</span>
              <span>{carDetial.address}</span>
            </span>
            <h4>
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    backgroundColor: "#E2F1FF",
                    padding: "8px",
                    fontSize: "14px",
                  }}
                >
                  <span style={{ textAlign: "right" }}>
                    <span
                      style={{
                        fontFamily: "Rubik",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "14px",
                        lineHeight: "36px",
                        textAlign: "right",
                        color: "#F0863A",
                        display: "block",
                      }}
                    >
                      הצעה למימון
                    </span>
                    <span>
                      החל מהחזר חודשי של :{" "}
                      <span style={{ fontWeight: "700" }}>
                        {" "}
                        {carDetial.proposal + " " + "שח"}
                      </span>
                    </span>
                  </span>
                  <span>
                    <span
                      style={{
                        fontFamily: "Rubik",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "14px",
                        lineHeight: "36px",
                        textAlign: "right",
                        color: "#282932",
                      }}
                    >
                      תוספות לעיסקה
                    </span>
                    <ul>
                      {carDetial.adds.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "space-around",
                    fontSize: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      gap: "2px",
                      flexDirection: "column",
                    }}
                  >
                    <span>שנת יצור</span>
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {carDetial.manYear}
                    </span>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      gap: "2px",
                      flexDirection: "column",
                    }}
                  >
                    <span>ק"מ</span>
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {carDetial.km}
                    </span>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      gap: "2px",
                      flexDirection: "column",
                    }}
                  >
                    <span>יד</span>
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {carDetial.yad}
                    </span>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      gap: "2px",
                      flexDirection: "column",
                    }}
                  >
                    <span>גיר</span>
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      {carDetial.girType}
                    </span>
                  </span>
                </div>
              </div>
            </h4>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                variant="primary"
                style={{
                  width: "60%",
                  color: "white",
                  border: 0,
                  height: "40px",
                  background:
                    "linear-gradient(93.23deg, #EF8539 8.5%, #F7A66C 100%)",
                  boxShadow: "0px 9px 15px rgba(184, 95, 31, 0.6)",
                  borderRadius: "40px",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    lineHeight: "36px",
                  }}
                >
                  יצירת קשר
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarDetialList;
