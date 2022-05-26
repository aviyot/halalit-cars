import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function CarDetial() {
  const [carDetial, setCarDetial] = useState({
    name: " LT שברולוט ספארק",
    address: "נתניה",
    proposal: 300,
    adds: ["הצעה לבדיקת גיר", "אחריות יצרן", "מנוע ושילדה"],
    manYear: "2022",
    km: 3000,
    yad: 2,
    girType: "אוטומטי",
  });
  return (
    <Card>
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
                    <li>{item}</li>
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
  );
}
