import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import lising from "../assets/carTypes/lising.png";
import geep from "../assets/carTypes/geep.png";
import masait from "../assets/carTypes/masait.png";
import mshari from "../assets/carTypes/mshari.png";
import myuhadim from "../assets/carTypes/myuhadim.png";
import ofona from "../assets/carTypes/ofona.png";
import prati from "../assets/carTypes/prati.png";
import shait from "../assets/carTypes/shait.png";

export default function CarTypes({ setSelectedUI, setSelectedCarType }) {
  const [carTypes, setCarTypes] = useState([
    {
      name: "ליסינג",
      imgSrc: lising,
    },
    {
      name: "פרטי",
      imgSrc: prati,
    },
    {
      name: "משאית",
      imgSrc: masait,
    },
    {
      name: "מסחרי",
      imgSrc: mshari,
    },
    {
      name: "גיפים",
      imgSrc: geep,
    },
    {
      name: "אופנועים",
      imgSrc: ofona,
    },
    {
      name: "כלי שייט",
      imgSrc: shait,
    },
    {
      name: "מיוחדים",
      imgSrc: myuhadim,
    },
  ]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "end",
        flexDirection: "row-reverse",
        gap: "1rem",
        margin: "0 1rem",
      }}
    >
      {carTypes.map((item) => (
        <Card
          onClick={() => {
            setSelectedUI("CARS_LIST");
            setSelectedCarType(item.name);
          }}
        >
          <Card.Title
            style={{
              alignSelf: "flex-end",
              marginRight: "1rem",
              fontFamily: "Rubik",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "36px",
              color: "#919497",
            }}
          >
            {item.name}
          </Card.Title>
          <Card.Img
            variant="top"
            src={item.imgSrc}
            style={{ height: "100px", width: "100%", borderRadius: "1rem" }}
          />
        </Card>
      ))}
    </div>
  );
}
