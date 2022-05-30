import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import car1 from "../assets/car-list-lising/car1.png";
import car2 from "../assets/car-list-lising/car2.png";
import car3 from "../assets/car-list-lising/car3.png";
import car4 from "../assets/car-list-lising/car4.png";
import car5 from "../assets/car-list-lising/car5.png";
import car6 from "../assets/car-list-lising/car6.png";
import car7 from "../assets/car-list-lising/car7.png";
import car8 from "../assets/car-list-lising/car8.png";
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
          {selectedCarType}
        </h2>
        <button
          className="btn btn-outline-primary"
          style={{ alignSelf: "center", margin: "2rem" }}
          onClick={() => {
            setSelectedCarType(null);
          }}
        >
          חזרה
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          textAlign: "right",
          justifyContent: "center",
        }}
      >
        {carDetialList.map((carDetial) => (
          <Card
            key={carDetial.name}
            style={{ minWidth: "200px", maxWidth: "300px" }}
          >
            <Card.Body style={{ padding: "0 0" }}>
              <Card.Img
                variant="top"
                src={carDetial.img}
                style={{ height: "100px", width: "100%", borderRadius: "1rem" }}
              />
              <Card.Title>{carDetial.name}</Card.Title>
              <Card.Text>{carDetial.address}</Card.Text>
              <Card.Text>
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      backgroundColor: "#E2F1FF",
                      padding: "8px",
                    }}
                  >
                    <span style={{ textAlign: "right" }}>
                      <p
                        style={{
                          fontFamily: "Rubik",
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "14px",
                          lineHeight: "36px",
                          textAlign: "right",
                          color: "#F0863A",
                        }}
                      >
                        הצעה למימון
                      </p>
                      <p>
                        החל מהחזר חודשי של :{" "}
                        <span style={{ fontWeight: "700" }}>
                          {" "}
                          {carDetial.proposal + " " + "שח"}
                        </span>
                      </p>
                    </span>
                    <span>
                      <p
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
                      </p>
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
              </Card.Text>
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
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CarDetialList;
