import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

function CarDetialList({ selectedCarType, setSelectedCarType }) {
  const [carDetialList, setCarDetialList] = useState([
    {
      name: " LT שברולוט ספארק",
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
      address: "אשדוד",
      proposal: 300,
      adds: ["הצעה לבדיקת גיר", "אחריות יצרן", "מנוע ושילדה"],
      manYear: "2022",
      km: 3000,
      yad: 2,
      girType: "אוטומטי",
    },
  ]);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            setSelectedCarType(null);
          }}
        >
          חזרה
        </button>

        <h2
          style={{
            textAlign: "right",
            color: "#E2E5E9",
            fontFamily: "Rubik",
            fontSize: "56px",
            fontWeight: "700",
            lineHeight: "36px",
            letterSpacing: "0em",
            marginTop: "2rem",
          }}
        >
          {selectedCarType}
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row-reverse",
          gap: "1rem",
          textAlign: "right",
        }}
      >
        {carDetialList.map((carDetial) => (
          <Card key={carDetial.name} style={{ minWidth: "200px" }}>
            <Card.Header></Card.Header>
            <Card.Body>
              <Card.Title>{carDetial.name}</Card.Title>
              <Card.Text>{carDetial.address}</Card.Text>
              <Card.Text>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      gap: "10px",
                      backgroundColor: "#E2F1FF",
                    }}
                  >
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
                        החל מהחזר חודשי של : <span> {carDetial.proposal}</span>
                      </p>
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span style={{ display: "flex", gap: "2px" }}>
                      <span>שנת יצור</span>
                      <span>{carDetial.manYear}</span>
                    </span>
                    <span style={{ display: "flex", gap: "2px" }}>
                      <span>ק"מ</span>
                      <span>{carDetial.km}</span>
                    </span>
                    <span style={{ display: "flex", gap: "2px" }}>
                      <span>יד</span>
                      <span>{carDetial.yad}</span>
                    </span>
                    <span style={{ display: "flex", gap: "2px" }}>
                      <span>גיר</span>
                      <span>{carDetial.girType}</span>
                    </span>
                  </div>
                </div>
              </Card.Text>
              <Button variant="primary">יצירת קשר</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CarDetialList;
